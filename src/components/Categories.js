import {useState, useEffect} from "react";

function Categories() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategories(json));
      return () => {
        setCategories([]);
      }
    }, []);
    return (
        <div className="categories">
          {categories.map((item,index) => <p key={index} className="box thick-border">{item.toUpperCase()}</p>)}
        </div>
    )
}

export default Categories;