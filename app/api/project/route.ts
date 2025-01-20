
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';


export async function POST(req: Request) {
    const payload = await req.json();
    const { data, users } = payload;

    try {
        console.log(payload);
        const project = await prisma.project.create({
            data: {
                ...data,
                users: {
                    connect: users.map((id: any) => ({ id })),
                }
            }
        });

        return NextResponse.json(project)
    } catch (error) {
        console.log(error);
        return new NextResponse("Something went wrong", { status: 500 })

    }
}

export async function GET(req: Request) {
    console.log("project get")
    try {
        const project = await prisma.project.findMany();
        console.log(project)
        return NextResponse.json(project)
    } catch (error) {
        console.log(error);
        return new NextResponse("Something went wrong", { status: 500 })
    }
}