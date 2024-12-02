import db from "@/db/drizzle";
import { units } from "@/db/schema";
import { isAdmin } from "@/lib/admin";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: Promise<{ unitId: number }> }
) => {
  const unitIdConst = (await params).unitId
 
  const data = await db.query.units.findFirst({
    where: eq(units.id, unitIdConst),
  });

  return NextResponse.json(data);
};

export const PUT = async (
  req: Request,
    { params }: { params: Promise<{ unitId: number }> }
) => {
    const unitIdConst = (await params).unitId
 

  const body = await req.json();
  const data = await db
    .update(units)
    .set({
      ...body,
    })
    .where(eq(units.id, unitIdConst)).returning();

  return NextResponse.json(data[0]);
};

export const DELETE = async (
  req: Request,
   { params }: { params: Promise<{ unitId: number }> }
) => {
    const unitIdConst = (await params).unitId
 

  const data = await db.delete(units).where(eq(units.id, unitIdConst)).returning();

  return NextResponse.json(data[0]);
};