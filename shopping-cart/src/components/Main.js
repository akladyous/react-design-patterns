import Products from './Products'

export default function Main({products, addToCart}) {
    return (
        <div className="products">
            <h2>Products</h2>
            <div className="items">
                {products.map((product) => (
                    <Products
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    />
                ))}
            </div>
        </div>
    );
}
