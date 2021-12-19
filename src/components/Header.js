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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </div>
        </ul>
      </nav>
    </header>
  );

}

export default Header;