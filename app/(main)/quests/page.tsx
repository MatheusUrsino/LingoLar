import { FeedWrapper } from "@/components/feed-wrapper";
import { Promo } from "@/components/promo";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Progress } from "@/components/ui/progress";
import { UserProgress } from "@/components/user-progress";
import { quests } from "@/constant";
import { getUserProgress, getUserSubscription } from "@/db/queries";
import Image from "next/image";
import { redirect } from "next/navigation";

const QuestsPage = async () => {
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscription();

  const [userProgress, userSubscription] = await Promise.all([
    userProgressData,
    userSubscriptionData,
  ]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/cursos");
  }

  const isPro = !!userSubscription?.isActive;

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={isPro}
        />
          {!isPro && (
        <Promo />
        )}
        
      </StickyWrapper>
      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          <Image
            src="/quests.svg"
            alt="tabela de classificação"
            height={90}
            width={90}
          />
          <h1 className="text-center font-medium text-neutral-800 text-2xl my-6">
            misiones
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-6 ">
            Completa misiones para ganar puntos.
          </p>
          <ul className="w-full">
            {quests.map((quest) => {
              const progress = (userProgress.points / quest.value) * 100;

              return (
                <div
                  className="flex items-center w-full p-6 gap-x-4 border-t-2"
                  key={quest.title}
                >
                  <Image
                    src="/points.svg"
                    alt="Pontos"
                    width={50}
                    height={50}
                  />
                  <div className="flex flex-col gap-y-2 w-full">
                   <p className="text-neutral-700 text-xl font-medium">
                    {quest.title}
                    </p> 
                    <Progress value={progress} className="h-3"/>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </FeedWrapper>
    </div>
  );
};

export default QuestsPage;
