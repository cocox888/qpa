import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';

export async function GET(req: Request) {
    try {
        const users = await prisma.user.findMany()
        return NextResponse.json(users)

    } catch (error) {
        return new NextResponse("Something went wrong", { status: 500 })
    }
}

export async function POST(req: Request) {
    const payload = await req.json();
    const hashedPassword = await bcrypt.hash(payload.password, 10);
    payload.password = hashedPassword;
    
    try {
        console.log(payload);
        const user = await prisma.user.create({
            data: payload
        });
        return NextResponse.json(user)
    } catch (error) {
        console.log(error);
        return new NextResponse("Something went wrong", { status: 500 })

    }
}
