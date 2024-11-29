import db from "@/db/drizzle";
import { courses } from "@/db/schema";
import { isAdmin } from "@/lib/admin";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  _req: Request,
  { params }: { params: { courseId: number } }
) => {
  if (!isAdmin()) {
    return new Response("Unauthorized", { status: 403 });
  }
  const data = await db.query.courses.findFirst({
    where: eq(courses.id, params.courseId),
  });

  return NextResponse.json(data);
};

export const PUT = async (
  req: NextRequest,
  { params }: { params: { courseId: number } }
) => {
  if (!isAdmin()) {
    return new Response("Unauthorized", { status: 403 });
  }

  const body = await req.json();
  const data = await db
    .update(courses)
    .set({
      ...body,
    })
    .where(eq(courses.id, params.courseId)).returning();

  return NextResponse.json(data[0]);
};

export const DELETE = async (
  _req: NextRequest,
  { params }: { params: { courseId: number } }
) => {
  if (!isAdmin()) {
    return new Response("Unauthorized", { status: 403 });
  }

  const data = await db.delete(courses).where(eq(courses.id, params.courseId)).returning();

  return NextResponse.json(data[0]);
};