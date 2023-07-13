import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request) {
  const body = await request.json();
  const { name, email, password } = body.data;
  console.log(body.data);

  if (!name || !email || !password) {
    return new NextResponse('Missing name, email, or password', {
      status: 400,
    });
  }
  const exist = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (exist) {
    return new NextResponse('User Already exist', { status: 400 });
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashPassword,
    },
  });

  return NextResponse.json(user);
}
