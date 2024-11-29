import db from "@/db/drizzle";
import { challengeOptions } from "@/db/schema";
import { isAdmin } from "@/lib/admin";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { challengeOptionId: string } } // Mudança para string, já que os parâmetros de URL são strings
) => {
  if (!isAdmin()) {
    return new Response("Unauthorized", { status: 403 });
  }

  // Converte challengeOptionId para número, pois o valor é string por padrão
  const data = await db.query.challengeOptions.findFirst({
    where: eq(challengeOptions.id, parseInt(params.challengeOptionId, 10)),
  });

  return NextResponse.json(data);
};

export const PUT = async (
  req: Request,
  { params }: { params: { challengeOptionId: string } } // Mudança para string
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
    .where(eq(challengeOptions.id, parseInt(params.challengeOptionId, 10))) // Converte para número
    .returning();

  return NextResponse.json(data[0]);
};

export const DELETE = async (
  req: Request,
  { params }: { params: { challengeOptionId: string } } // Mudança para string
) => {
  if (!isAdmin()) {
    return new Response("Unauthorized", { status: 403 });
  }

  const data = await db
    .delete(challengeOptions)
    .where(eq(challengeOptions.id, parseInt(params.challengeOptionId, 10))) // Converte para número
    .returning();

  return NextResponse.json(data[0]);
};
