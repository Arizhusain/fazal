import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '.'
import { logout, registerOtpSmsValidate, registerUserSMS, userExtraDetails } from '../Server';
import { account } from '../Server/appwrite';
import { OAuthProvider } from 'appwrite';

export const useApp = () => useContext(AppContext);

const ContextWrapper = ({ children }) => {
    const [user, setUser] = useState(null);

    const init = async () => {
        try {
            const loggedIn = await account.get();
            await userExtraDetails(loggedIn?.$id);
            setUser(loggedIn);
        } catch (err) {
            setUser(null);
        }
    }

    const appRegisterOtpSmsValidate = async (userId, otp) => {
        const session = await registerOtpSmsValidate(userId, otp);
        if (session) {
            init();
            return session;
        }
    }

    const appGoogleAuth = () => {
        account.createOAuth2Session(
            OAuthProvider.Google,
            'http://localhost:3000/',
            'http://localhost:3000/fail'
        )
    }

    const appUpdateName = async (fullName) => {
        await account.updateName(fullName);
    }

    const appLogout = async () => {
        await logout();
        init();
    }

    useEffect(() => {
        init();
    }, []);

    return (
        <AppContext.Provider value={{ current: user, registerUserSMS, appRegisterOtpSmsValidate, appGoogleAuth, appLogout, appUpdateName }} >
            {children}
        </AppContext.Provider>
    )
}

export default ContextWrapper