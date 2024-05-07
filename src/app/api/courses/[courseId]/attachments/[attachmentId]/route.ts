import { currentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { UTApi } from "uploadthing/server";

export async function DELETE(
  req: Request,
  { params }: { params: { courseId: string; attachmentId: string } }
) {
  try {
    const utapi = new UTApi();
    const user = await currentUser();

    if (!user?.id && user?.role !== "ADMIN") {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const courseOwner = await prisma.course.findUnique({
      where: {
        id: params.courseId,
        userId: user?.id,
      },
    });

    if (!courseOwner) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const attachmentFile = await prisma.attachment.findUnique({
      where: {
        id: params.attachmentId,
      },
    });

    if (!attachmentFile) {
      return new NextResponse("Not Found", { status: 404 });
    }

    await utapi.deleteFiles(attachmentFile?.name!);

    const attachment = await prisma.attachment.delete({
      where: {
        id: params.attachmentId,
        courseId: params.courseId,
      },
    });

    return NextResponse.json(attachment);
  } catch (error) {
    console.log("[COURSE_ID_ATTACHMENT_ID]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
