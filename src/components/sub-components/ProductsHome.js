import { useState, useEffect, React } from "react";
import Product from "./Product";

const ProductHome = ({ Title }) => {
  const PRODUCT_URL = "https://course-api.com/react-store-products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(PRODUCT_URL);
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <center>
        <h2 style={{ fontWeight: "bold", marginTop: "10px" }}>{Title}</h2>
      </center>
      <div
        className="row row-cols-1 row-cols-md-4 g-4"
        style={{ margin: "40px" }}
      >
        {products.map((product, index) => {
          const { image, name, price, description } = product;
          return (
            <Product
              key={product.id}
              Image={product.image}
              name={product.name}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProductHome;
