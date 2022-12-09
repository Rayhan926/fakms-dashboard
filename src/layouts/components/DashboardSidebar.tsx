import {
  sidebarMenuItems,
  sidebarMenuItemsBottom,
} from "../../config/constants";

const DashboardSidebar = () => {
  return (
    <div className="h-full border-r border-slate-200 px-5 py-6 flex flex-col">
      {/** Logo --Start-- */}
      <div className="text-2xl font-medium">FAKMS</div>
      {/** Logo --End-- */}

      {/** Menu --Start-- */}
      <ul className="mt-8 space-y-1">
        {sidebarMenuItems.map(({ text, url }, i) => {
          return (
            <li key={i}>
              <a
                className="flex items-center gap-3 rounded-md px-4 py-2.5 hover:bg-slate-100 duration-200 font-medium"
                href={url}
              >
                <span>{text}</span>
              </a>
            </li>
          );
        })}
      </ul>
      {/** Menu --End-- */}

      {/** Menu Bottom --Start-- */}
      <ul className="mt-auto space-y-1">
        {sidebarMenuItemsBottom.map(({ text, url }, i) => {
          return (
            <li key={i}>
              <a
                className="flex items-center gap-3 rounded-md px-4 py-2.5 hover:bg-slate-100 duration-200 font-medium"
                href={url}
              >
                <span>{text}</span>
              </a>
            </li>
          );
        })}
      </ul>
      {/** Menu Bottom --End-- */}
    </div>
  );
};

export default DashboardSidebar;
