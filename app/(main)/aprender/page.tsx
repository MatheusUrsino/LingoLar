// Importa componentes e funções de consulta necessários para a página
import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";
import { getCourseProgress, getLessonPercentage, getUnits, getUserProgress, getUserSubscription } from "@/db/queries";
import { redirect } from "next/navigation";
import { Unit } from "./Unit";
import { lessons, units as unitsSchema, userSubscription } from "@/db/schema";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";

// Define a página de aprendizado como uma função assíncrona
const LearnPage = async () => {

  // Obtém dados assíncronos do progresso do usuário, curso, percentual de lições e unidades
  const userProgressData = getUserProgress();
  const courseProgressData = getCourseProgress();
  const lessonPercentageData = getLessonPercentage();
  const unitsData = getUnits();
  const userSubscriptionData = getUserSubscription();

  // Usa Promise.all para resolver todas as promessas simultaneamente e melhorar o desempenho
  const [
    userProgress,
    units,
    courseProgress,
    lessonPercentage,
    userSubscription
  ] = await Promise.all([userProgressData, unitsData, courseProgressData, lessonPercentageData, userSubscriptionData,]);

  // Redireciona para a página de cursos se o usuário não tiver um curso ativo
  if (!userProgress || !userProgress.activeCourse) {
    return redirect("/Cursos");
  }

  // Redireciona para a página de cursos se não houver progresso do curso
  if (!courseProgress) {
    return redirect("/Cursos");
  }
  
  const isPro = !!userSubscription?.isActive;

  // Renderiza a página com os componentes necessários
  return (
    <div className="flex flex-row-reverse gap-[88px] px-6 ">
      {/* Componente StickyWrapper fixa o progresso do usuário na tela */}
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse} // Curso ativo do usuário
          hearts={userProgress.hearts}             // Corações (vida) do usuário
          points={userProgress.points}             // Pontos acumulados
          hasActiveSubscription={isPro}            // Estado da assinatura (se tiver)
        />
        {!isPro && (
        <Promo />
        )}
        <Quests points={userProgress.points}/>
      </StickyWrapper>

      {/* FeedWrapper para exibir o conteúdo principal */}
      <FeedWrapper>
        {/* Cabeçalho com o título do curso ativo */}
        <Header title={userProgress.activeCourse.title} />

        {/* Mapeia cada unidade para renderizar um componente Unit com seus detalhes */}
        {units.map((unit) => (
          <div key={unit.id} className="mb-10">
            <Unit
              id={unit.id}                       // ID da unidade
              order={unit.order}                 // Ordem da unidade no curso
              description={unit.description}     // Descrição da unidade
              title={unit.title}                 // Título da unidade
              lessons={unit.lessons}             // Lições da unidade
              activeLesson={courseProgress.activeLesson as typeof lessons.$inferInsert & {
                unit: typeof unitsSchema.$inferInsert;
              } | undefined}                     // Lição ativa do curso
              activeLessonPercentage={lessonPercentage} // Porcentagem de conclusão da lição
            />
          </div>
        ))}
      </FeedWrapper>
    </div>
  );
};

// Exporta a página para uso em outros locais
export default LearnPage;
