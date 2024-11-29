import db from "@/db/drizzle";
import { challengeOptions } from "@/db/schema";
import { isAdmin } from "@/lib/admin";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export const GET = async (
  _req: Request,
  { params }: { params: { challengeOptionId: string } }
) => {
  if (!isAdmin()) {
    return new Response("Unauthorized", { status: 403 });
  }

  // Converte challengeOptionId para número
  const challengeOptionId = Number(params.challengeOptionId);

  if (isNaN(challengeOptionId)) {
    return new Response("Invalid challengeOptionId", { status: 400 });
  }

  const data = await db.query.challengeOptions.findFirst({
    where: eq(challengeOptions.id, challengeOptionId),
  });

  return NextResponse.json(data);
};

export const PUT = async (
  req: Request,
  { params }: { params: { challengeOptionId: string } }
) => {
  if (!isAdmin()) {
    return new Response("Unauthorized", { status: 403 });
  }

  const body = await req.json();

  // Converte challengeOptionId para número
  const challengeOptionId = Number(params.challengeOptionId);

  if (isNaN(challengeOptionId)) {
    return new Response("Invalid challengeOptionId", { status: 400 });
  }

  const data = await db
    .update(challengeOptions)
    .set({
      ...body,
    })
    .where(eq(challengeOptions.id, challengeOptionId))
    .returning();

  return NextResponse.json(data[0]);
};

export const DELETE = async (
  req: Request,
  { params }: { params: { challengeOptionId: string } }
) => {
  if (!isAdmin()) {
    return new Response("Unauthorized", { status: 403 });
  }

  // Converte challengeOptionId para número
  const challengeOptionId = Number(params.challengeOptionId);

  if (isNaN(challengeOptionId)) {
    return new Response("Invalid challengeOptionId", { status: 400 });
  }

  const data = await db
    .delete(challengeOptions)
    .where(eq(challengeOptions.id, challengeOptionId))
    .returning();

  return NextResponse.json(data[0]);
};
