import MobileSidebar from "../../components/MobileSidebar";

const DashboardHeader = () => {
  return (
    <div className="shrink-0 flex justify-between items-center py-4 px-5 lg:px-7 border-b border-slate-200">
      <h1 className="text-lg md:text-base uppercase">Dena</h1>

      <div className="flex gap-4 items-center">
        <MobileSidebar />
      </div>
    </div>
  );
};

export default DashboardHeader;
