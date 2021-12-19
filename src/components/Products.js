import { useState, useEffect } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=> res.json())
            .then(json => setProducts([...products, ...json]));
            
    return () => {
      setProducts([]);
    }
  }, []);
  let addProducts = products.map(item => (
        <div className="product mh-20 mt-20" key={item.id}>
          <div className="product-img">
            <img className="img-responsive" src={item.image} alt={item.title} />
          </div>
          <div className="product-description">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p className="price">Price: ${item.price}</p>
            <div className="product-btn">
              <button className="btn-buy">Buy</button>
            </div>
          </div>
        </div>
  ));
  return (
    <div>
      {addProducts}
    </div>
  );
}

export default Products;