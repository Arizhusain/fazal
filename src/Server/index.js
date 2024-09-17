import { databases } from "./appwrite";
import { ID, Query } from "appwrite";

export const userExtraDetails = async (id) => {
    const response = await databases.listDocuments(
        import.meta.env.VITE_APP_DATABASE_ID,
        import.meta.env.VITE_APP_USERS_COLLECTION_ID,
        [
            Query.equal('userId', id)
        ]
    ).catch((err) => {
        console.log(err)
    });
    if (!response?.documents?.length) {
        await databases.createDocument(
            import.meta.env.VITE_APP_DATABASE_ID,
            import.meta.env.VITE_APP_USERS_COLLECTION_ID,
            ID.unique(),
            {
                userId: id
            }
        ).catch((err) => {
            console.log(err)
        });
    }
}

export const getUser = async (docID) => {
    const response = await databases.listDocuments(
        import.meta.env.VITE_APP_DATABASE_ID,
        import.meta.env.VITE_APP_USERS_COLLECTION_ID,
        [
            Query.equal('userId', docID)
        ]
    ).catch((err) => {
        console.log(err)
    });
    return response;
}