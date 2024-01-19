import './ReviewProducts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewProducts = ({product, removeCartItem}) => {
    const {id, img, name, price, quantity} = product;

    return ( 
        <div className="review-item">
            <div><img src={img} alt="" /></div>
            <div className="review-body">
                <div className="review-detail">
                    <h4>{name}</h4>
                    <p>Price: <span className='para'>${price}</span></p>
                    <p>Order Quantity: <span className='para'>{quantity}</span></p>
                </div>
                <div className="remove">
                    <button onClick={() => removeCartItem(id)} className='btn'>
                        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewProducts;