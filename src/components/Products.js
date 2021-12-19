import { useState, useEffect } from "react";

function Products() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/1')
            .then(res=> res.json())
            .then(json => {
              setProduct(json);
            });
  }, []);

  return (
    <div>
      {/* <form>
        <input type="search" placeholder="Search..."></input>
      </form> */}
      
    </div>
  );
}

export default Products;