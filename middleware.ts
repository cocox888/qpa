import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXTAUTH_SECRET

export async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret })

    console.log(token)
    if (!token) {
        return NextResponse.redirect(new URL("/user/login", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"],
}