"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const ModalDetailUser: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  return (
    <Dialog open={true} onOpenChange={() => router.back()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-center">
            ✏️ Edit User
          </DialogTitle>
          <DialogDescription>{children}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModalDetailUser;
