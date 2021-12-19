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
    let addCategories2Dom = categories.map((item,index) => <p key={index} className="box thick-border">{item.toUpperCase()}</p>)
    return (
        <div className="categories">
          {addCategories2Dom}
        </div>
    )
}

export default Categories;