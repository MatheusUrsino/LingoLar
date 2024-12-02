import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full  border-slate-200 p-2 bg-[#002C3B]">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="Ghost" className="w-full text-white hover:text-blue-950">
          <Image
            src="/brasil.svg"
            alt="Bandeira do Brasil"
            height={32}
            width={40}
            className="mr-4 rounded-full"
          />
          Português
        </Button>
        <Button size="lg" variant="Ghost" className="w-full text-white hover:text-blue-950">
          <Image
            src="/es.svg"
            alt="Bandeira do Brasil"
            height={32}
            width={40}
            className="mr-4 rounded-full"
          />
          Espanõl
        </Button>
        <Button size="lg" variant="Ghost" className="w-full text-white hover:text-blue-950">
          <Image
            src="/en.svg"
            alt="Bandeira do Brasil"
            height={32}
            width={40}
            className="mr-4 rounded-full"
          />
          English
        </Button>
        
      </div>
    </footer>
  );
};
