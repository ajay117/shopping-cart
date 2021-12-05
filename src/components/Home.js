import { Link } from "react-router-dom";
function Home() {
    return (
        <div>
            <header className="container-nav">
                <nav>
                  <ul>
                    <li className="brand">BrandName</li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                  </ul>
                </nav>
            </header>
            <section>
                <div className="container-intro">
                    <p>Welcom to ... </p>
                    <p>A one stop for all your ... need</p>
                </div>
            </section>
            
        </div>
    )
}

export default Home;