// CoursesPage.tsx
import { getCourses, getUserProgress } from "@/db/queries";
import React from "react";
import { List } from "./list";

const CoursesPage = async () => {
  // Carrega dados de cursos e progresso do usuário em paralelo
  const [courses, userProgress] = await Promise.all([
    getCourses(),
    getUserProgress(),
  ]);

  return (
    <div className="h-full max-w-[1080px] px-3 mx-auto">
      <h1 className="text-2xl font-bold text-neutral-700">Courses Page</h1>
      <List
        courses={courses} // Passa os dados de cursos para o componente List
        activeCourseId={userProgress?.activeCourseId} // Passa o curso ativo do progresso do usuário
      />
    </div>
  );
};

export default CoursesPage;
