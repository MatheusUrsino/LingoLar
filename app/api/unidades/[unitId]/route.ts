import db from "@/db/drizzle";
import { units } from "@/db/schema";
import { isAdmin } from "@/lib/admin";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { unitId: string } }  // Alterado para 'string'
) => {
  if (!isAdmin()) {
    return new Response("Unauthorized", { status: 403 });
  }

  const unitId = Number(params.unitId);

  if (isNaN(unitId)) {
    return new Response("Invalid unitId", { status: 400 });
  }

  const data = await db.query.units.findFirst({
    where: eq(units.id, unitId),
  });

  return NextResponse.json(data);
};

export const PUT = async (
  req: NextRequest,
  { params }: { params: { unitId: string } }  // Alterado para 'string'
) => {
  if (!isAdmin()) {
    return new Response("Unauthorized", { status: 403 });
  }

  const body = await req.json();
  const unitId = Number(params.unitId);

  if (isNaN(unitId)) {
    return new Response("Invalid unitId", { status: 400 });
  }

  const data = await db
    .update(units)
    .set({
      ...body,
    })
    .where(eq(units.id, unitId))
    .returning();

  return NextResponse.json(data[0]);
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { unitId: string } }  // Alterado para 'string'
) => {
  if (!isAdmin()) {
    return new Response("Unauthorized", { status: 403 });
  }

  const unitId = Number(params.unitId);

  if (isNaN(unitId)) {
    return new Response("Invalid unitId", { status: 400 });
  }

  const data = await db.delete(units).where(eq(units.id, unitId)).returning();

  return NextResponse.json(data[0]);
};
