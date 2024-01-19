
import { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        const fetchData = async () =>{
            try{
                const response = await fetch('products.json');
                const data = await response.json();
                setProducts(data);
            }
            catch(err){
                console.log(err);
            }
        }
        fetchData();
        
    }, []);
   
    useEffect(() =>{
        const storedProduct = getShoppingCart();
        const savecart = [];

        for(const id in storedProduct){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedProduct[id];
                addedProduct.quantity = quantity;
                savecart.push(addedProduct);
            }
        }
        setCart(savecart);

    }, [products]);

    const addToCart = (selectedProduct) =>{
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
    }

    const clearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map((product,i) => <Product
                        key={i}
                        product={product}
                        addToCart={addToCart}
                    ></Product>)
                }
            </div>

            <div className="product-summery">
                <Cart cart={cart} clearCart={clearCart}>
                    <Link to='/orders' className='link'>
                        <button className='common-btn'>
                            <span>Review Order</span><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;