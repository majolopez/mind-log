import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET: Obtener todos los pensamientos
export async function GET() {
  try {
    const thoughts = await prisma.thought.findMany();
    return NextResponse.json(thoughts, { status: 200 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: "Failed to fetch thoughts" }, { status: 500 });
  }
}

// POST: Agregar un nuevo pensamiento
export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.situation || !body.automatic_thought || !body.emotion || !body.alternative_thought) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const newThought = await prisma.thought.create({
      data: {
        situation: body.situation,
        automatic_thought: body.automatic_thought,
        emotion: body.emotion,
        alternative_thought: body.alternative_thought || "",
      },
    });

    return NextResponse.json(newThought, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save thought" }, { status: 500 });
  }
}
