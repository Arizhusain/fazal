import './footer.css';

const Footer = () => {
    return (
        <>
            <div className='margin-top margin-bottom'>
                <section className='container'>
                    <div className='footer-wrapper'>
                        <div className='flex1'>
                            <h2 className='footer-headings'>Registered Office Address</h2>
                            <p>Powerlook Apparels Pvt Ltd
                                Lotus Corporate Park Wing G02 - 1502,
                                Ram Mandir Lane, off Western Express Highway, Goregaon, Mumbai, 400063
                            </p>
                            <h2 className='footer-headings'>Office Timings</h2>
                            <p>Mon - Sat : 10:00 am - 07:00 pm</p>
                        </div>
                        <div className='flex1 flex2'>
                            <h2 className='footer-headings'>Useful links</h2>
                            <ul>
                                <li><a href='#1'>About Us</a></li>
                                <li><a href='#1'>Returns, Exchange & Refund</a></li>
                                <li><a href='#1'>Shipping Policy</a></li>
                                <li><a href='#1'>Terms and conditions</a></li>
                                <li><a href='#1'>Privacy Policy</a></li>
                                <li><a href='#1'>Cancellation Policy</a></li>
                                <li><a href='#1'>How to Order</a></li>
                                <li><a href='#1'>Refer & Earn</a></li>
                                <li><a href='#1'>Contact Us</a></li>
                                <li><a href='#1'>Sitemap</a></li>
                            </ul>
                        </div>
                        <div className='flex1'>
                            <h2 className='footer-headings'>Categories</h2>
                            <ul>
                                <li><a href='#1'>T-Shirts</a></li>
                                <li><a href='#1'>Shirts</a></li>
                                <li><a href='#1'>Vests</a></li>
                                <li><a href='#1'>Jacket</a></li>
                                <li><a href='#1'>Accessories</a></li>
                            </ul>
                        </div>
                        <div className='flex1'>
                            <h2 className='footer-headings'>Support</h2>
                            <h3>Mail</h3>
                            <a href="mailto:support@fazal.in">support@fazal.in</a>
                            <h3>Phone</h3>
                            <a href="tel:+919667976977">+91 966-7976-977</a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Footer