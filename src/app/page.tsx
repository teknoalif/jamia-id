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

  const pillars = [
    {
      domain: "teknologi.jamia.id",
      title: "Teknologi & Solusi Digital",
      description: "Pengembangan sistem web modern, aplikasi digital, dan infrastruktur IT terintegrasi.",
      badge: "Infrastruktur & Software"
    },
    {
      domain: "rumaatun.jamia.id",
      title: "Pendidikan & Rumaatun",
      description: "Ekosistem pembelajaran terpadu untuk matematika, literasi, dan pengembangan keilmuan.",
      badge: "Edukasi & Pembelajaran"
    },
    {
      domain: "wedding.jamia.id",
      title: "Layanan Digital & Wedding",
      description: "Solusi platform dan undangan digital profesional yang elegan serta interaktif.",
      badge: "Kreatif & Layanan"
    }
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
          <p className="text-2xl text-slate-600 italic mb-10 font-light">
            "Menyambung Potensi, Membangun Ekosistem Digital"
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="https://kakalif.my.id" target="_blank" rel="noopener noreferrer" className="bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition">
              Dikembangkan oleh Kak Alif
            </Link>
            <Link href="https://kakalif.my.id/#portofolio" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition">
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
              <p className="text-slate-600">Menjadi sentra pengembangan solusi digital yang inklusif dan transformatif melalui tiga pilar utama.</p>
            </div>
            <div>
              <h3 className="font-bold text-indigo-600 uppercase text-xs tracking-widest mb-2">Misi</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>1. Menyediakan infrastruktur teknologi digital yang kokoh dan aman.</li>
                <li>2. Memajukan ekosistem pendidikan dan keilmuan yang berkelanjutan.</li>
                <li>3. Menghadirkan layanan digital kreatif dan profesional yang amanah.</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-slate-900 pl-4">Tujuan</h2>
          <p className="text-slate-600 leading-relaxed">
            Menghadirkan pilar-pilar ekosistem digital terpadu yang memberikan nilai tambah nyata bagi pertumbuhan teknologi, kemudahan belajar, hingga layanan digital berkualitas.
          </p>
        </div>
      </section>

      {/* 3 Pilar Utama Ekosistem Jamia */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">3 Pilar Utama Ekosistem</h2>
            <p className="text-slate-600 text-sm">Seluruh lini dikembangkan secara profesional oleh <span className="font-semibold text-slate-900">kakalif.my.id</span></p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200 flex flex-col justify-between hover:shadow-md transition">
                <div>
                  <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    {pillar.badge}
                  </span>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{pillar.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">{pillar.description}</p>
                </div>
                <Link 
                  href={`https://${pillar.domain}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                >
                  {pillar.domain} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-400 text-sm border-t">
        <p>&copy; 2026 Jamia.id - Developed by kakalif.my.id</p>
      </footer>
    </main>
  );
}
