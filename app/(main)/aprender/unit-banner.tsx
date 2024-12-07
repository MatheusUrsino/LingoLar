import { Button } from "@/components/ui/button";
import { units } from "@/db/schema";
import { cn } from "@/lib/utils";
import { NotebookText } from "lucide-react";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  id: number;
};

export const UnitBanner = ({ title, description, id }: Props) => {
  return (
    <div className={cn(
      "w-full rounded-xl p-5 text-white flex items-center justify-between",
      
      
      id === 1
      ? "bg-blue-600"
      : id === 2
        ? "bg-green-400"
        : id === 3
        ? "bg-yellow-400"
        : id === 4
        ? "bg-orange-400"
        : id === 5
        ?"bg-red-600" 
        : "bg-green-400",
    )}>
      <div className="space-y-2.5 ">
        <h3 className="text-2xl  font-bold">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>
      <Link href="/licao">
        <Button
          size="lg"
          variant="secondary"
          className="hidden lg:flex border-2 border-b-4"
        >
          <NotebookText className="mr-2" />
          {/* troca de idiomas */}
          Continuar
        </Button>
      </Link>
    </div>
  );
};
