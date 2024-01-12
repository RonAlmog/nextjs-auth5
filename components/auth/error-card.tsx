import { FaExclamationTriangle } from "react-icons/fa";
import CardWrapper from "./card-wrapper";

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Semthing went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="w-full flex justify-center items-center">
        <FaExclamationTriangle className="text-destructive w-12 h-12" />
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
