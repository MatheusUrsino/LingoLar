"use client";

import { useExitModal } from "@/store/use-exit-model";
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

export const ExitModal = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = useExitModal();

  useEffect(() => setIsClient(true), []);

  if (!isClient) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-center w-full justify-center mb-5">
            <Image
              src="/bookSad.svg"
              width={80}
              height={80}
              alt="Livro triste"
            />
          </div>
          <DialogTitle className="text-center font-medium text-2xl">
          ¡Por favor no te vayas!
          </DialogTitle>
          <DialogDescription className="text-center text-base text-slate-700">
          ¿Estás seguro de que quieres salir de la actividad?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
          <div className="flex flex-col gap-y-4 w-full">
            <Button
              variant="green"
              className="w-full"
              size="lg"
              onClick={close}
            >
              Continuar
            </Button>
          </div>
          <div className="flex flex-col gap-y-4 w-full">
            <Button
              variant="Danger"
              className="w-full"
              size="lg"
              onClick={() => {
                close();
                router.push("/aprender");
              }}
            >
               Salir
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
