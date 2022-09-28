import {useState, useEffect} from 'react';

import GetData from './components/GetData';
import Header from './components/Header';
import Main from './components/Main';
import Cart from './components/Cart';
import {itemsList} from './components/data'
import './App.css';

function App() {

    const [cartItems, setCart] = useState([]);

    const addToCart = (product) => {
        const productInCart = cartItems.find( (item) => item.id === product.id);
        if (productInCart){
            setCart(
                cartItems.map( (item) => 
                    item.id === product.id ? {...productInCart, qty: productInCart.qty + 1} : item
                )
            )
        } else{ 
            setCart([...cartItems, {...product, qty: 1}]);
        }
    };
    const RemoveItem = (product) => {
        const productInCart = cartItems.find( (item) => item.id === product.id);
        if (productInCart.qty === 1){
            setCart(
                cartItems.filter( (item) => item.id !== product.id)
            )
        } else{
            setCart(
                cartItems.map( (item) => 
                    item.id === product.id ? {...productInCart, qty: productInCart.qty - 1} : item
                )
            )
        }
    };

    return (
        <div className="App">
            <Header 
                // handleSearch={handleSearch}
            />
            <div className="main">
                <Main 
                    products={itemsList} 
                    addToCart={addToCart}
                />
                <Cart 
                    addToCart={addToCart} 
                    cartItems={cartItems} 
                    RemoveItem={RemoveItem}
                />
            </div>
        </div>
    );
}

export default App;
