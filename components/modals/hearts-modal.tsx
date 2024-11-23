"use client";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useHeartsModal } from "@/store/use-hearts-modal";

export const HeartsModal = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = useHeartsModal();

  useEffect(() => setIsClient(true), []);

  const onClick = () => {
    close();
    router.push("/loja");
  }

  if (!isClient) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-center w-full justify-center mb-5">
            <Image
              src="/heartSad.svg"
              width={80}
              height={80}
              alt="coração triste"
            />
          </div>
          <DialogTitle className="text-center font-medium text-2xl">
            ¡Sus vidas han terminado!
          </DialogTitle>
          <DialogDescription className="text-center text-base text-slate-700">
          Suscríbete y obtén vidas ilimitadas, o compra vidas en la tienda.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
          <div className="flex flex-col gap-y-4 w-full">
            <Button
              variant="green"
              className="w-full"
              size="lg"
              onClick={onClick}
            >
             Adquiere vidas ilimitadas
            </Button>
          </div>
          <div className="flex flex-col gap-y-4 w-full">
            <Button
              variant="primaryOutline"
              className="w-full"
              size="lg"
              onClick={close}
            >
             No, gracias
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
