import './cartpage.css'
import img2 from './image2.jpg'
export default function Cartpage(){
    return(
        <div className='cart-page'>
            <div className='container'>
            <div>
                <img  className=' cart-image'src={img2} />
            </div>
            <div  className='sumarry'>
              
                <h2 className='cart-sumarry'>order summary</h2>
                <p className='cart-details-price'>Total: 00.00$</p>
                <p className='cart-details-price'>Estimate Shipping: 00.00$</p>
                <hr />
                <p className='cart-total'>Subtotal: 00.00$</p>
                <button className='cart-button'>Checout</button>
                
            </div></div>
        </div>
    )
}