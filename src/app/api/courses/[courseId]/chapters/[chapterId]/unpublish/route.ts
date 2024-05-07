import { currentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string; chapterId: string } }
) {
  try {
    const user = await currentUser();
    if (!user?.id && user?.role !== "ADMIN") {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const ownCourse = await prisma.course.findUnique({
      where: {
        id: params.courseId,
        userId: user?.id,
      },
    });
    if (!ownCourse) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const unpublishedChapter = await prisma.chapter.update({
      where: {
        id: params.chapterId,
        courseId: params.courseId,
      },
      data: {
        isPublished: false,
      },
    });

    const publisedChapterInCourse = await prisma.chapter.findMany({
      where: {
        courseId: params.courseId,
        isPublished: true,
      },
    });

    if (!publisedChapterInCourse.length) {
      await prisma.course.update({
        where: {
          id: params.courseId,
        },
        data: {
          isPublished: false,
        },
      });
    }

    return NextResponse.json(unpublishedChapter);
  } catch (error) {
    console.log("[COURSES_ID_PUBLISH]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
