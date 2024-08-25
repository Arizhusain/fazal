import React from 'react'
import './componentTitle.css'

const ComponentTitle = ({ title, subTitle }) => {
    return (
        <>
            <section className='margin-top margin-bottom'>
                <div className='container'>
                    <div className='title-wrapper'>
                        <h2>{title}</h2>
                        {subTitle ? <p>{subTitle}</p> : null}
                        <span className='horizontal-line' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ComponentTitle