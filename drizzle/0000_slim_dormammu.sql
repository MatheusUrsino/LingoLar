CREATE TABLE IF NOT EXISTS "Courses" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"imageSrc" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "user_progress" (
	"user_id" text PRIMARY KEY NOT NULL,
	"user_name" text DEFAULT 'User' NOT NULL,
	"user_image_src" text DEFAULT '/mascot.svg' NOT NULL,
	"active_course_id" integer,  -- Corrigido o nome da coluna para active_course_id
	"hearts" integer DEFAULT 5 NOT NULL,  -- Ajustado para ter o valor padrão como 5
	"points" integer DEFAULT 0 NOT NULL  -- Ajustado para ter o valor padrão como 0
);

DO $$ BEGIN
  ALTER TABLE "user_progress" ADD CONSTRAINT "user_progress_active_course_id_Courses_id_fk" 
    FOREIGN KEY ("active_course_id") REFERENCES "public"."Courses"("id") 
    ON DELETE CASCADE ON UPDATE NO ACTION;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
