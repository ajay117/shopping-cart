import { Link } from "react-router-dom";


function Header() {
  return (
    <header className="nav">
      <nav>
        <ul>
          <div className="brand">
            <li>BrandName</li>
          </div>
          <div className="nav-links">
            <li><Link to="/shopping-cart">Home</Link></li>
            <li><Link to="/shopping-cart/shop">Shop</Link></li>
            <li><Link to="/shopping-cart/cart">Cart</Link></li>
          </div>
        </ul>
      </nav>
    </header>
  );

}

export default Header;