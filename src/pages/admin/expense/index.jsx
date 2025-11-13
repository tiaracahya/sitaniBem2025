import React, { useEffect, useState } from "react";
import api from "../../../_api";

const ExpensePage = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const res = await api.get("/expenses");
      setExpenses(res.data.data || []);
    } catch (error) {
      console.error("Gagal mengambil data expense:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Data Pengeluaran</h1>
      <table className="min-w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">No</th>
            <th className="border px-4 py-2">Deskripsi</th>
            <th className="border px-4 py-2">Jumlah</th>
            <th className="border px-4 py-2">Tanggal</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length > 0 ? (
            expenses.map((exp, i) => (
              <tr key={exp.id}>
                <td className="border px-4 py-2">{i + 1}</td>
                <td className="border px-4 py-2">{exp.description}</td>
                <td className="border px-4 py-2">Rp {exp.amount}</td>
                <td className="border px-4 py-2">{exp.date}</td>
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

export default ExpensePage;
