import PropTypes from 'prop-types';
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

ComponentTitle.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string
};

export default ComponentTitle