// src/app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'JAMIA - Menyeluruh & Terintegrasi',
    description: 'Solusi Digital Terintegrasi untuk Masa Depan Bisnis & Pendidikan.',
    // Tambahkan baris icons di bawah ini
    icons: {
        icon: '/logo.png', // Mengarah ke public/logo.png
        shortcut: '/logo.png',
        apple: '/logo.png',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="id">
        <body className={inter.className}>{children}</body>
        </html>
    );
}
