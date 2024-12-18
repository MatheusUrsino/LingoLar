import { cn } from "@/lib/utils";
import Link from "next/link";
import { SidebarItem } from "../sidebar-item";

import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";

type Props = {
  className?: string;
};

export const SideBar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[250px] lg:fixed left-0 top-0  border-r-2 flex-col",
        className
      )}
    >
      <Link href="/aprender">
        <div className="pt-8 pl-3 pb-7 flex items-center gap-x-3 bg-[#002C3B]">
          <Image src="/logo.svg" height={50} width={50} alt="Mascote" />
          <h1 className="text-2xl font-bold text-orange-500 tracking-wide">
            LingoLar
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1 bg-[#002C3B] ">
        <SidebarItem label="Aprender" href="/aprender" iconSrc="/learn.svg" />

        <SidebarItem
          label="clasificación"
          href="/leaderboard"
          iconSrc="/leaderboard.svg"
        />

        <SidebarItem label="misiones" href="/quests" iconSrc="/quests.svg" />

        <SidebarItem label="tienda" href="/loja" iconSrc="/shop.svg" />
      </div>

      <div className="p-4 bg-[#002C3B]">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
            <UserButton />
        </ClerkLoaded>
      </div>
    </div>
  );
};
