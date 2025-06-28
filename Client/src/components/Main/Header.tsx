import { AlignJustify } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

interface HeaderProps {
  setOpen: (open: boolean) => void;
}

const menuItems = [
  { path: "/page/dashboard", name: "Dashboard" },
  { path: "/page/journals", name: "Journals" },
  { path: "/page/ledger", name: "Ledger" },
  { path: "/page/final-accounts", name: "Final Accounts" },
  { path: "/page/reports", name: "Reports" },
  { path: "/page/profile", name: "Profile" },
];

export default function Header({ setOpen }: HeaderProps) {
  const location = useLocation();

  const currentTitle =
    menuItems.find((item) => location.pathname.startsWith(item.path))?.name ??
    "Dashboard";

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
      {/* Left: Mobile sidebar toggle + title */}
      <div className="flex items-center gap-2">
        <Button
          onClick={() => setOpen(true)}
          className="lg:hidden bg-slate-100 text-black p-2"
          size="icon"
        >
          <AlignJustify className="h-5 w-5" />
        </Button>

        <h2 className="text-xl font-bold text-gray-800 truncate">
          {currentTitle}
        </h2>
      </div>

      {/* Right: Notifications */}
      <div className="flex items-center gap-2">
        <Button
          className="bg-slate-100 hover:bg-slate-200 text-black p-2"
          size="icon"
        >
          <FontAwesomeIcon icon={faBell} className="text-lg" />
        </Button>
      </div>
    </header>
  );
}
