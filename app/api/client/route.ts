import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: Request) {
    console.log('client')
    try {
        const clients = await prisma.client.findMany()
        return NextResponse.json(clients)

    } catch (error) {
        return new NextResponse("Something went wrong", { status: 500 })
    }
}
