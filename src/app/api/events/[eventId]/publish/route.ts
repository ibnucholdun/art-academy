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
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (
      !event.title ||
      !event.description ||
      !event.imageUrl ||
      !event.price ||
      !event.time ||
      !event.location
    ) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    const publishedEvent = await prisma.event.update({
      where: {
        id: params.eventId,
        userId: user?.id,
      },
      data: {
        isPublished: true,
      },
    });

    return NextResponse.json(publishedEvent);
  } catch (error) {
    console.log("[COURSES_ID_PUBLISH]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
