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
    <div className="max-w-[1080px] px-3 mx-auto flex flex-col justify-center my-auto">
      <h1 className="text-2xl font-bold text-neutral-700 text-center pb-5 ">Pagina de Cursos</h1>
      <div className="ml-auto mr-auto">
      <List
        courses={courses} // Passa os dados de cursos para o componente List
        activeCourseId={userProgress?.activeCourseId} // Passa o curso ativo do progresso do usuário
      />
      </div>
    </div>
  );
};

export default CoursesPage;
