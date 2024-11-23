import { challenges } from "@/db/schema";
import { cn } from "@/lib/utils";
import { useAudio, useKey } from "react-use";
import Image from "next/image";
import { useCallback } from "react";

type Props = {
  id: number;
  imageSrc: string | null;
  audioSrc: string | null;
  text: string;
  shortcut: string;
  selected?: boolean;
  onClick: () => void;
  disabled?: boolean;
  status?: "correto" | "errado" | "nulo";
  type: (typeof challenges.$inferSelect)["type"];
};

export const Card = ({
  id,
  imageSrc,
  audioSrc,
  text,
  shortcut,
  selected,
  onClick,
  disabled,
  status,
  type,
}: Props) => {
  const [audio, _, controls] = useAudio({ src: audioSrc || "" });

  const handleClick = useCallback(() => {
    if (disabled) return;
    controls.play();
    onClick();
  }, [disabled, onClick, controls]);

  useKey(shortcut, handleClick, {}, [handleClick]);

  return (
    <div
      onClick={handleClick}
      className={cn(
        "h-full  border-2 rounded-xl border-b-4 hover:bg-black/5 p-6 lg:p-6 cursor-pointer active:border-b-2  ",
        selected && "border-sky-300 bg-sky-100 hover:bg-sky-100",
        selected && status === "correto" && "border-green-400 bg-green-100",
        selected && status === "errado" && "border-rose-700 bg-rose-200",
        disabled && "pointer-events-none hover:bg-white",
        type === "ASSIST" && "lg:p-3 w-full"
      )}
    >
      {audio}
      {imageSrc && (
        <div className="relative aspect-square mb-10 max-h-[80px] lg:max-h-[250px] w-full ">
          <Image src={imageSrc} fill alt={text} />
        </div>
      )}
      <div
        className={cn("flex gap-2", type === "ASSIST" && "flex-row-reverse")}
      >
        {type === "ASSIST" && <div />}
        <div
          className={cn(
            "lg:w-[30px] lg:h-[30px] w-[25px] h-[25px] border-2 flex items-center justify-center rounded-lg text-neutral-400 lg:text-[15px] text-xs font-semibold ml-auto ",
            selected && "border-sky-300 text-sky-500",
            selected &&
              status === "correto" &&
              "border-green-400 text-green-500",
            selected && status === "errado" && "border-rose-700 text-rose-500"
          )}
        >
          {shortcut}
        </div>

        <p
          className={cn(
            "text-neutral-600 text-sm lg:text-base mr-auto flex items-center",
            selected && "text-sky-500",
            selected && status === "correto" && "text-green-400",
            selected && status === "errado" && "text-rose-700"
          )}
        >
          {text}
        </p>
      </div>
    </div>
  );
};
