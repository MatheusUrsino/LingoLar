"use client"

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export const Promo = () => 
{
    return (
        <div className="border-2 rounded-xl p-4 space-y-4">
            <div className="space-y-2">
                <div className="flex items-center gap-x-2">
                    <Image src="/heartUnlimited.svg" alt="Pro" width={26} height={26} />
                    <h3 className="font-bold text-lg"> Actualizar a pro </h3>
                </div>
                <p className="text-muted-foreground">Obtén vidas ilimitadas y más</p>
            </div>
            <Button variant="Super" className="w-full" size="lg" asChild>
            <Link href="/loja">
            Actualizar ahora
            </Link>
            </Button>

        </div>
    );
}