import React, { useState } from 'react';
import './auth.css';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [signToggle, setSignToggle] = useState(false);
    return (
        <div className='containerAuth-wrapper'>
            <div class={`containerAuth ${signToggle ? 'activateLogin' : ''}`} id="containerAuth">
                <div class="form-containerAuth sign-up">
                    <form action="#">
                        <h1>Create an Account</h1>
                        <div class="social-icons">
                            <Link><ion-icon name="logo-google"></ion-icon></Link>
                        </div>
                        <span>or use your email for register</span>
                        <input type="text" placeholder="Full Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div>

                <div class="form-containerAuth sign-in">
                    <form action="#">
                        <h1>Sign In</h1>
                        <div class="social-icons">
                            <Link><ion-icon name="logo-google"></ion-icon></Link>
                        </div>
                        <span>or use your email and password</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <Link>Forgot Password?</Link>
                        <button>Sign In</button>
                    </form>
                </div>

                <div class="toggle-containerAuth">
                    <div class="toggle">

                        <div class="toggle-panel toggle-left">
                            <h1>Welcome Back!</h1>
                            <p>If you are our exsisting user please sign-in.</p>
                            <button class="hidden" id="login" onClick={() => setSignToggle(false)}>Sign In</button>
                        </div>

                        <div class="toggle-panel toggle-right">
                            <h1>Hello, Are you new to our site?</h1>
                            <p>Please register to our site to use all of features.</p>
                            <button class="hidden" id="register" onClick={() => setSignToggle(true)}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn