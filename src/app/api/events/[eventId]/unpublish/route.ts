import { currentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { eventId: string } }
) {
  try {
    const user = await currentUser();
    if (!user?.id && user?.role !== "ADMIN") {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const event = await prisma.event.findUnique({
      where: {
        id: params.eventId,
        userId: user?.id,
      },
    });
    if (!event) {
      return new NextResponse("Not Found", { status: 404 });
    }

    const unpublishedEvent = await prisma.event.update({
      where: {
        id: params.eventId,
        userId: user?.id,
      },
      data: {
        isPublished: false,
      },
    });

    return NextResponse.json(unpublishedEvent);
  } catch (error) {
    console.log("[EVENT_ID_UNPUBLISH]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
