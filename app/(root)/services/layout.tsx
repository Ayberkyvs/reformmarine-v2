import type { ReactNode } from "react";
import ServiceLayoutComponent from "../../../components/ServiceLayoutComponent";

const ServiceLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="min-h-screen">
      <ServiceLayoutComponent>{children}</ServiceLayoutComponent>
    </div>
  );
};

export default ServiceLayout;
