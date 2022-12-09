import DashboardSidebar from "../../layouts/components/DashboardSidebar";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

const MobileSidebar = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  const overlayClickHandler = (e: any) => {
    if (e.target.id === "mobileMenuOverlay") {
      setIsOpenMobileMenu(false);
    }
  };
  return (
    <div className="lg:hidden">
      <button
        className="w-9 h-9 shrink-0 rounded-full bg-slate-100 flex justify-center items-center"
        onClick={() => setIsOpenMobileMenu(true)}
      >
        <FiMenu size={19} />
      </button>

      <div
        onClick={overlayClickHandler}
        id="mobileMenuOverlay"
        className={`fixed top-0 left-0 w-full h-screen bg-black/50 z-[9999999] duration-100 ${
          isOpenMobileMenu
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none delay-[250ms]"
        }`}
      >
        <div
          className={`w-[75%] bg-white h-full duration-300 ${
            isOpenMobileMenu ? "translate-x-0 delay-200" : "-translate-x-full"
          }`}
        >
          <DashboardSidebar />
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
