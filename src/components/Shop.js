import { Link } from "react-router-dom";

function Shop() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
        </div>
    )
}

export default Shop;