import Header from "./Header";
import Categories from "./Categories";
import Products from "./Products";

function Shop() {
  return (
    <div>
      <Header />
      <Categories />
      <div className="medium-border"></div>
      <Products />
    </div>
    )
}

export default Shop;