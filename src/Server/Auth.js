import { ID, OAuthProvider } from "appwrite";
import { account } from "./appwrite";

export const registerUserSMS = async (phone) => {
    const token = await account.createPhoneToken(
        ID.unique(),
        `+91${phone}`
    );
    return token?.userId;
}

export const appGoogleAuth = () => {
    account.createOAuth2Session(
        OAuthProvider.Google,
        'http://localhost:5173',
        'http://localhost:5173/fail'
    )
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