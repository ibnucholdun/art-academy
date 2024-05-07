import { currentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { eventId: string } }
) {
  try {
    const user = await currentUser();
    const { eventId } = params;
    const values = await req.json();

    if (!user?.id && user?.role !== "ADMIN") {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const event = await prisma.event.update({
      where: {
        id: eventId,
        userId: user?.id,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(event);
  } catch (error) {
    console.log("[EVENT_ID]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { eventId: string } }
) {
  try {
    const user = await currentUser();
    const { eventId } = params;

    if (!user?.id && user?.role !== "ADMIN") {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const event = await prisma.event.findUnique({
      where: {
        id: eventId,
        userId: user?.id,
      },
    });

    if (!event) {
      return new NextResponse("Not Found", { status: 404 });
    }

    const deletedEvent = await prisma.event.delete({
      where: {
        id: eventId,
      },
    });

    return NextResponse.json(deletedEvent);
  } catch (error) {
    console.log("[EVENT_ID_DELETE]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
