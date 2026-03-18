import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/products",
});

// GET all products
export const getProducts = () => API.get("/");

// GET single product
export const getProduct = (id) => API.get(`/${id}`);

// ADD product
export const addProduct = (data) => API.post("/", data);

// UPDATE product
export const updateProduct = (id, data) => API.put(`/${id}`, data);

// DELETE product
export const deleteProduct = (id) => API.delete(`/${id}`);