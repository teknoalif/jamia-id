// src/app/dashboard/page.tsx
export default function DashboardPage() {
    return (
        <div className="max-w-5xl mx-auto">
        <header className="mb-10 border-b pb-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Wadah Digital Jamia</h1>
        <p className="text-slate-500 italic">"Menyambung Potensi, Membangun Ekosistem Digital."</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Visi Card */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition">
        <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 font-bold mb-4">V</div>
        <h3 className="text-slate-900 font-bold mb-3">Visi</h3>
        <p className="text-sm text-slate-600 leading-relaxed">Menjadi sentra pengembangan solusi digital yang inklusif dan transformatif bagi masyarakat.</p>
        </div>

        {/* Misi Card */}
        <div className="bg-slate-900 p-8 rounded-3xl shadow-lg border border-slate-800 col-span-2 text-white">
        <h3 className="text-slate-400 font-semibold mb-4 uppercase tracking-wider text-xs">Misi Operasional</h3>
        <ul className="space-y-4">
        <li className="flex items-center gap-3">
        <span className="text-green-400">✓</span>
        <span className="text-sm">Infrastruktur Digital Kokoh (Next.js & MySQL)</span>
        </li>
        <li className="flex items-center gap-3">
        <span className="text-green-400">✓</span>
        <span className="text-sm">Digitalisasi UMKM & Pendidikan Tepat Guna</span>
        </li>
        <li className="flex items-center gap-3">
        <span className="text-green-400">✓</span>
        <span className="text-sm">Sistem Informasi Amanah & Kualitas Tinggi</span>
        </li>
        </ul>
        </div>
        </div>

        <div className="mt-12 p-12 border-2 border-dashed border-slate-200 rounded-[2rem] text-center bg-slate-50/50">
        <p className="text-slate-400 font-medium">Modul CBT & POS sedang dipersiapkan untuk ekosistem digital Anda.</p>
        </div>
        </div>
    );
}
