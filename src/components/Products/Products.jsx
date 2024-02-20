import products from "../../productData";
import ProductItem from "./ProductItem";
import "./Products.css";


const Products = () => {
  return (
    <main className="products-wrapper">
      <ul className="products">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </main>
  );
};

export default Products;
