import './Products.css';
import ProductCard from '../components/ProductCard';
export default function Products(){
    return(
        <div className='Products-page'>
            <div className='Filters'>
                <h2>Products</h2>
                <div className='Filter-row'>
                    <button className='Filter-button active'>All</button>
                    <button className='Filter-button'>Men</button>
                    <button className='Filter-button'>Women</button>
                    <button className='Filter-button'>Electronics</button>
                    <button className='Filter-button'>Accessories</button>
                    <select className='Sort-select'>
                        <option value="">Sort By</option>
                        <option value="">Default</option>
                        <option value="">Highest Price</option>
                        <option value="">Lowest Price</option>
                    </select>
                </div>
            </div>
            <div className='products-grid'>
                {Array.from({length: 12}).map((_, i) => (
                    <ProductCard key={i} />
                ))}
            </div>
        </div>
    )
}