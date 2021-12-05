import { Link } from "react-router-dom";
function Home() {
    return (
        <div>
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/cart">Cart</Link>
            </nav>
        </div>
    )
}

export default Home;