import db from "@/db/drizzle";
import { courses } from "@/db/schema";
import { isAdmin } from "@/lib/admin";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export const GET = async (
  _req: Request,
  { params }: { params: { courseId: string } }
) => {
  if (!isAdmin()) {
    return new Response("Unauthorized", { status: 403 });
  }

  // Converte o courseId para number
  const courseId = Number(params.courseId);
  
  if (isNaN(courseId)) {
    return new Response("Invalid courseId", { status: 400 });
  }

  const data = await db.query.courses.findFirst({
    where: eq(courses.id, courseId),
  });

  return NextResponse.json(data);
};

export const PUT = async (
  req: Request,
  { params }: { params: { courseId: string } }
) => {
  if (!isAdmin()) {
    return new Response("Unauthorized", { status: 403 });
  }

  const body = await req.json();
  
  // Converte o courseId para number
  const courseId = Number(params.courseId);
  
  if (isNaN(courseId)) {
    return new Response("Invalid courseId", { status: 400 });
  }

  const data = await db
    .update(courses)
    .set({
      ...body,
    })
    .where(eq(courses.id, courseId))
    .returning();

  return NextResponse.json(data[0]);
};

export const DELETE = async (
  _req: Request,
  { params }: { params: { courseId: string } }
) => {
  if (!isAdmin()) {
    return new Response("Unauthorized", { status: 403 });
  }

  // Converte o courseId para number
  const courseId = Number(params.courseId);
  
  if (isNaN(courseId)) {
    return new Response("Invalid courseId", { status: 400 });
  }

  const data = await db
    .delete(courses)
    .where(eq(courses.id, courseId))
    .returning();

  return NextResponse.json(data[0]);
};
