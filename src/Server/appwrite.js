import { Client, Databases, Account } from "appwrite";

export const client = new Client();
client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("66d2af39003a3079b45b"); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
