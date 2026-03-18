import React, { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../services/api";
import AddProduct from "./AddProduct";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const res = await getProducts();
    setProducts(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetchData();
  };

  return (
    <div>
      <AddProduct refresh={fetchData} />

      <h3>Product List</h3>
      {products.map((p) => (
        <div key={p._id} style={{ border: "1px solid", margin: "10px" }}>
          <h4>{p.name}</h4>
          <p>₹{p.price}</p>

          <Link to={`/product/${p._id}`}>View</Link>
          <button onClick={() => handleDelete(p._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;