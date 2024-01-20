import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import {useLoaderData} from 'react-router-dom';
import ReviewProducts from '../ReviewProducts/ReviewProducts';
import './Orders.css';
import { Link } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';



const Orders = () => {
    const carts = useLoaderData();
    const [cart, setCart] = useState(carts);

    const removeCartItem = (id) =>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const clearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className="review-container">
                <h3 className='selected'>Total selected products-{cart.length}</h3>
                {
                    cart.map((product,i) => <ReviewProducts
                        key={i} 
                        product={product}
                        removeCartItem={removeCartItem}
                    ></ReviewProducts>)
                }
            </div>

            <div className="product-summery">
                <Cart cart={cart} clearCart={clearCart}>
                    <Link to='/shipping' className='link'>
                        <button className='common-btn'>
                            <span>Proceed Shipping</span><FontAwesomeIcon icon={faMoneyBill}></FontAwesomeIcon>
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;