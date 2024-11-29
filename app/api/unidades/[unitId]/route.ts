import db from "@/db/drizzle";
import { units } from "@/db/schema";
import { isAdmin } from "@/lib/admin";
import { eq } from "drizzle-orm";
<<<<<<< HEAD
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
=======
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
>>>>>>> 55697f540eed3abfdd649bc60e8ad910f540a0b1
  { params }: { params: { unitId: number } }
) => {
  if (!isAdmin()) {
    return new Response("Unauthorized", { status: 403 });
  }
  const data = await db.query.units.findFirst({
    where: eq(units.id, params.unitId),
  });

  return NextResponse.json(data);
};

export const PUT = async (
<<<<<<< HEAD
  req: Request,
=======
  req: NextRequest,
>>>>>>> 55697f540eed3abfdd649bc60e8ad910f540a0b1
  { params }: { params: { unitId: number } }
) => {
  if (!isAdmin()) {
    return new Response("Unauthorized", { status: 403 });
  }

  const body = await req.json();
  const data = await db
    .update(units)
    .set({
      ...body,
    })
    .where(eq(units.id, params.unitId)).returning();

  return NextResponse.json(data[0]);
};

export const DELETE = async (
<<<<<<< HEAD
  req: Request,
=======
  req: NextRequest,
>>>>>>> 55697f540eed3abfdd649bc60e8ad910f540a0b1
  { params }: { params: { unitId: number } }
) => {
  if (!isAdmin()) {
    return new Response("Unauthorized", { status: 403 });
  }

  const data = await db.delete(units).where(eq(units.id, params.unitId)).returning();

  return NextResponse.json(data[0]);
};