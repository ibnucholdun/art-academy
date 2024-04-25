import React from "react";
import { redirect } from "next/navigation";
import { CalendarRange } from "lucide-react";

import prisma from "@/lib/prisma";
import { currentUser } from "@/lib/auth";

import { IconBadge } from "@/components/IconBadge";
import EventTitleForm from "./_components/EventTitleForm";
import EventDescriptionForm from "./_components/EventDescriptionForm";

type Props = {
  params: {
    eventId: string;
  };
};

const EventIdPage: React.FC<Props> = async ({ params }) => {
  const user = await currentUser();

  if (!user?.id && user?.role !== "ADMIN") {
    return redirect("/");
  }
  const event = await prisma.event.findUnique({
    where: {
      id: params.eventId,
    },
  });

  if (!event) {
    return redirect("/");
  }

  const requiredFields = [
    event.title,
    event.description,
    event.imageUrl,
    event.price,
    event.time,
    event.location,
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl font-medium">Event Setup</h1>
          <span className="text-sm text-slate-700">
            Complete all fields {completionText}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        <div className="">
          <div className="flex items-center gap-x-2">
            <IconBadge icon={CalendarRange} />
            <h2 className="text-xl">Customize your event</h2>
          </div>
          <EventTitleForm initialData={event} eventId={event.id} />
          <EventDescriptionForm initialData={event} eventId={event.id} />
        </div>
      </div>
    </div>
  );
};

export default EventIdPage;
