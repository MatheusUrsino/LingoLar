"use client";
import { createStripeUrl } from "@/app/actions/user-subscription";
import { refillHearts } from "@/app/actions/user.progress";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTransition } from "react";
import { toast } from "sonner";
const POINTS_TO_REFIL = 10;

type Props = {
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const Items = ({ hearts, points, hasActiveSubscription }: Props) => {
  const [pending, startTransition] = useTransition();

  const onRefilHearts = () => {
    if (pending || hearts === 5 || points < POINTS_TO_REFIL) {
      return;
    }

    startTransition(() => {
      refillHearts().catch(() => toast.error("Algo esta mal"));
    });
  };

  const onUpgrade = () => {
    startTransition(() => {
      createStripeUrl()
        .then((response) => {
          if (response.data) {
            window.location.href = response.data;
          }
        })
        .catch(() => toast.error("Algo esta mal"));
    });
  };

  return (
    <ul className="w-full">
      <div className="flex items-center w-full p-4 gap-x-4 border-t-2 ">
        <Image src="heart.svg" width={60} height={60} alt="coração" />
        <div className="flex-1">
          <p className="text-neutral-700 text-base lg:text-xl">
            Recargar vidas
          </p>
        </div>
        <Button
          disabled={pending || hearts === 5 || points < POINTS_TO_REFIL}
          onClick={onRefilHearts}
        >
          {hearts === 5 ? (
            "completo"
          ) : (
            <div className="flex items-center">
              <Image src="points.svg" width={24} height={24} alt="pontos" />
              <p className="pl-4 flex items-center justify-center pt-1">
                {POINTS_TO_REFIL}
              </p>
            </div>
          )}
        </Button>
      </div>
      <div className="flex items-center w-full p-4 pt-8 gap-x-4 border-t-2">
        <Image
          src="heartUnlimited.svg"
          width={60}
          height={60}
          alt="Vidas ilimitadas"
        />
        <div className="flex-1">
          <p className="text-neutral-700 text-base lg:text-xl">
            Vidas ilimitadas
          </p>
        </div>
        <Button onClick={onUpgrade} disabled={pending}>
          {hasActiveSubscription ? "detalles" : "adquirir"}
        </Button>
      </div>
    </ul>
  );
};
