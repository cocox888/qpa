import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';


export async function POST(req: Request) {
    const payload = await req.json();
    const { data, members } = payload;

    try {
        console.log(payload);
        const project = await prisma.task.create({
            data: {
                ...data,
                users: {
                    connect: members.map((id: any) => ({ id })),
                }
            }
        });

        return NextResponse.json(project)
    } catch (error) {
        console.log(error);
        return new NextResponse("Something went wrong", { status: 500 })

    }
}