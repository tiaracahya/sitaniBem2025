import React, { useEffect, useState } from "react";
import api from "../../../_api";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await api.get("/products");
      setProducts(res.data.data || []);
    } catch (error) {
      console.error("Gagal mengambil data produk:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Data Produk</h1>
      <table className="min-w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">No</th>
            <th className="border px-4 py-2">Nama Produk</th>
            <th className="border px-4 py-2">Harga</th>
            <th className="border px-4 py-2">Stok</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((prod, i) => (
              <tr key={prod.id}>
                <td className="border px-4 py-2">{i + 1}</td>
                <td className="border px-4 py-2">{prod.name}</td>
                <td className="border px-4 py-2">Rp {prod.price}</td>
                <td className="border px-4 py-2">{prod.stock}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-4">
                Tidak ada data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductPage;





    
