"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import MuxPlayer from "@mux/mux-player-react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Loader2, Lock } from "lucide-react";

import { cn } from "@/lib/utils";
import { useConfettiStore } from "@/hooks/useConfettiStore";

type Props = {
  isLocked: boolean;
};

const VideoPlayer: React.FC<Props> = ({ isLocked }) => {
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsReady(true);
  }, [router.refresh]);

  return (
    <div className="relative aspect-video">
      {!isReady && !isLocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
          <Loader2 className="w-8 h-8 animate-spin text-secondary" />
        </div>
      )}
      {isLocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800 flex-col gap-y-2 text-secondary">
          <Lock className="w-8 h-8" />
          <p className="text-sm">
            This chapter is locked. Purchase it to unlock it.
          </p>
        </div>
      )}
      {!isLocked && (
        <video
          className={cn(!isReady && "hidden", "h-full w-full")}
          onCanPlay={() => setIsReady(true)}
          onEnded={() => {}}
          autoPlay
          controls>
          <source
            src="https://utfs.io/f/e28868b3-5cae-405e-8f64-d8213719681d-okd1wl.webm"
            type="video/mp4"
          />
        </video>
      )}
    </div>
  );
};

export default VideoPlayer;
