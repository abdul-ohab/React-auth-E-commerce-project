
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    
    const {addToCart, product} = props
    const {img, name, price, rating, seller} = product
    
    return (
        <div className='product'>
            <img src={img ? img : null} alt=""/> 
            <div className="card-body">
                <div className="main">
                    <h6 className='product-name'>{name}</h6>
                    <h4>Price: {price}</h4>
                </div>
                <div className="info">
                    <p>Seller: {seller}</p>
                    <p>Rating: {rating} stars</p>
                </div>
                <button onClick={() => addToCart(product)} className="cart-btn"> Add to Cart
                    <span> <FontAwesomeIcon icon={faShoppingCart}> </FontAwesomeIcon> </span>
                </button>
            </div>
        </div>
    );
};

export default Product;