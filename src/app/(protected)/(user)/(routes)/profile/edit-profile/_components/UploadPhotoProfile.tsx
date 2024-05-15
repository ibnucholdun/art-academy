"use client";

import { UploadButton } from "@/lib/uploadthing";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import toast from "react-hot-toast";
import { useRef } from "react";

interface FileUploadProps {
  onChange: (url?: string) => void;
  endpoint: keyof typeof ourFileRouter;
}

export const UploadPhotoProfile = ({ endpoint, onChange }: FileUploadProps) => {
  return (
    <UploadButton
      endpoint={endpoint}
      onClientUploadComplete={(res) => onChange(res?.[0].url)}
      onUploadError={(err) => toast.error(`${err.message}`)}
      className="mt-4 ut-button:bg-primary ut-button:ut-readying:bg-primary/50 ut-button:ut-uploading:bg-primary/50 ut-button:focus-within:ring-0  ut-button:after:bg-primary/90"
      content={{
        allowedContent({ ready, fileTypes, isUploading }) {
          if (!ready) return "Checking what you allow";
          if (isUploading) return "Uploading...";
          return `${fileTypes.join(", ")} max 4MB and rasio 1:1`;
        },
      }}
    />
  );
};
