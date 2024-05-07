import { currentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const user = await currentUser();
    if (!user?.id && user?.role !== "ADMIN") {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await prisma.course.findUnique({
      where: {
        id: params.courseId,
        userId: user?.id,
      },
    });
    if (!course) {
      return new NextResponse("Not Found", { status: 404 });
    }

    const unpublishedCourse = await prisma.course.update({
      where: {
        id: params.courseId,
        userId: user?.id,
      },
      data: {
        isPublished: false,
      },
    });

    return NextResponse.json(unpublishedCourse);
  } catch (error) {
    console.log("[COURSES_ID_UNPUBLISH]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
