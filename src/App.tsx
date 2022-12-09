import DashboardLayout from "../src/layouts/DashboardLayout";
import { cx, tabs } from "./config/constants";
import Search from "./components/MasterData/Search";
import SelectOption from "./components/MasterData/SelectOption";
import AddNewRow from "./components/MasterData/AddNewRow";
import Table from "./components/MasterData/Table";
import EditRowModal from "./components/MasterData/EditRowModal";

const App = () => {
  return (
    <DashboardLayout>
      <div className="md:m-10 md:w-fit">
        <h1 className="text-3xl font-semibold">Adminstration</h1>

        <ul className="mt-5 flex gap-4 md:-translate-x-4 overflow-x-auto">
          {tabs.map(({ title, isActive }, i) => (
            <li
              key={i}
              className={cx(
                "px-4 py-1.5 rounded-md cursor-pointer whitespace-nowrap",
                isActive && "bg-primary text-white",
              )}
            >
              {title}
            </li>
          ))}
        </ul>

        <h2 className="mt-7 text-xl font-medium">Master Data category</h2>

        {/** Master Data Search And Select Option --Start-- */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SelectOption />
          <Search />
        </div>
        {/** Master Data Search And Select Option --End-- */}

        <Table />

        <AddNewRow />
        <EditRowModal />
      </div>
    </DashboardLayout>
  );
};

export default App;
