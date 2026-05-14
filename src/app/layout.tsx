import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'JAMIA - Menyeluruh & Terintegrasi',
    description: 'Solusi Digital Terintegrasi untuk Masa Depan Bisnis & Pendidikan.',
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
