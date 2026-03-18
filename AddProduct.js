import React, { useState } from "react";
import { addProduct } from "../services/api";

function AddProduct({ refresh }) {
  const [form, setForm] = useState({ name: "", price: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProduct(form);
    setForm({ name: "", price: "" });
    refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Product</h3>

      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />

      <input
        type="number"
        placeholder="Price"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
        required
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default AddProduct;