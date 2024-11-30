import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  value: number;
  variant: "points" | "hearts";
};

export const ResultCard = ({ value, variant }: Props) => {
    const imagesSrc = variant === "points" ? "/points.svg" : "/heart.svg";

    return (
        <div className="w-40 h-48"> 
          <div className={cn(
              "rounded-2xl border-4 w-full pb-1",
              variant === "points" && "bg-orange-400 border-orange-400",
              variant === "hearts" && "bg-rose-500 border-rose-500"
          )}> 
            <div className={cn(
              "p-2 text-white rounded-t-xl font-bold text-center uppercase text-xs",
              variant === "hearts" && "bg-rose-500",
              variant === "points" && "bg-orange-400"
            )}>
              {variant === "hearts" ? "corazones:" : "puntaje:"}
            </div>
            <div className={cn(
              "rounded-2xl bg-white items-center flex justify-center p-6 font-bold text-lg h-[50%]",
              variant === "hearts" && "text-rose-500",
              variant === "points" && "text-orange-400"
            )}>
                <Image alt="icon"
                src={imagesSrc}
                height={30}
                width={30}
                className="mr-1.5"
                />
              {value}
            </div>
          </div>
        </div>
      );
    };
