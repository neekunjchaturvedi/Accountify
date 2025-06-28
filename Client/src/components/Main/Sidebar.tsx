import { Fragment } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Sheet, SheetContent } from "@/components/ui/sheet"; // adjust import path as needed
import "@fortawesome/fontawesome-free/css/all.min.css";

interface MenuItem {
  id: number;
  name: string;
  icon: string;
  path: string;
}

const sidebarMenuItems: MenuItem[] = [
  { id: 1, name: "Dashboard", icon: "fas fa-home", path: "/page/dashboard" },
  { id: 2, name: "Journals", icon: "fas fa-book", path: "/page/journals" },
  { id: 3, name: "Ledger", icon: "fas fa-book-open", path: "/page/ledger" },
  {
    id: 4,
    name: "Final Accounts",
    icon: "fas fa-file-invoice",
    path: "/page/final-accounts",
  },
  { id: 5, name: "Reports", icon: "fas fa-chart-line", path: "/page/reports" },
  { id: 6, name: "Profile", icon: "fas fa-user", path: "/page/profile" },
  { id: 7, name: "Logout", icon: "fas fa-sign-out-alt", path: "/logout" },
];

interface MenuItemsProps {
  setOpen?: (open: boolean) => void;
}

function MenuItems({ setOpen }: MenuItemsProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuItemClick = (menuItem: MenuItem) => {
    navigate(menuItem.path);
    if (setOpen) setOpen(false);
  };

  return (
    <nav className="flex flex-col gap-4 p-4 w-full h-full">
      <h1 className="font-bold text-xl text-center mb-6">Accountify</h1>

      <div className="flex flex-col gap-2">
        {sidebarMenuItems.map((menuItem) => {
          const isActive = location.pathname === menuItem.path;

          return (
            <button
              key={menuItem.id}
              onClick={() => handleMenuItemClick(menuItem)}
              className={`flex items-center gap-3 px-4 py-2 rounded-md transition-colors text-left
                ${
                  isActive
                    ? "bg-red-100 text-red-600 font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }
              `}
            >
              <i
                className={`${menuItem.icon} ${
                  isActive ? "text-red-600" : "text-gray-600"
                }`}
              />
              <span>{menuItem.name}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

interface SideBarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function SideBar({ open, setOpen }: SideBarProps) {
  return (
    <Fragment>
      {/* Mobile sidebar */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-56 p-0 overflow-y-auto">
          <MenuItems setOpen={setOpen} />
        </SheetContent>
      </Sheet>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-full w-64 flex-col border-r bg-white shadow z-40">
        <MenuItems />
      </aside>

      {/* Spacer div */}
      <div className="hidden lg:block w-64 flex-shrink-0"></div>
    </Fragment>
  );
}
