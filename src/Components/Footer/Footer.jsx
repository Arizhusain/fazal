import React from 'react'
import logo from '../../assets/images/logo.svg'

const Footer = () => {
    return (
        <footer class="footer">

            <div class="footer-top section">
                <div class="container">

                    <div class="footer-brand">

                        <a href="#" class="logo">
                            <h1 style={{ color: '#6b6b6b' }}>F A Z A L</h1>
                        </a>

                        <ul class="social-list">

                            <li>
                                <a href="#" class="social-link">
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" class="social-link">
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" class="social-link">
                                    <ion-icon name="logo-pinterest"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="#" class="social-link">
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </a>
                            </li>

                        </ul>

                    </div>

                    <div class="footer-link-box">

                        <ul class="footer-list">

                            <li>
                                <p class="footer-list-title">Contact Us</p>
                            </li>

                            <li>
                                <address class="footer-link">
                                    <ion-icon name="location"></ion-icon>

                                    <span class="footer-link-text">
                                        2751 S Parker Rd, Aurora, CO 80014, United States
                                    </span>
                                </address>
                            </li>

                            <li>
                                <a href="tel:+557343673257" class="footer-link">
                                    <ion-icon name="call"></ion-icon>

                                    <span class="footer-link-text">+557343673257</span>
                                </a>
                            </li>

                            <li>
                                <a href="mailto:footcap@help.com" class="footer-link">
                                    <ion-icon name="mail"></ion-icon>

                                    <span class="footer-link-text">footcap@help.com</span>
                                </a>
                            </li>

                        </ul>

                        <ul class="footer-list">

                            <li>
                                <p class="footer-list-title">My Account</p>
                            </li>

                            <li>
                                <a href="#" class="footer-link">
                                    <ion-icon name="chevron-forward-outline"></ion-icon>

                                    <span class="footer-link-text">My Account</span>
                                </a>
                            </li>

                            <li>
                                <a href="#" class="footer-link">
                                    <ion-icon name="chevron-forward-outline"></ion-icon>

                                    <span class="footer-link-text">View Cart</span>
                                </a>
                            </li>

                            <li>
                                <a href="#" class="footer-link">
                                    <ion-icon name="chevron-forward-outline"></ion-icon>

                                    <span class="footer-link-text">Wishlist</span>
                                </a>
                            </li>

                            <li>
                                <a href="#" class="footer-link">
                                    <ion-icon name="chevron-forward-outline"></ion-icon>

                                    <span class="footer-link-text">Compare</span>
                                </a>
                            </li>

                            <li>
                                <a href="#" class="footer-link">
                                    <ion-icon name="chevron-forward-outline"></ion-icon>

                                    <span class="footer-link-text">New Products</span>
                                </a>
                            </li>

                        </ul>

                        <div class="footer-list">

                            <p class="footer-list-title">Opening Time</p>

                            <table class="footer-table">
                                <tbody>

                                    <tr class="table-row">
                                        <th class="table-head" scope="row">Mon - Tue:</th>

                                        <td class="table-data">8AM - 10PM</td>
                                    </tr>

                                    <tr class="table-row">
                                        <th class="table-head" scope="row">Wed:</th>

                                        <td class="table-data">8AM - 7PM</td>
                                    </tr>

                                    <tr class="table-row">
                                        <th class="table-head" scope="row">Fri:</th>

                                        <td class="table-data">7AM - 12PM</td>
                                    </tr>

                                    <tr class="table-row">
                                        <th class="table-head" scope="row">Sat:</th>

                                        <td class="table-data">9AM - 8PM</td>
                                    </tr>

                                    <tr class="table-row">
                                        <th class="table-head" scope="row">Sun:</th>

                                        <td class="table-data">Closed</td>
                                    </tr>

                                </tbody>
                            </table>

                        </div>

                        <div class="footer-list">

                            <p class="footer-list-title">Newsletter</p>

                            <p class="newsletter-text">
                                Authoritatively morph 24/7 potentialities with error-free partnerships.
                            </p>

                            <form action="" class="newsletter-form">
                                <input type="email" name="email" required placeholder="Email Address" class="newsletter-input" />

                                <button type="submit" class="btn btn-primary">Subscribe</button>
                            </form>

                        </div>

                    </div>

                </div>
            </div>

            <div class="footer-bottom">
                <div class="container">

                    <p class="copyright">
                        &copy; 2024. All Rights Reserved.
                        {/* <a href="#" class="copyright-link">FAZAL</a>. */}
                        {/* All Rights Reserved */}
                    </p>

                </div>
            </div>

        </footer>
    )
}

export default Footer