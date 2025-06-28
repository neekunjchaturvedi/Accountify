import { Outlet } from "react-router-dom";
import { useState } from "react";
import SideBar from "./Sidebar";
import Header from "./Header";

function Layout() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="flex min-h-screen w-full dark:bg-gray-900">
      {/* Sidebar component - appears on left for desktop, slides in for mobile */}
      <SideBar open={openSidebar} setOpen={setOpenSidebar} />

      {/* Main content container */}
      <div className="flex flex-1 flex-col w-full">
        {/* Header - always at top */}
        <Header setOpen={setOpenSidebar} />

        {/* Main content area with responsive padding */}
        <main className="flex-1 flex-col flex bg-muted/40 bg-white p-2 sm:p-4 md:p-6 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
