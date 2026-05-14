import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.nextUrl;
    const hostname = request.headers.get('host') || '';

    // Deteksi subdomain alif
    const isAlifSubdomain = hostname.startsWith('alif.jamia.id');

    if (isAlifSubdomain) {
        // Redirect permanen (301) atau sementara (307) ke portofolio kamu
        return NextResponse.redirect(new URL('https://kakalif.my.id/portofolio', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|logo.png|images).*)',
    ],
};
