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
    console.log("resetado o databse");
  } catch (error) {
    console.error(error);
    throw new Error("O reset falhou");
  }
};

// Executa a função principal
main();
