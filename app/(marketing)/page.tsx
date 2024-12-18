import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignUpButton,
  SignInButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // Corrigido: importando Link do Next.js

export default function Home() {
  return (
      <div className=" mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2 bg-[url(/bgMarketing.svg)] bg-cover bg-center bg-no-repeat h-screen ">
        <div className="relative w-[340px] h-[320px] lg:w-[524px] lg:h-[424px] mb-8 lg:mb-0">
          <Image src="/heroina.svg" fill alt="Heroina" />
        </div>
        <div className="flex flex-col items-center gap-y-8">
          <h1 className="text-xl lg:text-3xl font-medium text-white max-w-[480px] text-center">
            Aprende <span className="text-yellow-300">idiomas</span> y pratiícalos con <span className="text-yellow-300">LingoLar</span>  
          </h1>
          <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
            <ClerkLoading>
              <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
            </ClerkLoading>
            <ClerkLoaded>
              <SignedOut>
                <SignUpButton mode="modal">
                  <Button size="lg" variant="secondary" className="w-full">
                    Vamos a hacerlo
                  </Button>
                </SignUpButton>
                <SignInButton mode="modal">
                  <Button
                    size="lg"
                    variant="primaryOutline"
                    className="w-full "
                  >
                    ya tengo una cuenta
                  </Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <Link href="/Cursos">
                  <Button size="lg" variant="secondary" className="w-full">
                    continúa tu aprendizaje
                  </Button>
                </Link>
              </SignedIn>
            </ClerkLoaded>
          </div>
        </div>
      </div>
  );
}
