import { Frown } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const NotFoundAlert = ({
  title,
  description,
  className,
  icon,
}: {
  title: string;
  description?: string;
  className?: string;
  icon?: ReactNode;
}) => {
  return (
    <Alert className={cn("border-red-100 bg-red-50", className)}>
      {icon ? icon : <Frown className="size-5" />}
      <AlertTitle>{title}</AlertTitle>
      {description && <AlertDescription>{description}</AlertDescription>}
    </Alert>
  );
};

export default NotFoundAlert;
