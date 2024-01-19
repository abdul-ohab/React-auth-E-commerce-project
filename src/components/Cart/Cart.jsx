import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Cart = ({cart, clearCart, children}) => {

    let totalPrice = 0;
    let quantity = 0;
    let totalShipping = 0;

    for(const product of cart){
        quantity = quantity + product.quantity;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
    }

    const tax = parseFloat((totalPrice*0.1).toFixed(2));    
    return (
        <div className="detail">
            <h3>Order Summery</h3>
            <p>Selected items: {quantity}</p>
            <p>Total price: ${totalPrice}</p>
            <p>Total shipping: ${totalShipping}</p>
            <p>Tax: {tax}</p>
            <h4>Grand Total: ${(totalPrice+totalShipping+tax).toFixed(2)}</h4>
            <button onClick={clearCart} className='clear-btn'>
                <span>Clear Cart</span><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
            </button>
            {children}
        </div>
    );
};

export default Cart;