import getChapter from "@/actions/getChapter";
import { redirect } from "next/navigation";
import React from "react";
import VideoPlayer from "./_components/VideoPlayer";
import Banner from "@/components/ui/banner";
import { currentUser } from "@/lib/auth";

type Props = {
  params: {
    courseId: string;
    chapterId: string;
  };
};

const ChapterIdPage: React.FC<Props> = async ({ params }) => {
  const user = await currentUser();

  if (!user?.id && user?.role !== "USER") return redirect("/");

  const {
    chapter,
    course,
    muxData,
    attachments,
    nextChapter,
    userProgress,
    purchase,
  } = await getChapter({
    userId: user?.id!,
    courseId: params.courseId,
    chapterId: params.chapterId,
  });

  if (!chapter || !course) return redirect("/");

  const isLocked = !chapter.isFree && !purchase;
  const completedOnEnd = !!purchase && !userProgress?.isCompleted;

  return (
    <div>
      {userProgress?.isCompleted && (
        <Banner variant="success" label="You already completed this chapter." />
      )}
      {isLocked && (
        <Banner
          variant="warning"
          label="You need to purchase this course to watch this chapter."
        />
      )}
      <div className="flex flex-col max-w-4xl mx-auto pb-20">
        <div className="p-4 ">
          <VideoPlayer isLocked={isLocked} />
        </div>
      </div>
    </div>
  );
};

export default ChapterIdPage;
