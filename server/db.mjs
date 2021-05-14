import dotenv from "dotenv";
import pgp from "pg-promise";

const db = initDb();

export const getDoulas = async () => await db.any("SELECT * FROM doulas");

export const addDoulas = async (
  first_name,
  last_name,
  email_address,
  password,
) =>
  await db.any(
    "INSERT INTO parents(first_name, last_name,email_address, password ) VALUES($1, $2, $3, $4) RETURNING * ",
    [first_name, last_name, email_address, password],
  );

function initDb() {
  let connection;

  if (process.env.DATABASE_URL === undefined) {
    dotenv.config({ path: "../.env" });
    connection = {
      user: "postgres",
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: 5442,
    };
  } else {
    connection = {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    };
  }

  return pgp()(connection);
}
