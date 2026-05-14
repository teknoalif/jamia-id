import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">
            JAMIA
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 italic mb-10 font-light">
            "Menyambung Potensi, Membangun Ekosistem Digital"
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/dashboard" 
              className="bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              Buka Dashboard
            </Link>
            <button className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition-all duration-200">
              Pelajari Layanan
            </button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Filosofi Kami</h2>
          <div className="h-1 w-20 bg-slate-900 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Card 1 */}
          <div className="group p-8 bg-slate-50 rounded-3xl border border-transparent hover:border-slate-200 hover:bg-white transition-all duration-300">
            <div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-6 font-bold text-xl group-hover:scale-110 transition-transform">
              J
            </div>
            <h3 className="text-2xl font-bold mb-4">Jami' (Menyeluruh)</h3>
            <p className="text-slate-600 leading-relaxed">
              Kemampuan menangani segala perkara digital (CBT, POS, LMS, Restoran, Toserba, Klinik, Sekolah) dalam satu wadah solusi yang terintegrasi.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group p-8 bg-slate-50 rounded-3xl border border-transparent hover:border-slate-200 hover:bg-white transition-all duration-300">
            <div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-6 font-bold text-xl group-hover:scale-110 transition-transform">
              A
            </div>
            <h3 className="text-2xl font-bold mb-4">Digital Artisan</h3>
            <p className="text-slate-600 leading-relaxed">
              Sentra pengembangan solusi digital yang inklusif dan transformatif bagi seluruh lapisan masyarakat, dari pendidikan hingga UMKM.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Minimalis */}
      <footer className="border-t border-slate-100 py-12 text-center text-slate-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Jamia.id - Crafted by Alif Rezky</p>
      </footer>
    </main>
  );
}
