import React from "react";
import CardWrapper from "./CardWrapper";
import { TriangleAlert } from "lucide-react";

type Props = {};

const ErrorCard = (props: Props) => {
  return (
    <CardWrapper
      headerLabel="Oops!, something went wrong!"
      backButtonLabel="Back to Login"
      backButtonHref="/auth/login">
      <div className="w-full flex items-center justify-center">
        <TriangleAlert className="text-destructive h-10 w-10" />
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
