import { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { AppContext } from '.'
import { account } from '../Server/appwrite';
import { userExtraDetails } from '../Server';
import { appGoogleAuth, logout, registerOtpSmsValidate, registerUserSMS } from '../Server/Auth';

const ContextWrapper = ({ children }) => {
    const [user, setUser] = useState(null);

    const init = async () => {
        try {
            const loggedIn = await account.get();
            await userExtraDetails(loggedIn?.$id);
            setUser(loggedIn);
        } catch (err) {
            console.log(err);
            setUser(null);
        }
    }

    const appRegisterOtpSmsValidate = async (userId, otp) => {
        const session = await registerOtpSmsValidate(userId, otp);
        if (session) {
            return session;
        }
    }

    const appUpdateName = async (fullName) => {
        await account.updateName(fullName);
        init();
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

ContextWrapper.propTypes = {
    children: PropTypes.any
};

export default ContextWrapper