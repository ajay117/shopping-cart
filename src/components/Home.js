import Header from "./Header";
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="container">
      <Header />
      <section className="container-flex mh-20">
          <div className="intro">
            <div className="intro-para">
              <h3 className="text-large">FakeStore</h3>
              <p>A one stop shop for all your need.</p></div>
          </div>
          <div className="showcase-img">
            <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
             alt="women posing after shopping" />
          </div>
      </section>
      <div className="btn-shop">
        <button type="button"><Link to="/shop">Go to Shop</Link></button>
      </div>
    </div>
    )
}

export default Home;