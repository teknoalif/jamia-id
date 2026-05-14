import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  // Fungsi sederhana untuk mendapatkan estimasi tanggal Hijriah
  const getHijriDate = () => {
    return new Intl.DateTimeFormat('id-TN-u-ca-islamic-uma', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(new Date());
  };

  const projects = [
    "kakalif.my.id", "lacrosta.id", "rumaatun.my.id",
    "riyadhusshalihin.kakalif.my.id", "levelupresto.com",
    "kafe.kakalif.my.id", "malldagang.kakalif.my.id", "cbt.kakalif.my.id"
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
    {/* Hero Section */}
    <section className="relative py-20 px-6 bg-gradient-to-b from-slate-50 to-white text-center">
    <div className="max-w-4xl mx-auto">
    <div className="mb-4 text-sm font-medium text-slate-400">{getHijriDate()}</div>
    <div className="flex justify-center mb-8">
    <Image src="/logo.png" alt="Logo Jamia" width={200} height={80} priority className="h-auto w-auto" />
    </div>
    <p className="text-2xl text-slate-600 italic mb-10 font-light italic">
    "Menyambung Potensi, Membangun Ekosistem Digital"
    </p>
    <div className="flex flex-wrap justify-center gap-4">
    <Link href="/dashboard" className="bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition">
    Buka Dashboard
    </Link>
    <Link href="https://alif.jamia.id" className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition">
    Founder
    </Link>
    </div>
    </div>
    </section>

    {/* Identitas Brand Section */}
    <section className="max-w-5xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 border-t">
    <div>
    <h2 className="text-2xl font-bold mb-6 border-l-4 border-slate-900 pl-4">Visi & Misi</h2>
    <div className="space-y-6">
    <div>
    <h3 className="font-bold text-indigo-600 uppercase text-xs tracking-widest mb-2">Visi</h3>
    <p className="text-slate-600">Menjadi sentra pengembangan solusi digital yang inklusif dan transformatif bagi pendidikan hingga UMKM.</p>
    </div>
    <div>
    <h3 className="font-bold text-indigo-600 uppercase text-xs tracking-widest mb-2">Misi</h3>
    <ul className="text-sm text-slate-600 space-y-2">
    <li>1. Menyediakan infrastruktur digital kokoh dan aman.</li>
    <li>2. Mendukung digitalisasi tepat guna bagi UMKM.</li>
    <li>3. Membangun sistem informasi yang jujur dan amanah.</li>
    </ul>
    </div>
    </div>
    </div>
    <div>
    <h2 className="text-2xl font-bold mb-6 border-l-4 border-slate-900 pl-4">Tujuan</h2>
    <p className="text-slate-600 leading-relaxed">
    Membantu klien memiliki aset digital profesional yang memberikan nilai tambah nyata bagi pertumbuhan bisnis maupun kemudahan belajar.
    </p>
    </div>
    </section>

    {/* Portfolio/Developed Websites */}
    <section className="bg-slate-50 py-20 px-6">
    <div className="max-w-5xl mx-auto">
    <h2 className="text-center text-3xl font-bold mb-12">Ekosistem yang Telah Dikembangkan</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {projects.map((domain, index) => (
      <div key={index} className="bg-white p-4 rounded-2xl border border-slate-200 text-center hover:shadow-md transition">
      <span className="text-xs text-slate-400 block mb-1">Project #{index}</span>
      <span className="text-sm font-semibold text-slate-700">{domain}</span>
      </div>
    ))}
    </div>
    </div>
    </section>

    <footer className="py-12 text-center text-slate-400 text-sm border-t">
    <p>&copy; 2026 Jamia.id - Crafted by Alif Rezky</p>
    </footer>
    </main>
  );
}
