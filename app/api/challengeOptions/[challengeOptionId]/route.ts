import db from "@/db/drizzle";
import { challengeOptions } from "@/db/schema";
import { isAdmin } from "@/lib/admin";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: Promise<{ challengeOptionId: number }> }
) => {
  const challengeOptionIdConst = (await params).challengeOptionId;

  const data = await db.query.challengeOptions.findFirst({
    where: eq(challengeOptions.id, challengeOptionIdConst),
  });

  return NextResponse.json(data);
};

export const PUT = async (
  req: Request,
  { params }: { params: Promise<{ challengeOptionId: number }> }
) => {
  const challengeOptionIdConst = (await params).challengeOptionId;
  const correctPassword = "123"; // Senha para acesso


  const body = await req.json();
  const data = await db
    .update(challengeOptions)
    .set({
      ...body,
    })
    .where(eq(challengeOptions.id, challengeOptionIdConst)).returning();

  return NextResponse.json(data[0]);
};

export const DELETE = async (
  req: Request,
  { params }: { params: Promise<{ challengeOptionId: number }> }
) => {
  const challengeOptionIdConst = (await params).challengeOptionId;
  const correctPassword = "123"; // Senha para acesso


  const data = await db.delete(challengeOptions).where(eq(challengeOptions.id, challengeOptionIdConst)).returning();

  return NextResponse.json(data[0]);
};