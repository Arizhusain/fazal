import { Client, Databases, Account } from "appwrite";

export const client = new Client();
client
    .setEndpoint(import.meta.env.VITE_APP_PROJECT_END_POINT)
    .setProject(import.meta.env.VITE_APP_PROJECT_ID); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
