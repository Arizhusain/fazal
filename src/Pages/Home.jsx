import Hero from '../Components/Hero/Hero'
import ComponentTitle from '../Components/ComponentTitle/ComponentTitle'
import ExploreProducts from '../Components/ExploreProducts/ExploreProducts'
import Trends from '../Components/Trends/Trends'
import { BEST_SELLERS, DEAL_OF_THE_DAY, DISCOVER_THE_LATEST_TRENDS, DONT_MISS_OUT, EVERYDAY_NEW_DEAL, EXPLORE_PRODUCTS, NEW_DEAL_NEW_TRENDS } from '../constants'
import ProductList from '../Components/ProductList/ProductList'
import DealComponent from '../Components/DealComponent/DealComponent'
import Features from '../Components/Features/Features'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const Home = () => {
    return (
        <>
            <Hero />
            <ComponentTitle title={EXPLORE_PRODUCTS} />
            <ExploreProducts />
            <ComponentTitle title={NEW_DEAL_NEW_TRENDS} />
            <Trends />
            <ComponentTitle title={BEST_SELLERS} subTitle={DISCOVER_THE_LATEST_TRENDS} />
            <ProductList />
            <ComponentTitle title={DONT_MISS_OUT} subTitle={EVERYDAY_NEW_DEAL} />
            <DealComponent />
            <ComponentTitle title={DEAL_OF_THE_DAY} />
            <ProductList />
            <Features />
            <NewsLetter />
        </>
    )
}

export default Home