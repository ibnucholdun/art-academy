import { currentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const user = await currentUser();
    const { title } = await req.json();

    if (!user?.id && user?.role !== "ADMIN") {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const event = await prisma.event.create({
      data: {
        userId: user?.id!,
        title,
      },
    });

    return NextResponse.json(event);
  } catch (error) {
    console.log("[COURSES]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
