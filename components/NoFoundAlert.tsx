import { Frown } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

const NoFoundAlert = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Alert className="border-red-100 bg-red-50">
      <Frown className="size-5" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
};

export default NoFoundAlert;
