import React, { useEffect, useState } from "react";
import { getProducts } from "../../../_services/product";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Gagal ambil data produk:", err));
  }, []);

  return (
    <div>
      <h2>Daftar Produk</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - Rp {p.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

