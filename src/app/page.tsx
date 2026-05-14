import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo Jamia */}
          <div className="flex justify-center mb-6">
            <Image 
              src="/logo.png" 
              alt="Logo Jamia" 
              width={180} 
              height={60} 
              priority
              className="h-auto w-auto"
            />
          </div>
          
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
      {/* ... bagian filosofi tetap sama ... */}
    </main>
  );
}
