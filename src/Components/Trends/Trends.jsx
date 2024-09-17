import './trends.css';
import SingleTrend from './SingleTrend';
import { trendsProductsData } from '../../demo';

const Trends = () => {

    
    return (
        <>
            <div className='margin-top margin-bottom'>
                <section className='container'>
                    <div className='new-trends'>
                        {
                            trendsProductsData.map((item) => (
                                <SingleTrend key={item.id} title={item.title} subTitle={item.subTitle} image={item.image} />
                            ))
                        }
                    </div>
                </section>
            </div>
        </>
    )
}

export default Trends