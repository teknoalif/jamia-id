// src/app/(dashboard)/page.tsx
export default function DashboardPage() {
    return (
        <div>
        <header className="mb-8">
        <h1 className="text-2xl font-bold text-slate-800">Selamat Datang di Jamia</h1>
        <p className="text-slate-500 italic">"Menyambung Potensi, Membangun Ekosistem Digital."</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Visi Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h3 className="text-indigo-600 font-bold mb-2">Visi</h3>
        <p className="text-sm text-slate-600">Menjadi sentra pengembangan solusi digital yang inklusif dan transformatif.</p>
        </div>

        {/* Status Sistem (Placeholder) */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 col-span-2">
        <h3 className="text-slate-800 font-bold mb-4">Misi Operasional</h3>
        <ul className="text-sm text-slate-600 space-y-2">
        <li>✅ Infrastruktur digital kokoh (Next.js/MySQL)</li>
        <li>🚀 Dukungan Digitalisasi UMKM</li>
        <li>🛡️ Sistem Amanah & Berkualitas Tinggi</li>
        </ul>
        </div>
        </div>

        <div className="mt-10 p-8 border-2 border-dashed border-slate-300 rounded-2xl text-center">
        <p className="text-slate-400">Pilih salah satu layanan di sidebar untuk mulai mengelola aset digital Anda.</p>
        </div>
        </div>
    );
}
