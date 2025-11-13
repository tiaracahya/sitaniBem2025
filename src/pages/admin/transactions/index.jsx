import React, { useEffect, useState } from "react";
import api from "../../../_api";

const TransactionPage = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const res = await api.get("/transactions");
      setTransactions(res.data.data || []);
    } catch (error) {
      console.error("Gagal mengambil data transaksi:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Data Transaksi</h1>
      <table className="min-w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">No</th>
            <th className="border px-4 py-2">Nomor Pesanan</th>
            <th className="border px-4 py-2">Customer</th>
            <th className="border px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 ? (
            transactions.map((t, i) => (
              <tr key={t.id}>
                <td className="border px-4 py-2">{i + 1}</td>
                <td className="border px-4 py-2">{t.order_number}</td>
                <td className="border px-4 py-2">{t.customer_name}</td>
                <td className="border px-4 py-2">Rp {t.total}</td>
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

export default TransactionPage;

