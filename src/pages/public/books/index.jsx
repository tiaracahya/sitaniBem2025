import React, { useEffect, useState } from "react";
import { getBooks } from "../../../_services/books";
import { Link } from "react-router-dom";
import { bookImageStorage } from "../../../_api";
import { ShoppingCart } from "lucide-react";

function Books() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const [bookData] = await Promise.all([getBooks()]);
      setBooks(bookData);
    };
    fetchData();
  }, []);

  const filteredBooks = books.filter((b) =>
    b.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (book) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === book.id);
      if (exists) {
        return prev.map((item) =>
          item.id === book.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...book, qty: 1 }];
    });
  };

  const removeFromCart = (bookId) => {
    setCart((prev) => prev.filter((item) => item.id !== bookId));
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handlePayment = () => {
    alert(
      `💳 Pembayaran Berhasil!\nTotal: Rp ${totalPrice.toLocaleString("id-ID")}\n\nPesananmu akan dikirim setelah pembayaran diterima.`
    );
    setCart([]);
    setShowCart(false);
  };

  return (
    <>
      <section className="bg-gray-50 py-10 antialiased dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          {/* 🔍 Search + Cart */}
          <div className="flex justify-between items-center mb-10">
            <input
              type="text"
              placeholder="Cari judul buku..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />

            {/* 🛒 Cart Icon */}
            <button
              onClick={() => setShowCart(!showCart)}
              className="relative ml-4 p-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white transition-all"
            >
              <ShoppingCart size={22} />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
                  {cart.length}
                </span>
              )}
            </button>
          </div>

          {/* 🧺 Cart Sidebar */}
          {showCart && (
            <div className="fixed top-20 right-6 w-80 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-2xl p-5 z-50">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Keranjang Buku 🛍️
              </h3>
              {cart.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Keranjang kosong.
                </p>
              ) : (
                <>
                  <ul className="space-y-3 mb-3 max-h-60 overflow-y-auto">
                    {cart.map((item) => (
                      <li
                        key={item.id}
                        className="flex justify-between items-center border-b pb-2"
                      >
                        <div>
                          <p className="font-medium text-gray-800 dark:text-gray-200">
                            {item.title}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Rp {item.price.toLocaleString("id-ID")} × {item.qty}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-600 text-sm"
                        >
                          ✕
                        </button>
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-between items-center font-semibold text-gray-900 dark:text-gray-100 border-t pt-2">
                    <span>Total:</span>
                    <span>Rp {totalPrice.toLocaleString("id-ID")}</span>
                  </div>

                  <button
                    onClick={handlePayment}
                    className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg shadow-md transition-all"
                  >
                    Bayar Sekarang
                  </button>
                </>
              )}
            </div>
          )}

          {/* 📚 Books Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((b) => (
                <div
                  key={b.id}
                  className="rounded-xl border border-gray-200 bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="h-56 w-full">
                    <Link to={`/books/show/${b.id}`}>
                      <img
                        className="mx-auto h-full"
                        src={
                          b.cover_photo.startsWith("http")
                            ? b.cover_photo
                            : `${bookImageStorage}/${b.cover_photo}`
                        }
                        alt={b.title}
                      />
                    </Link>
                  </div>

                  <div className="pt-6 px-4 pb-5">
                    <Link
                      to={`/books/show/${b.id}`}
                      className="text-lg font-semibold leading-tight text-gray-900 hover:text-indigo-800 transition-colors dark:text-white dark:hover:text-indigo-400"
                    >
                      {b.title}
                    </Link>

                    <p className="mt-2 text-indigo-600 dark:text-indigo-400 font-semibold">
                      Rp {b.price.toLocaleString("id-ID")}
                    </p>

                    <div className="mt-5 flex justify-between">
                      <Link
                        to={`/books/show/${b.id}`}
                        className="inline-flex items-center gap-1.5 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 active:scale-95 transition-all duration-200"
                      >
                        View Detail
                      </Link>

                      <button
                        onClick={() => addToCart(b)}
                        className="inline-flex items-center gap-1.5 rounded-md bg-green-500 px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-green-600 active:scale-95 transition-all duration-200"
                      >
                        + Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 dark:text-gray-400 col-span-full">
                Buku tidak ditemukan 😢
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Books;
