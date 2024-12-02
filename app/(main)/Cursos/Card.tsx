import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";

type Props = {
  title: string;
  id: number;
  imageSrc: string;
  onClick: (id: number) => void;
  disabled?: boolean;
  active?: boolean;
};

export const Card = ({
  title,
  id,
  imageSrc,
  disabled,
  onClick,
  active,
}: Props) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={cn(
        "h-full border-2 rounded-xl border-b-4 hover:bg-black/5 cursor-pointer active:border-b-2 flex flex-col items-center justify-between p-3 pb-6 min-h-[287px] min-w-[250px]",
        disabled && "pointer-events-none opacity-50"
      )}
    >
      <div className="min-[24px] w-full flex items-center justify-end">
        {active && (
          <div className="bg-green-600 rounded-md flex items-center justify-center p-1.5">
            <Check className="text-white stroke-[3] h-4 w-4" />
          </div>
        )}
      </div>
     <Image 
     src={imageSrc}
     alt={title}
     height={130}
     width={170.33}
     className="rounded-3xl drop-shadow-md border object-cover" />
     <p className="text-neutral-700 text-center font-bold mt-0 text-[25px]">
        {title}
     </p>
    </div>
  );
};
