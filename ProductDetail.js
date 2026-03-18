import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/api";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await getProduct(id);
      setProduct(res.data);
    };

    fetchProduct();
  }, [id]);

  if (!product) return <h3>Loading...</h3>;

  return (
    <div>
      <h2>Product Detail</h2>
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
    </div>
  );
}

export default ProductDetail;