import { Card, CardFooter, CardHeader } from "../ui/card";
import BackButton from "./back-button";
import Header from "./header";

const ErrorCard = () => {
  return (
    <Card className="w-[400px] shadow-sm">
      <CardHeader>
        <Header label="Oops! Semthing went wrong!" />
      </CardHeader>
      <CardFooter>
        <BackButton label="Back to login" href="/auth/login" />
      </CardFooter>
    </Card>
  );
};

export default ErrorCard;
