import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

type paramsType = { params: { id: number } }

export async function GET(req: Request, { params }: paramsType) {
    const { id } = await params;

    try {
        const users = await prisma.project.findFirst({
            where: { id:Number(id) },
            include: {
                users: {
                    select: {
                        id: true,
                        full_name: true,
                        position: true
                    }
                }
            }
        })

        return NextResponse.json(users)

    } catch (error) {
        return new NextResponse("Something went wrong", { status: 500 })
    }
}