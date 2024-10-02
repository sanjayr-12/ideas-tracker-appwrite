import { Client, Databases, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66fbebf4000ab2c4b37a");

export const account = new Account(client);

export const databases = new Databases(client);
