"use client";

import { BeatLoader } from "react-spinners";
import CardWrapper from "./card-wrapper";

type Props = {};

const VerificationForm = (props: Props) => {
  return (
    <CardWrapper
      headerLabel="Confirming your verification"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="w-full flex items-center justify-center">
        <BeatLoader />
      </div>
    </CardWrapper>
  );
};

export default VerificationForm;
