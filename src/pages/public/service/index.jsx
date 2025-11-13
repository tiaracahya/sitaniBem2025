import React from 'react';

function Services() {
    return (
        <section className="bg-gradient-to-b from-blue-50 to-indigo-100 py-12 antialiased dark:from-gray-900 dark:to-gray-800">
            <div className="mx-auto max-w-screen-xl px-6 2xl:px-0">
                <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-400 dark:to-indigo-300 mb-8 text-center">
                    Layanan GoBook
                </h2>

                <p className="text-blue-800 dark:text-indigo-200 text-lg text-center mb-12">
                    Temukan berbagai layanan menarik dari GoBook yang akan membuat pengalaman membaca kamu semakin seru dan mudah!
                </p>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Layanan 1 */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center border-t-4 border-blue-500">
                        <div className="flex justify-center mb-4">
                            <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-900 dark:text-white mb-2">
                            Rekomendasi Pribadi
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Dapatkan saran buku terbaik berdasarkan kebiasaan membaca dan genre favoritmu.
                        </p>
                    </div>

                    {/* Layanan 2 */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center border-t-4 border-indigo-500">
                        <div className="flex justify-center mb-4">
                            <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7H3v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-900 dark:text-white mb-2">
                            Perpustakaan Virtual
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Jelajahi ribuan buku secara online dan baca kapan saja, di mana saja.
                        </p>
                    </div>

                    {/* Layanan 3 */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center border-t-4 border-blue-400">
                        <div className="flex justify-center mb-4">
                            <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18M5 6h14M5 18h14" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-900 dark:text-white mb-2">
                            Klub Buku & Acara
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Bergabung dengan komunitas pembaca, ikuti acara menarik, dan diskusikan buku favoritmu bersama yang lain.
                        </p>
                    </div>

                    {/* Layanan 4 */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center border-t-4 border-indigo-400">
                        <div className="flex justify-center mb-4">
                            <svg className="w-12 h-12 text-indigo-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6h6v6m2 4H7a2 2 0 01-2-2V7h14v12a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-900 dark:text-white mb-2">
                            Pelacak Bacaan
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Catat buku yang sudah kamu baca, tetapkan target, dan pantau perkembangan bacaanmu dengan mudah.
                        </p>
                    </div>

                    {/* Layanan 5 */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center border-t-4 border-blue-500">
                        <div className="flex justify-center mb-4">
                            <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9M12 4h9M12 12h9M3 6h3m-3 6h3m-3 6h3" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-900 dark:text-white mb-2">
                            Wawasan Penulis
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Baca wawancara, tips, dan inspirasi langsung dari para penulis favoritmu.
                        </p>
                    </div>

                    {/* Layanan 6 */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center border-t-4 border-indigo-500">
                        <div className="flex justify-center mb-4">
                            <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c2.21 0 4-1.79 4-4S14.21 0 12 0 8 1.79 8 4s1.79 4 4 4zm0 2c-3.31 0-6 2.69-6 6v4h12v-4c0-3.31-2.69-6-6-6z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-blue-900 dark:text-white mb-2">
                            Dukungan 24/7
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Tim bantuan kami siap membantu kapan saja kamu butuh, siang maupun malam.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
