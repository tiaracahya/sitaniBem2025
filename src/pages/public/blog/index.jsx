import React from "react";

function Blogs() {
  return (
    <section className="bg-gray-50 py-12 antialiased dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-6 2xl:px-0">
        <h2 className="text-4xl font-bold text-indigo-900 dark:text-white mb-8 text-center">
          Jelajahi Cerita Buku Bersama ByBook
        </h2>

        <p className="text-indigo-800 dark:text-indigo-200 text-lg text-center mb-12">
          Temukan kisah-kisah menakjubkan dari berbagai genre — dari petualangan, misteri,
          hingga kisah yang menginspirasi hidupmu.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex justify-center items-center h-64 overflow-hidden rounded-t-xl">
              <img
                className="h-full w-auto object-cover"
                src="https://tse3.mm.bing.net/th/id/OIP.ATDrvdlwYQboxpBGEeh3ZQHaLS?pid=Api&P=0&h=220"
                alt="A Game of Thrones"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-indigo-900 dark:text-white mb-2 hover:text-indigo-600 transition-colors">
                A Game of Thrones
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                Intrik politik dan perebutan kekuasaan di dunia Westeros, penuh misteri,
                peperangan, dan pengkhianatan.
              </p>
              <button className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all">
                Baca Selengkapnya
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex justify-center items-center h-64 overflow-hidden rounded-t-xl">
              <img
                className="h-full w-auto object-cover"
                src="https://tse3.mm.bing.net/th/id/OIP.7sBNhxmhqPACw1yibDpO1AHaLH?pid=Api&P=0&h=220"
                alt="Murder on the Orient Express"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-indigo-900 dark:text-white mb-2 hover:text-indigo-600 transition-colors">
                Murder on the Orient Express
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                Kasus pembunuhan misterius di kereta mewah yang menantang kecerdikan
                detektif Hercule Poirot.
              </p>
              <button className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all">
                Baca Selengkapnya
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex justify-center items-center h-64 overflow-hidden rounded-t-xl">
              <img
                className="h-full w-auto object-cover"
                src="https://tse2.mm.bing.net/th/id/OIP.q01xHV5RqCvdG-DLsbmCUQHaLH?pid=Api&P=0&h=220"
                alt="The Hobbit: An Unexpected Journey"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-indigo-900 dark:text-white mb-2 hover:text-indigo-600 transition-colors">
                The Hobbit: An Unexpected Journey
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                Petualangan Bilbo Baggins bersama para dwarf untuk merebut kembali tanah air mereka
                dari seekor naga.
              </p>
              <button className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all">
                Baca Selengkapnya
              </button>
            </div>
          </div>
        </div>

        <p className="mt-12 text-indigo-900 dark:text-indigo-200 text-center text-lg">
          Bersama <span className="font-semibold">Bybook</span>, setiap halaman adalah
          petualangan baru yang menanti untuk dijelajahi.
        </p>
      </div>
    </section>
  );
}

export default Blogs;
