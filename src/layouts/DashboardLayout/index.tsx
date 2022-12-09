import DashboardHeader from "../components/DashboardHeader";
import DashboardSidebar from "../components/DashboardSidebar";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader />
      <div className="grow grid grid-cols-1 lg:grid-cols-[220px,auto]">
        <div className="hidden lg:block">
          <DashboardSidebar />
        </div>
        <div className="flex flex-col">
          <div className="px-5 lg:px-7 py-7 grow bg-gray-100">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
