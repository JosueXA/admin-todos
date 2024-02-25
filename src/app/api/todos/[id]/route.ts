import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'

interface Segments {
  params: {
    id: string;
  }
}

export async function GET(request: Request, { params }: Segments ) { 

  const { id } = params || '';

  const todo = await prisma.todo.findFirst({
    where: { id },
  });

  if ( !todo ) {
    return NextResponse.json({
      message: `Todo with id ${ id } not found`
    },{
      status: 404
    })
  }

  return NextResponse.json(todo);
  
}


export async function POST(request: Request) { 

  const body = await request.json();

  return NextResponse.json(body);

}