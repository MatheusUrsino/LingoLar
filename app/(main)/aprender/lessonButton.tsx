"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { check } from "drizzle-orm/mysql-core";
import {
  Check,
  Croissant,
  Crown,
  LockIcon,
  LucideBan,
  LucideLock,
  LucideLockOpen,
  LucideStar,
  Shield,
  Star,
} from "lucide-react";
import Link from "next/link";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

type Props = {
  id: number;
  index: number;
  totalCount: number;
  locked?: boolean;
  current?: boolean;
  percentage: number;
};

export const LessonButton = ({
  id,
  index,
  totalCount,
  locked = false,
  current = false,
  percentage,
}: Props) => {
  const cycleLength = 8;
  const cycleIndex = index % cycleLength;

  // Definição da indentação horizontal com base na posição do item no ciclo
  const indentationLevel =
    cycleIndex <= 2
      ? cycleIndex
      : cycleIndex <= 5
      ? 4 - cycleIndex
      : cycleIndex - 8;

  const rightPosition = indentationLevel * 40; //gera a curva dos botões

  const isFirst = index === 0;
  const isLast = index === totalCount;
  const isCompleted = !current && !locked;

  // Ícone dinâmico com base no estado da lição
  const IconComponent = isLast
  ? Crown // Última lição sempre usa Crown
  : locked
  ? LucideLock
  : isFirst && !isCompleted
  ? LucideStar
  : isCompleted
  ? Check
  : LucideStar; // Alternativo padrão

  // Definição do link da lição com base no estado de conclusão
  const href = isCompleted ? `/licao/${id}` : "/licao";
  return (
    <Link
      href={href}
      aria-disabled={locked}
      style={{ pointerEvents: locked ? "none" : "auto" }}
    >
      <div
        className="relative"
        style={{
          right: `${rightPosition}px`,
          marginTop: isFirst && !isCompleted ? 60 : 34,
        }}
      >
        {current ? (
          <div className="h-[102px] w-[102px] relative">
            <CircularProgressbarWithChildren
              value={Number.isNaN(percentage) ? 0 : percentage}
              styles={{
                path: { stroke: "#FFA07A" },
                trail: { stroke: "#e5e7eb" },
              }}
            >
              <Button
                size="rounded"
                variant={locked ? "locked" : "secondary"}
                className="h-[70px] w-[70px] border-b-8"
              >
                <IconComponent
                  className={cn(
                    "scale-150",
                    locked
                      ? "text-neutral-400 stroke-neutral-400 fill-none"
                      : IconComponent === LucideStar
                      ? "text-primary-foreground stroke-primary-foreground fill-current" // Apenas LucideStar preenchido
                      : "text-primary-foreground stroke-primary-foreground fill-none", // Outros ícones sem preenchimento
                    (isFirst || isLast) &&
                      IconComponent === LucideStar &&
                      "fill-current" // Preenche apenas LucideStar
                  )}
                />
              </Button>
            </CircularProgressbarWithChildren>
          </div>
        ) : (
          <Button
            size="rounded"
            variant={locked ? "locked" : "secondary"}
            className="h-[70px] w-[70px] border-b-8"
          >
            <div className="h-[80px] w-[80px] flex items-center justify-center">
              <IconComponent
                className={cn(
                  "scale-150",
                  locked
                    ? "text-neutral-400 stroke-neutral-400 fill-none"
                    : IconComponent === LucideStar
                    ? "text-primary-foreground stroke-primary-foreground fill-current" // Apenas LucideStar preenchido
                    : "text-primary-foreground stroke-primary-foreground fill-none", // Outros ícones sem preenchimento
                  (isFirst || isLast) &&
                    IconComponent === LucideStar &&
                    "fill-current", // Preenche apenas LucideStar
                    "stroke-[3]"
                )}
              />
            </div>
          </Button>
        )}
      </div>
    </Link>
  );
};
