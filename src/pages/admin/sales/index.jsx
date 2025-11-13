import React, { useEffect, useState } from "react";
import api from "../../../_api";

const SalesPage = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    fetchSales();
  }, []);

  const fetchSales = async () => {
    try {
      const res = await api.get("/sales");
      setSales(res.data.data || []);
    } catch (error) {
      console.error("Gagal mengambil data penjualan:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Data Penjualan</h1>
      <table className="min-w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">No</th>
            <th className="border px-4 py-2">Nama Produk</th>
            <th className="border px-4 py-2">Jumlah</th>
            <th className="border px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {sales.length > 0 ? (
            sales.map((s, i) => (
              <tr key={s.id}>
                <td className="border px-4 py-2">{i + 1}</td>
                <td className="border px-4 py-2">{s.product_name}</td>
                <td className="border px-4 py-2">{s.quantity}</td>
                <td className="border px-4 py-2">Rp {s.total_price}</td>
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

export default SalesPage;
