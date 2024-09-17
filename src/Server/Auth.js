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
    console.log(import.meta.env.VITE_APP_GOOGLE_REDIRECT);
    account.createOAuth2Session(
        OAuthProvider.Google,
        import.meta.env.VITE_APP_GOOGLE_REDIRECT,
        import.meta.env.VITE_APP_GOOGLE_REDIRECT_FAIL
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