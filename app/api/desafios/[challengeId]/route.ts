import db from "@/db/drizzle";
import { challenges } from "@/db/schema";
import { isAdmin } from "@/lib/admin";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export const GET = async (
  _req: Request,
  { params }: { params: { challengeId: string } },  // Alterado para 'string'
) => {
  if (!isAdmin()) {
    return new Response("Unauthorized", { status: 403 });
  }

  // Converte challengeId para número
  const challengeId = Number(params.challengeId);

  if (isNaN(challengeId)) {
    return new Response("Invalid challengeId", { status: 400 });
  }

  const data = await db.query.challenges.findFirst({
    where: eq(challenges.id, challengeId),
  });

  return NextResponse.json(data);
};

export const PUT = async (
  req: Request,
  { params }: { params: { challengeId: string } }  // Alterado para 'string'
) => {
  if (!isAdmin()) {
    return new Response("Unauthorized", { status: 403 });
  }

  const body = await req.json();

  // Converte challengeId para número
  const challengeId = Number(params.challengeId);

  if (isNaN(challengeId)) {
    return new Response("Invalid challengeId", { status: 400 });
  }

  const data = await db
    .update(challenges)
    .set({
      ...body,
    })
    .where(eq(challenges.id, challengeId))
    .returning();

  return NextResponse.json(data[0]);
};

export const DELETE = async (
  _req: Request,
  { params }: { params: { challengeId: string } }  // Alterado para 'string'
) => {
  if (!isAdmin()) {
    return new Response("Unauthorized", { status: 403 });
  }

  // Converte challengeId para número
  const challengeId = Number(params.challengeId);

  if (isNaN(challengeId)) {
    return new Response("Invalid challengeId", { status: 400 });
  }

  const data = await db.delete(challenges).where(eq(challenges.id, challengeId)).returning();

  return NextResponse.json(data[0]);
};
