import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";

export const Header = () => {
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="lg:max-w-screen mx-auto flex items-center justify-between h-full">

        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <img src="/logo.svg" height={50} width={50} alt="Mascote" />
          <h1 className="text-2xl font-bold text-orange-500 tracking-wide">
            LingoLar
          </h1>
        </div>

        <div>
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>

          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <Button size="lg" variant="Ghost">
                  Entrar
                </Button>
              </SignInButton>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
};
