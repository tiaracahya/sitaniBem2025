import api from "../_api";

// 📦 Get all products
export const getProducts = async () => {
  try {
    const res = await api.get("/products");
    return res.data;
  } catch (error) {
    console.error("❌ Error fetching products:", error);
    throw error;
  }
};

// 📦 Get product by ID
export const getProductById = async (id) => {
  try {
    const res = await api.get(`/products/${id}`);
    return res.data;
  } catch (error) {
    console.error("❌ Error fetching product:", error);
    throw error;
  }
};

// 📦 Create new product
export const createProduct = async (data) => {
  try {
    const res = await api.post("/products", data);
    return res.data;
  } catch (error) {
    console.error("❌ Error creating product:", error);
    throw error;
  }
};

// 📦 Update existing product
export const updateProduct = async (id, data) => {
  try {
    const res = await api.post(`/products/${id}`, data); // kamu pakai POST untuk update di Laravel
    return res.data;
  } catch (error) {
    console.error("❌ Error updating product:", error);
    throw error;
  }
};

// 📦 Delete product
export const deleteProduct = async (id) => {
  try {
    const res = await api.delete(`/products/${id}`);
    return res.data;
  } catch (error) {
    console.error("❌ Error deleting product:", error);
    throw error;
  }
};


