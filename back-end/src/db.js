import { MongoClient } from "mongodb";

let client;

export const initializeDbConnection = async () => {
  client = await new MongoClient("mongodb://127.0.0.1:27017").connect();
};

export const getDbConnection = (dbName) => {
  const db = client.db(dbName);
  return db;
};
