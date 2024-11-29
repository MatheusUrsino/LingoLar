import db from "@/db/drizzle";
import { lessons } from "@/db/schema";
import { isAdmin } from "@/lib/admin";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export const GET = async (
  _req: Request,
  { params }: { params: { lessonId: string } }  // Alterado para 'string'
) => {
  if (!isAdmin()) {
    return new Response("Unauthorized", { status: 403 });
  }

  // Converte lessonId para número
  const lessonId = Number(params.lessonId);

  if (isNaN(lessonId)) {
    return new Response("Invalid lessonId", { status: 400 });
  }

  const data = await db.query.lessons.findFirst({
    where: eq(lessons.id, lessonId),
  });

  return NextResponse.json(data);
};

export const PUT = async (
  req: Request,
  { params }: { params: { lessonId: string } }  // Alterado para 'string'
) => {
  if (!isAdmin()) {
    return new Response("Unauthorized", { status: 403 });
  }

  const body = await req.json();

  // Converte lessonId para número
  const lessonId = Number(params.lessonId);

  if (isNaN(lessonId)) {
    return new Response("Invalid lessonId", { status: 400 });
  }

  const data = await db
    .update(lessons)
    .set({
      ...body,
    })
    .where(eq(lessons.id, lessonId))
    .returning();

  return NextResponse.json(data[0]);
};

export const DELETE = async (
  _req: Request,
  { params }: { params: { lessonId: string } }  // Alterado para 'string'
) => {
  if (!isAdmin()) {
    return new Response("Unauthorized", { status: 403 });
  }

  // Converte lessonId para número
  const lessonId = Number(params.lessonId);

  if (isNaN(lessonId)) {
    return new Response("Invalid lessonId", { status: 400 });
  }

  const data = await db.delete(lessons).where(eq(lessons.id, lessonId)).returning();

  return NextResponse.json(data[0]);
};
