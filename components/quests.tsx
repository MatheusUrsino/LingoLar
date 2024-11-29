"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { quests } from "@/constant";
import { userProgress } from "@/db/schema";
import { Progress } from "./ui/progress";

type Props = {
points: number;
}

export const Quests = ({ points }: Props) => {
  return (
    <div className="border-2 rounded-xl p-4 space-y-4">
      <div className="flex items-center justify-between w-full space-y-2">
        <div className="flex items-center justify-between space-y-2">
        <Image src="/quests.svg" alt="misiones cartao" height={40} width={40} className="pr-1 pt-1"></Image>
        <h3 className="font-bold text-lg">Misiones</h3>
        </div>
        <Link href="/quests">
          <Button size="sm" variant="secondary">Ver todo</Button>
        </Link>
      </div>
      <ul className="w-full space-y-4">
        {quests.map((quest) => {
              const progress = (points / quest.value) * 100;

              return (
                <div
                  className="flex items-center w-full p-6 gap-x-3 border-t-2"
                  key={quest.title}
                >
                  <Image
                    src="/points.svg"
                    alt="Pontos"
                    width={40}
                    height={40}
                  />
                  <div className="flex flex-col gap-y-2 w-full">
                   <p className="text-neutral-700 text-sm font-medium">
                    {quest.title}
                    </p> 
                    <Progress value={progress} className="h-2"/>
                  </div>
                </div>
              );
        })}
      </ul>
    </div>
  );
};
