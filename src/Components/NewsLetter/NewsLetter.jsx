import './newsletter.css'

const NewsLetter = () => {
    return (
        <>
            <div className='new-container margin-top margin-bottom padding-top padding-bottom'>
                <section className='container'>
                    <div className='news-wrapper'>
                        <h1 className='news-title'>Newsletter</h1>
                        <p className='news-desc'>Get Coupons, Offers and timely updates from your favorite products.</p>
                        <div className='news-input-container'>
                            <input className='news-input' type="text" placeholder='Your email' />
                            <button className='news-btn'><ion-icon name="send-outline"></ion-icon></button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default NewsLetter