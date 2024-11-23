ALTER TABLE "user_progress" DROP CONSTRAINT "user_progress_active_course-id_Courses_id_fk";
--> statement-breakpoint
ALTER TABLE "user_progress" ALTER COLUMN "hearts" SET DEFAULT 5;--> statement-breakpoint
ALTER TABLE "user_progress" ADD COLUMN "active_course_id" integer;--> statement-breakpoint
ALTER TABLE "user_progress" ADD COLUMN "points" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_progress" ADD CONSTRAINT "user_progress_active_course_id_Courses_id_fk" FOREIGN KEY ("active_course_id") REFERENCES "public"."Courses"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "user_progress" DROP COLUMN IF EXISTS "active_course-id";