import { account, databases } from "./appwrite";

export const updateUsersAuthDetails = async (id, email, phone) => {
    if (email) {
        const emailResponse = await account.updateEmail(email, "Ariz*07860");
        return emailResponse;
    }
    if (phone) {
        const phoneValue = '+91' + phone;
        const phoneResponse = await account.updatePhone(phoneValue, "Ariz*07860");
        return phoneResponse;
    }
}
export const UpdateExtraUserDetails = async (id, payload) => {
    const response = await databases.updateDocument(
        import.meta.env.VITE_APP_DATABASE_ID,
        import.meta.env.VITE_APP_USERS_COLLECTION_ID,
        id,
        {
            ...payload
        }
    )
    return response;
}
