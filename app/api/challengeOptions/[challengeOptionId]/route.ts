import db from "@/db/drizzle";
import { challengeOptions } from "@/db/schema";
import { isAdmin } from "@/lib/admin";
import { eq } from "drizzle-orm";
import { NextResponse, NextRequest } from "next/server";

export const GET = async (
  req: NextRequest,  // Corrigido o tipo para NextRequest
  { params }: { params: { challengeOptionId: string } } // Corrigido para 'string'
) => {
  if (!isAdmin()) {
    return new Response("Unauthorized", { status: 403 });
  }
  const data = await db.query.challengeOptions.findFirst({
    where: eq(challengeOptions.id, parseInt(params.challengeOptionId)), // Garantir que o ID seja um número
  });

  return NextResponse.json(data);
};

export const PUT = async (
  req: NextRequest,
  { params }: { params: { challengeOptionId: string } } // Corrigido para 'string'
) => {
  if (!isAdmin()) {
    return new Response("Unauthorized", { status: 403 });
  }

  const body = await req.json();
  const data = await db
    .update(challengeOptions)
    .set({
      ...body,
    })
    .where(eq(challengeOptions.id, parseInt(params.challengeOptionId))) // Garantir que o ID seja um número
    .returning();

  return NextResponse.json(data[0]);
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { challengeOptionId: string } } // Corrigido para 'string'
) => {
  if (!isAdmin()) {
    return new Response("Unauthorized", { status: 403 });
  }

  const data = await db.delete(challengeOptions).where(eq(challengeOptions.id, parseInt(params.challengeOptionId))) // Garantir que o ID seja um número
    .returning();

  return NextResponse.json(data[0]);
};
