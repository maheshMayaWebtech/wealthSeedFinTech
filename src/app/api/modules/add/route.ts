import { NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
import Module from '@/models/Module';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const { title, description, content, category, categoryId } = await request.json();
    const newModule = await Module.create({ title, description, content, category, categoryId });
    return NextResponse.json({ success: true, data: newModule }, { status: 201 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: 'An unknown error occurred' }, { status: 400 });
  }
}
