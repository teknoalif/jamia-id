// src/app/(dashboard)/layout.tsx
import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-slate-100">
        {/* Sidebar */}
        <aside className="w-64 bg-slate-900 text-slate-300 p-6">
        <div className="mb-10">
        <h2 className="text-2xl font-bold text-white tracking-widest">JAMIA</h2>
        <p className="text-[10px] uppercase tracking-tighter text-slate-500">Integrated Digital Solution</p>
        </div>

        <nav className="space-y-4">
        <p className="text-xs font-semibold text-slate-500 uppercase">Menu Utama</p>
        <Link href="/dashboard" className="block p-2 hover:bg-slate-800 rounded transition">Beranda</Link>

        <p className="text-xs font-semibold text-slate-500 uppercase mt-6">Layanan</p>
        <Link href="/dashboard/edu" className="block p-2 hover:bg-slate-800 rounded transition">Jamia Edu (CBT/LMS)</Link>
        <Link href="/dashboard/commerce" className="block p-2 hover:bg-slate-800 rounded transition">Jamia Commerce (POS)</Link>
        <Link href="/dashboard/web" className="block p-2 hover:bg-slate-800 rounded transition">Custom Web</Link>
        </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-y-auto">
        {children}
        </main>
        </div>
    );
}
