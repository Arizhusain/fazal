import { useState } from 'react';
import PropTypes from 'prop-types';
import './auth.css';
import { Link } from 'react-router-dom';
import { useApp } from '../../Context';

const SignIn = ({ handleClick }) => {
    const user = useApp();
    const [otp, setOtp] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [invalidOtp, setInvalidOtp] = useState(false);
    const [otpUserId, setOtpUserId] = useState(null);
    const [otpText, setOtpText] = useState(null);

    const handleChange = (e) => {
        e?.preventDefault();
        if (!otp) setOtp(true);
        setPhoneNumber(e.target.value);
        setInvalidOtp(false);
    }
    const handleOtpClick = async (e) => {
        e?.preventDefault();
        const userId = await user.registerUserSMS(phoneNumber);
        setOtpUserId(userId);
        setOtp(false);
    }
    const handleSignup = async (e) => {
        e?.preventDefault();
        const session = await user.appRegisterOtpSmsValidate(otpUserId, otpText);
        if (session) {
            handleClick();
            await user.init();
        }
        setInvalidOtp(true);
    }

    return (
        <>
            <div className='create-popup-screen' onClick={handleClick}>
                <div className='containerAuth-wrapper'>
                    <div className={`containerAuth activateLogin`} id="containerAuth" onClick={(e) => e.stopPropagation()}>
                        <div className="form-containerAuth sign-up">
                            <form action="#">
                                <h1>Login to your account</h1>
                                <div className="social-icons">
                                    <Link className='google-logo' onClick={() => user.appGoogleAuth()}>
                                        <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="google-icon" width={30} height={30} />
                                        <p>Sign-in with Google</p>
                                    </Link>
                                </div>
                                <span>or use your phone number instead</span>
                                <div className='containerAuthDiv'>
                                    <span>+91</span>
                                    <input type="number" placeholder="Phone number" value={phoneNumber} onChange={handleChange} />
                                </div>
                                {otp ? <button onClick={handleOtpClick}>Get OTP</button> :
                                    <>
                                        <input type="number" placeholder="Enter OTP" value={otpText} onChange={(e) => setOtpText(e.target.value)} />
                                        {invalidOtp ? <p style={{ textAlign: 'center', color: 'red' }}>invalid OTP</p> : null}
                                        <button onClick={handleSignup}>Sign Up</button>
                                    </>
                                }
                            </form>
                        </div>
                        <div className="toggle-containerAuth">
                            <div className="toggle">

                                <div className="toggle-panel toggle-left">
                                    <h1>Welcome!</h1>
                                    <p>Enter in-to your shopping world</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

SignIn.propTypes = {
    handleClick: PropTypes.func
};

export default SignIn