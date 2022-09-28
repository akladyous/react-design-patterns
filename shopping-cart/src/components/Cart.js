import React from 'react'

export default function Cart({cartItems, addToCart, RemoveItem}) {

    let itemsPrice = cartItems.reduce((prev, curr) => prev + curr.price * curr.qty, 0)
    let tax = itemsPrice * 0.14
    let shipping = 20
    let total = (itemsPrice + tax + shipping).toFixed(2)


    return (
        <aside className="cart">
            <h2>
                <span class="material-icons-outlined">shopping_cart</span>
            </h2>
            <button onClick={()=>(console.log(cartItems))}></button>
            <div>
                {cartItems.length === 0 && <div>cart is empty</div>}
            </div>
            {
                cartItems.map( 
                    (item) => (
                        <div key={item.id} className="cartItems">
                            <div>{item.title}</div>
                            <div>{item.qty} x ${item.price.toFixed(2)}
                                <button onClick={()=>addToCart(item)}>+</button>
                                <button onClick={()=>RemoveItem(item)}>-</button>
                            </div>
                        </div>
                    
                    )
                )
            }
            
            {
                cartItems.length !== 0 && (
                    <div>
                        <hr />
                        <div>Items Price{itemsPrice}</div>
                        <div>Tax{tax}</div>
                        <div>Shipping{shipping}</div>
                        <div>Total{total}</div>
                    </div>
                )
            }
            
        </aside>
    )
}
