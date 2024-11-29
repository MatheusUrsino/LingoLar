import db from "@/db/drizzle";
import { challengeOptions } from "@/db/schema";
import { isAdmin } from "@/lib/admin";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

// O parâmetro 'params' é inferido pelo Next.js, então não precisa ser explicitamente tipado
export const GET = async (
  _req: NextRequest, 
  { params }: { params: { challengeOptionId: string } } // Use o tipo correto para params
) => {
  if (!isAdmin()) {
    return new Response("Unauthorized", { status: 403 });
  }

  // Converter o parâmetro para número
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
  req: NextRequest, 
  { params }: { params: { challengeOptionId: string } }
) => {
  if (!isAdmin()) {
    return new Response("Unauthorized", { status: 403 });
  }

  const body = await req.json();
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
  req: NextRequest, 
  { params }: { params: { challengeOptionId: string } }
) => {
  if (!isAdmin()) {
    return new Response("Unauthorized", { status: 403 });
  }

  const challengeOptionId = Number(params.challengeOptionId);

  if (isNaN(challengeOptionId)) {
    return new Response("Invalid challengeOptionId", { status: 400 });
  }

  const data = await db.delete(challengeOptions).where(eq(challengeOptions.id, challengeOptionId)).returning();

  return NextResponse.json(data[0]);
};
