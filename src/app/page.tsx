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
      badge: "Infrastruktur & Software",
      action: "Kunjungi Teknologi"
    },
    {
      domain: "rumaatun.jamia.id",
      title: "Pendidikan & Rumaatun",
      description: "Ekosistem pembelajaran terpadu untuk matematika, literasi, dan pengembangan keilmuan.",
      badge: "Edukasi & Pembelajaran",
      action: "Kunjungi Rumaatun"
    },
    {
      domain: "wedding.jamia.id",
      title: "Layanan Digital & Wedding",
      description: "Solusi platform dan undangan digital profesional yang elegan serta interaktif.",
      badge: "Kreatif & Layanan",
      action: "Kunjungi Wedding"
    }
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-500 selection:text-white">
      {/* Top Announcement Bar */}
      <div className="bg-indigo-600 text-white text-xs sm:text-sm font-medium py-2 px-4 text-center">
        ✨ Selamat datang di Ekosistem Jamia.id — <span className="underline">Menyambung Potensi, Membangun Ekosistem Digital</span>
      </div>

      {/* Navbar */}
      <nav className="border-b border-slate-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo Jamia" width={120} height={45} priority className="h-auto w-auto max-h-10" />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#beranda" className="hover:text-indigo-600 transition">Beranda</a>
            <a href="#tentang" className="hover:text-indigo-600 transition">Visi & Misi</a>
            <a href="#pilar" className="hover:text-indigo-600 transition">3 Pilar Utama</a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="https://kakalif.my.id/#portofolio" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-indigo-700 transition shadow-sm shadow-indigo-600/20">
              Founder
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section (Gaya WPU Course Style) */}
      <section id="beranda" className="relative py-16 lg:py-24 px-6 overflow-hidden bg-gradient-to-b from-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Kolom Kiri: Teks & CTA */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200/60 text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
              {getHijriDate()}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Menyambung Potensi, <br />
              <span className="text-indigo-600">Membangun Ekosistem Digital</span>
            </h1>

            <p className="text-lg text-slate-600 max-w-xl leading-relaxed font-light italic">
              "Sentra pengembangan solusi digital yang inklusif dan transformatif bagi pendidikan, teknologi, hingga layanan kreatif."
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#pilar" className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition shadow-lg shadow-indigo-600/20 text-center">
                Jelajahi 3 Pilar
              </a>
              <Link href="https://kakalif.my.id" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition text-center">
                Dikembangkan oleh Kak Alif
              </Link>
            </div>

            {/* Statistik Singkat */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-200/80">
              <div>
                <div className="text-2xl font-bold text-slate-900">3 Pilar</div>
                <div className="text-xs text-slate-500 mt-0.5">Ekosistem Utama</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">Profesional</div>
                <div className="text-xs text-slate-500 mt-0.5">& Amanah</div>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Visual Card / Code Preview ala WPU */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none flex justify-center">
              
              <div className="bg-slate-900 rounded-3xl shadow-2xl p-8 text-slate-200 font-mono text-xs sm:text-sm border border-slate-800 w-full">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <span className="text-slate-500 text-xs">jamia.ecosystem.js</span>
                </div>
                <p className="text-indigo-400">// Jamia.id Digital Ecosystem</p>
                <p className="text-purple-400 mt-2">const <span className="text-blue-400">jamiaEcosystem</span> = &#123;</p>
                <div className="pl-4 space-y-1 mt-1 text-slate-300">
                  <p>pilar1: <span className="text-amber-300">'teknologi.jamia.id'</span>,</p>
                  <p>pilar2: <span className="text-amber-300">'rumaatun.jamia.id'</span>,</p>
                  <p>pilar3: <span className="text-amber-300">'wedding.jamia.id'</span>,</p>
                  <p>developer: <span className="text-amber-300">'kakalif.my.id'</span></p>
                </div>
                <p className="text-purple-400 mt-1">&#125;;</p>
                <p className="text-slate-400 mt-3">/* Transformasi digital inklusif & solutif */</p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Identitas Brand Section (Visi, Misi, Tujuan) */}
      <section id="tentang" className="max-w-5xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 border-t border-slate-100">
        <div>
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-indigo-600 pl-4 text-slate-900">Visi & Misi</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-indigo-600 uppercase text-xs tracking-widest mb-2">Visi</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Menjadi sentra pengembangan solusi digital yang inklusif dan transformatif melalui tiga pilar utama.</p>
            </div>
            <div>
              <h3 className="font-bold text-indigo-600 uppercase text-xs tracking-widest mb-2">Misi</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li className="flex items-start gap-2"><span className="text-indigo-600 font-bold">1.</span> Menyediakan infrastruktur teknologi digital yang kokoh dan aman.</li>
                <li className="flex items-start gap-2"><span className="text-indigo-600 font-bold">2.</span> Memajukan ekosistem pendidikan dan keilmuan yang berkelanjutan.</li>
                <li className="flex items-start gap-2"><span className="text-indigo-600 font-bold">3.</span> Menghadirkan layanan digital kreatif dan profesional yang amanah.</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-indigo-600 pl-4 text-slate-900">Tujuan</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Menghadirkan pilar-pilar ekosistem digital terpadu yang memberikan nilai tambah nyata bagi pertumbuhan teknologi, kemudahan belajar, hingga layanan digital berkualitas bagi masyarakat luas.
          </p>
        </div>
      </section>

      {/* 3 Pilar Utama Ekosistem */}
      <section id="pilar" className="bg-slate-50/60 py-20 px-6 border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-3">3 Pilar Utama Ekosistem</h2>
            <p className="text-slate-600 text-sm">Seluruh lini dikembangkan secara profesional oleh <span className="font-semibold text-slate-900">kakalif.my.id</span></p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition flex flex-col justify-between">
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
                  className="w-full bg-slate-900 text-white hover:bg-indigo-600 text-sm font-semibold py-3 rounded-xl text-center transition block"
                >
                  {pillar.action} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-slate-100 text-center text-slate-400 text-sm">
        <div className="max-w-5xl mx-auto px-6 space-y-2">
          <p>&copy; 2026 Jamia.id - Developed by <a href="https://kakalif.my.id" target="_blank" rel="noopener noreferrer" className="text-slate-700 font-medium underline">kakalif.my.id</a></p>
          <p className="text-xs text-slate-400">Menyambung Potensi, Membangun Ekosistem Digital</p>
        </div>
      </footer>
    </main>
  );
}
