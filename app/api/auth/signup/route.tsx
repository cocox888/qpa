import { NextResponse } from 'next/server';
import { genSalt, hash } from 'bcrypt';
import prisma from '@/lib/prisma';

export async function Post(req: Request) {
    try {
        const payload = await req.json();

        const isUserExisting = await prisma.client.findFirst({ where: { email: payload.email } })
        if (isUserExisting) return new NextResponse("User Already Exists...!", { status: 422 })

        const salt = await genSalt(10)
        const hashed = await hash(payload.password, salt)

        payload.password = hashed;

        await prisma.client.create({
            data: payload
        })

        return NextResponse.json({ message: "User created successful" })

    } catch (error) {
        return new NextResponse("Something went wrong", { status: 500 })
    }
}