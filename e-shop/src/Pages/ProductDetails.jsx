import './ProductDetails.css'
export default function ProductDetails(){
    return(
        <div className='details-container'>
            <div className='details-img'> </div>
                 <div className='details-info'> 
                    <h2 className='details-title'>Product Name</h2>
                    <p className='details-price'>$00.00</p>

                    <p className='details-description'>
                        This is a placeholder descriptio. The real product information will 
                        be loaded here later
                    </p>
                    <button className='details-button'>Add to cart</button>
                </div>
        </div>
    )
}