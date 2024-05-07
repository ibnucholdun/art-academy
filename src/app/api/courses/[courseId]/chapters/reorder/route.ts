import { currentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
export async function PUT(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const user = await currentUser();
    const { list } = await req.json();

    if (!user?.id && user?.role !== "ADMIN") {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const ownerCourse = await prisma.course.findUnique({
      where: {
        id: params.courseId,
        userId: user?.id,
      },
    });

    if (!ownerCourse) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    for (let item of list) {
      await prisma.chapter.update({
        where: { id: item.id },
        data: { position: item.position },
      });
    }

    return NextResponse.json("Success", { status: 200 });
  } catch (error) {
    console.log("[CHAPTERS_REORDER]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
