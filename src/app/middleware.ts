import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.nextUrl;
    const hostname = request.headers.get('host') || '';

    // 1. Definisikan domain utama dan subdomain kamu
    const currentHost = hostname.replace(`.jamia.id`, '');

    // 2. Jika hostnya adalah 'alif', arahkan secara internal ke folder /alif
    if (currentHost === 'alif') {
        return NextResponse.rewrite(new URL(`/alif${url.pathname}`, request.url));
    }

    // 3. Jika bukan subdomain, biarkan berjalan normal ke root atau /dashboard
    return NextResponse.next();
}

// Tentukan jalur mana saja yang harus melewati middleware ini
export const config = {
    matcher: [
        /*
         * Match semua request kecuali:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - logo.png (logo jamia)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|logo.png|images).*)',
    ],
};
