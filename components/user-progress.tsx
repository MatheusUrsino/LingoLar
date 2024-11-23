import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";
import { courses } from "@/db/schema";

type Props = {
  activeCourse: typeof courses.$inferSelect;
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const UserProgress = ({
  activeCourse,
  points,
  hasActiveSubscription,
  hearts,
}: Props) => {
  return (
    <div className="flex items-center justify-between gap-y-2 w-full">
      <Link href="/Cursos">
        <Button variant="Ghost">
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            className="rounded-mb border"
            width={32}
            height={32}
          />
        </Button>
      </Link>
      <Link href="/loja">
        <Button variant="Ghost" className="text-orange-500">
          <Image
            src="/points.svg"
            alt="Pontuação"
            className="mr-2"
            width={28}
            height={28}
          />
            {points}
        </Button>
      </Link>
      <Link href="/loja">
        <Button variant="Ghost" className="text-rose-500">
          <Image
            src="/heart.svg"
            alt="vidas"
            className="mr-2"
            width={22}
            height={22}
          />
            {hasActiveSubscription ? (
              <InfinityIcon className="h-4 w-4 stroke-[3]" />
            ) : (
              hearts
            )}
        </Button>
      </Link>
    </div>
  );
};
