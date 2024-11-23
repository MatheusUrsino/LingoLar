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
import { useEffect, useState } from "react";
import { usePracticeModal } from "@/store/use-practice-modal";

export const PracticeModal = () => {
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = usePracticeModal();

  useEffect(() => setIsClient(true), []);

  const onClick = () => {
    close();
  };

  if (!isClient) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-center w-full justify-center mb-5">
            <Image
              src="/heart.svg"
              width={100}
              height={100}
              alt="coração triste"
            />
          </div>
          <DialogTitle className="text-center font-medium text-2xl">
            ¡lección práctica!
          </DialogTitle>
          <DialogDescription className="text-center text-base text-slate-700">
            Utiliza actividades prácticas para recuperar vidas y ganar puntos,
            no es posible perder vidas.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
          <div className="flex flex-col gap-y-4 w-full">
            <Button
              variant="primary"
              className="w-full"
              size="lg"
              onClick={close}
            >
              lo entendí
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
