import { account, databases } from "./appwrite";
import { ID, Query } from "appwrite";

export const IDEAS_DATABASE_ID = "66d6e0850024793197b3"; // Replace with your database ID
export const IDEAS_COLLECTION_ID = "66e71aa00018d7943a3d"; // Replace with your collection ID


export const userExtraDetails = async (id) => {
    const response = await databases.listDocuments(
        IDEAS_DATABASE_ID,
        IDEAS_COLLECTION_ID,
        [
            Query.equal('userId', id)
        ]
    ).catch((err) => {
        console.log(err)
    });
    if (!response?.documents?.length) {
        await databases.createDocument(
            IDEAS_DATABASE_ID,
            IDEAS_COLLECTION_ID,
            ID.unique(),
            {
                userId: id
            }
        ).catch((err) => {
            console.log(err)
        });
    }
}

export const registerUserSMS = async (phone) => {
    const token = await account.createPhoneToken(
        ID.unique(),
        `+91${phone}`
    );
    return token?.userId;
}


export const registerOtpSmsValidate = async (userId, otp) => {
    const session = await account.createSession(
        userId,
        `${otp}`
    ).catch((err) => {
        if (err) return false;
    })
    return session;
}

export const logout = async () => {
    await account.deleteSession("current").catch(err => {
        console.log(err);
        return;
    });
}

export const getUser = async (docID) => {
    const response = await databases.listDocuments(
        IDEAS_DATABASE_ID,
        IDEAS_COLLECTION_ID,
        [
            Query.equal('userId', docID)
        ]
    ).catch((err) => {
        console.log(err)
    });
    return response;
}