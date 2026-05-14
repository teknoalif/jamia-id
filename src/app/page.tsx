// src/app/page.tsx
import Link from 'next/link';

export default function HomePage() {
    return (
        <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-6 text-center bg-slate-50">
        <h1 className="text-5xl font-bold text-slate-900 mb-4 tracking-tight">JAMIA</h1>
        <p className="text-xl text-slate-600 italic mb-8">
        "Menyambung Potensi, Membangun Ekosistem Digital"
        </p>
        <div className="flex justify-center gap-4">
        <Link href="/dashboard" className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition">
        Dashboard
        </Link>
        <button className="border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-medium hover:bg-white transition">
        Pelajari Layanan
        </button>
        </div>
        </section>

        {/* Philosophy Section */}
        <section className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-semibold text-center mb-10">Filosofi Kami</h2>
        <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 border rounded-xl hover:shadow-md transition">
        <h3 className="font-bold text-lg mb-2">Jami' (Menyeluruh)</h3>
        <p className="text-slate-600 text-sm">
        Kemampuan menangani segala perkara digital (CBT, POS, LMS, Restoran, Toserba, Kelontong, Klinik, Sekolah, Landing Page, Sport) dalam satu wadah solusi yang terintegrasi.
        </p>
        </div>
        <div className="p-6 border rounded-xl hover:shadow-md transition">
        <h3 className="font-bold text-lg mb-2">Digital Artisan</h3>
        <p className="text-slate-600 text-sm">
        Sentra pengembangan solusi inklusif dan transformatif bagi pendidikan hingga UMKM.
        </p>
        </div>
        </div>
        </section>
        </main>
    );
}
