// Importa definições de banco de dados e componentes necessários
import { lessons, units } from "@/db/schema";
import { UnitBanner } from "./unit-banner";
import { LessonButton } from "./lessonButton";

// Define o tipo de dados esperado como propriedades do componente Unit
type Props = {
  id: number; // ID da unidade
  order: number; // Ordem da unidade
  description: string; // Descrição da unidade
  title: string; // Título da unidade
  lessons: (typeof lessons.$inferInsert & {
    completed: boolean; // Estado de conclusão da lição
  })[];
  activeLesson?: typeof lessons.$inferInsert & {
    unit: typeof units.$inferInsert; // Lição ativa e detalhes da unidade
  };
  activeLessonPercentage: number; // Porcentagem de conclusão da lição ativa
};

// Componente Unit renderiza informações da unidade e lista de lições
export const Unit = ({
  id,
  order,
  description,
  title,
  lessons,
  activeLesson,
  activeLessonPercentage,
}: Props) => {
  return (
    <>
      {/* Renderiza o banner da unidade com título e descrição */}
      <UnitBanner title={title} description={description} />

      {/* Container flexível para exibir as lições em formato de coluna */}
      <div className="flex items-center flex-col relative ">
        {/* Mapeia cada lição para renderizar um botão LessonButton */}
        {lessons.map((lesson, index) => {
          // Verifica se a lição é a lição ativa
          const isCurrent = lesson.id === activeLesson?.id;
          // Define se a lição deve estar bloqueada (se ainda não foi completada e não é a lição ativa)
          const isLocked = !lesson.completed && !isCurrent;

          return (
            <LessonButton
              id={lesson.id ?? index} // ID único da lição
              key={lesson.id} // Chave única para mapeamento de elementos
              index={index} // Índice da lição
              totalCount={lessons.length - 1} // Total de lições menos 1 (para contagem zero-indexada)
              current={isCurrent} // Estado de lição atual
              locked={isLocked} // Estado de bloqueio da lição
              percentage={activeLessonPercentage} // Porcentagem de conclusão da lição ativa
            />
          );
        })}
      </div>
    </>
  );
};
