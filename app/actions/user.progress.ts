"use server";

import db from "@/db/drizzle";
import { getCoursesById, getUserProgress } from "@/db/queries";
import { challengeProgress, challenges, userProgress } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
import { error } from "console";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
const POINTS_TO_REFIL = 10;

export const upsertUserProgress = async (courseId: number) => {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId || !user) {
    throw new Error("Não autorizado");
  }

  const course = await getCoursesById(courseId);

  if (!course) {
    throw new Error("Curso não encontrado");
  }

  // Uso: hailitar apenas quando as unidades e lições forem adicionadas
  // if(!course.units.lenght || !course.units[0].lessons.length)
  // {
  //     throw new Error("Curso vazio");
  // }

  const existingUserProgress = await getUserProgress();

  if (existingUserProgress) {
    await db.update(userProgress).set({
      activeCourseId: course.id,
      userName: user.firstName || "User",
      userImageSrc: user.imageUrl || "/mascot.svg",
    });

    revalidatePath("/Cursos");
    revalidatePath("/aprender");
    redirect("/aprender");
  }

  await db.insert(userProgress).values({
    userId,
    activeCourseId: courseId,
    userName: user.firstName || "User",
    userImageSrc: user.imageUrl || "/mascot.svg",
  });

  revalidatePath("/Cursos");
  revalidatePath("/aprender");
  redirect("/aprender");
};

export const reduceHearts = async (challegeId: number) => {
  const {userId} = await auth();

  if(!userId)
  {
    throw new Error("Mão autorizado")
  }
  const currentUserProgress = await getUserProgress();

  const challenge = await db.query.challenges.findFirst({
    where: eq(challenges.id, challegeId)
  })

  if(!challenge) {
    throw new Error("Desafio não encontrado");
  }
  const lessonId = challenge.lessonId;

  const existingChallengeProgress = await db.query.challengeProgress.findFirst({
    where: and(
      eq(challengeProgress.userId, userId),
      eq(challengeProgress.challengeId, challegeId),
    ),
  });

  const isPractice = !!existingChallengeProgress;

  if(isPractice)
  {
  return{error: "practice"};
  }

  if(!currentUserProgress)
  {
    throw new Error("progresso do usuario nao encontrado")
  }

  if(currentUserProgress.hearts === 0)
  {
    return {error: "hearts"};
  }

  await db.update(userProgress).set({
  hearts: Math.max(currentUserProgress.hearts - 1, 0),
  }).where (eq(userProgress.userId, userId));

  revalidatePath("/loja");
  revalidatePath("/aprender");
  revalidatePath("/quests");
  revalidatePath("/leaderboard");
  revalidatePath(`/aprender/${lessonId}`);
};

export const refillHearts = async () => {
  const currentUserProgress = await  getUserProgress();

  if(!currentUserProgress)
  {
      throw new Error("Progreso del usuario no encontrado")
  }

  if(currentUserProgress.hearts === 5)
    {
        throw new Error("Su vida ya esta completa")
    }

    if(currentUserProgress.points < POINTS_TO_REFIL)
    {
      throw new Error("No hay suficientes puntos")
    }

    await db.update(userProgress).set({
      hearts: 5,
      points: currentUserProgress.points - POINTS_TO_REFIL,
    }).where(eq(userProgress.userId, currentUserProgress.userId))

    revalidatePath("/loja");
    revalidatePath("/aprender");
    revalidatePath("/quests");
    revalidatePath("/leaderboard");
}
