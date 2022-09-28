import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function Products({ product, addToCart }) {
    const { title, image, price, category } = product;

    // const [cart, setCart] = useState([]);

    // const addToCart = (item) => {
    //     setCart([...cart, item])
    //     console.log(cart)
    // }

    return (
        <div className="item">
            <div>
                <h5>{category}</h5>
            </div>
            <div>
                <img src={image} alt={title} />
            </div>
            <div>
                <h4>${price}</h4>
            </div>
            <div>
                <IconButton
                    color="info"
                    size="large"
                    aria-label="add to shopping cart"
                    onClick={() => addToCart(product)}
                >
                    <AddShoppingCartIcon />
                </IconButton>
                {/* <button onClick={() => addToCart(product)}>Add to Card</button> */}
            </div>
        </div>
    );
}
