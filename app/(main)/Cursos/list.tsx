"use client"
import { courses, userProgress } from "@/db/schema";
import { Card } from "./Card";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { upsertUserProgress } from "@/app/actions/user.progress";
import { toast } from "sonner";

type Props = {
    courses: typeof courses.$inferSelect[];
    activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;
};

export const List = ({ courses, activeCourseId }: Props) => {
const router = useRouter();
const [pending, startTransition] = useTransition();

const onClick = (id:number) => {
    if (pending) return;

    if(id === activeCourseId)
    {
        return router.push("/aprender")
    }

    startTransition(() => {
        upsertUserProgress(id)
        .catch(() => toast.error("Algo está errado") )

    });

}

    return(
        <div className=" pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-10 ">
              {courses.map((course) => (
        <Card 
        key={course.id}
        id={course.id}
        title={course.title}
        imageSrc={course.imageSrc}
        onClick={onClick}
        disabled={pending}
        active={course.id === activeCourseId}

        />
      ))}
        </div>
    );
}