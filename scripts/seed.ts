// Importa as variáveis de ambiente e dependências necessárias
import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "../db/schema";

// Configura a conexão SQL com o Neon usando a URL do banco de dados no arquivo .env
const sql = neon(process.env.DATABASE_URL!);

// Inicializa o ORM Drizzle para interagir com o banco de dados
// @ts-ignore Ignora possíveis erros de tipagem
const db = drizzle(sql, { schema });

// Função principal que executa operações no banco de dados
const main = async () => {
  try {
    // Remove dados das tabelas para evitar duplicação durante reinicialização
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);
    await db.delete(schema.userSubscription);


    // Insere dados iniciais na tabela de cursos
    await db.insert(schema.courses).values([
      { id: 1, title: "Português", imageSrc: "/brasil.svg" },
      { id: 2, title: "Inglês", imageSrc: "/en.svg" },
      { id: 3, title: "Espanhol", imageSrc: "/es.svg" },
    ]);

    // Insere uma unidade no curso de Português - iniciante
    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1, // Referência ao curso "Portugues - iniciante"
        title: "Unidade 1",
        description: "Aprenda o basico do portugues",
        order: 1,
      },
    ]);

    // Insere lições na unidade 1
    await db.insert(schema.lessons).values([
      { id: 1, unitId: 1, order: 1, title: "Substantivos" },
      { id: 2, unitId: 1, order: 2, title: "Verbos" },
      { id: 3, unitId: 1, order: 3, title: "Adjetivos" },
      { id: 4, unitId: 1, order: 4, title: "Artigos" },
      { id: 5, unitId: 1, order: 5, title: "Conjugação de Verbos Básicos" },
      { id: 6, unitId: 1, order: 6, title: "Verbos" },
    ]);

    // Insere um desafio relacionado à primeira lição
    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1, // Relacionado à lição "Substantivos"
        type: "SELECT",
        order: 1,
        question: "Elige cual es 'el hombre'",
      },
      {
        id: 2,
        lessonId: 1, // Relacionado à lição "Substantivos"
        type: "ASSIST",
        order: 2,
        question: "'el hombre'",
      },
      {
        id: 3,
        lessonId: 1, // Relacionado à lição "Substantivos"
        type: "SELECT",
        order: 2,
        question: "'Elige cuál de estos es 'el robot''",
      },
    ]);

    // Insere opções de resposta para o desafio
    await db.insert(schema.challengeOptions).values([
      {
        id: 1,
        challengeId: 1,
        imageSrc: "/homem.svg",
        correct: true,
        text: "O homem",
        audioSrc: "/br_homem.mp3",
      },
      {
        id: 2,
        challengeId: 1,
        imageSrc: "/mulher.svg",
        correct: false,
        text: "A mulher",
        audioSrc: "/br_mulher.mp3",
      },
      {
        id: 3,
        challengeId: 1,
        imageSrc: "/robo.svg",
        correct: false,
        text: "O robô",
        audioSrc: "/br_robo.mp3",
      },
      
    ]);

    //questao 2 curso 1
    await db.insert(schema.challengeOptions).values([
      {
        id: 4,
        challengeId: 2,
        correct: false,
        text: "O robô",
        audioSrc: "/br_robo.mp3",
      },
      {
        id: 5,
        challengeId: 2,
        correct: false,
        text: "A mulher",
        audioSrc: "/br_mulher.mp3",
      },
      {
        id: 6,
        challengeId: 2,
        correct: true,
        text: "O homem",
        audioSrc: "/br_homem.mp3",

      },
      
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        id: 7,
        challengeId: 3, // escolha qual é o robo
        imageSrc: "/homem.svg",
        correct: false,
        text: "O homem",
        audioSrc: "/br_homem.mp3",
      },
      {
        id: 8,
        challengeId: 3,
        imageSrc: "/mulher.svg",
        correct: false,
        text: "A mulher",
        audioSrc: "/br_mulher.mp3",
      },
      {
        id: 9,
        challengeId: 3,
        imageSrc: "/robo.svg",
        correct: true,
        text: "O robô",
        audioSrc: "/br_robo.mp3",
      },
      
    ]);

        // Insere um desafio relacionado à primeira lição
        await db.insert(schema.challenges).values([
          {
            id: 4,
            lessonId: 2, // Relacionado à lição "Adjetivos"
            type: "SELECT",
            order: 1,
            question: "Elige cual es 'el hombre'",
          },
          {
            id: 5,
            lessonId: 2, // Relacionado à lição "Adjetivos"
            type: "ASSIST",
            order: 2,
            question: "'el hombre'",
          },
          {
            id: 6,
            lessonId: 2, // Relacionado à lição "Adjetivos"
            type: "SELECT",
            order: 2,
            question: "'Elige cuál de estos es 'el robot''",
          },
        ]);

    console.log("Envio finalizado com sucesso");
  } catch (error) {
    console.error(error);
    throw new Error("O envio ao banco de dados falhou");
  }
};

// Executa a função principal
main();
