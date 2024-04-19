"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { newVerification } from "@/actions/newVerification";

import CardWrapper from "./CardWrapper";
import { Spinner } from "../ui/spinner";
import FormSuccess from "../FormSuccess";
import FormError from "../FormError";

type Props = {};

const NewVerificationForm = (props: Props) => {
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (success || error) return;
    if (!token) {
      setError("Missing Token!");
      return;
    }

    newVerification(token)
      .then((data) => {
        if (data.error) {
          setError(data.error);
          return;
        }
        if (data.success) {
          setSuccess(data.success);
          return;
        }
      })
      .catch((err) => {
        setError("Something went wrong. Please try again later.");
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Confirming your verification"
      backButtonLabel="Back to Login"
      backButtonHref="/auth/login">
      <div className="flex items-center w-full justify-center">
        {!success && !error && (
          <Spinner className="text-[#6f3823]" size="large" />
        )}
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  );
};

export default NewVerificationForm;
