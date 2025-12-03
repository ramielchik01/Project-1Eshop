import ProductCard from '../components/ProductCard'
import './Home.css'
import image1 from './Imgs/img1.jpg'
export default function Home(){
    return (
        <div>
            <section className='hero'>
                <div className='hero-text'>
                    <p>Your Destination for Quality Finds</p>
                    <h1>Trending Shop</h1>
                    <p>Welcome to Trending Shop, where every product tells a story. From handpicked items to the latest trends!</p>
                    <button className='hero-button'>EXPLORE OUR PRODUCTS</button>
                </div>
                <img src={image1} 
                alt="Banner"
                className='hero-img' />
            </section>
            <div className='home-container'>
                <h2 className='home-title'>Trending Products</h2>
                <div className='product-grid'>
                    <ProductCard/>         
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </div>
        </div>
    )
}