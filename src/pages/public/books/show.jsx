import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBooks } from "../../../_services/books";
import { bookImageStorage } from "../../../_api";

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [payment, setPayment] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const books = await getBooks();
      const selected = books.find((b) => b.id === parseInt(id));
      setBook(selected);
    };
    fetchData();
  }, [id]);

  if (!book)
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;

  const totalPrice = book.price * quantity;

  const handlePayment = () => {
    const paid = parseInt(payment);

    if (isNaN(paid)) {
      alert("⚠️ Masukkan nominal pembayaran terlebih dahulu!");
      return;
    }

    if (paid < totalPrice) {
      alert(
        `❌ Pembayaran Gagal!\n\nTotal seharusnya: Rp ${totalPrice.toLocaleString(
          "id-ID"
        )}\nNominal kamu: Rp ${paid.toLocaleString("id-ID")}\n\nUang kamu kurang!`
      );
      return;
    }

    if (paid === totalPrice) {
      alert(
        `✅ Pembayaran Berhasil!\n\nJudul: ${book.title}\nJumlah: ${quantity}\nTotal: Rp ${totalPrice.toLocaleString(
          "id-ID"
        )}\n\nPesananmu akan segera dikirim.`
      );
    } else if (paid > totalPrice) {
      const change = paid - totalPrice;
      alert(
        `✅ Pembayaran Berhasil!\n\nJudul: ${book.title}\nJumlah: ${quantity}\nTotal: Rp ${totalPrice.toLocaleString(
          "id-ID"
        )}\nDibayar: Rp ${paid.toLocaleString(
          "id-ID"
        )}\nKembalian: Rp ${change.toLocaleString(
          "id-ID"
        )}\n\nPesananmu akan segera dikirim.`
      );
    }
  };

  return (
    <section className="bg-gray-50 py-10 dark:bg-gray-900">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
          <img
            src={
              book.cover_photo.startsWith("http")
                ? book.cover_photo
                : `${bookImageStorage}/${book.cover_photo}`
            }
            alt={book.title}
            className="rounded-xl shadow-lg object-cover w-full h-[400px]"
          />

          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              {book.title}
            </h1>

            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              {book.description}
            </p>

            <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
              Harga Satuan: Rp {book.price.toLocaleString("id-ID")}
            </p>

            {/* Input jumlah buku */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Jumlah Buku:
              </label>
              <input
                type="number"
                min="1"
                max={book.stock || 99}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                className="w-24 px-3 py-1 border border-gray-300 rounded-lg text-center dark:bg-gray-700 dark:text-white"
              />
            </div>

            <p className="text-md font-semibold mb-6 text-gray-700 dark:text-gray-200">
              Total:{" "}
              <span className="text-indigo-600">
                Rp {totalPrice.toLocaleString("id-ID")}
              </span>
            </p>

            {/* Input pembayaran */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Masukkan Nominal Pembayaran:
              </label>
              <input
                type="number"
                placeholder="Masukkan jumlah uang..."
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white"
              />
            </div>

            <button
              onClick={handlePayment}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition-all"
            >
              Beli Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookDetail;

