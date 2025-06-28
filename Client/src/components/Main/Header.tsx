import { AlignJustify } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface HeaderProps {
  setOpen: (open: boolean) => void;
}

const menuItems = [
  { path: "/dashboard", name: "Dashboard" },
  { path: "/journals", name: "Journals" },
  { path: "/ledger", name: "Ledger" },
  { path: "/final-accounts", name: "Final Accounts" },
  { path: "/reports", name: "Reports" },
  { path: "/profile", name: "Profile" },
];

export default function Header({ setOpen }: HeaderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  const currentTitle =
    menuItems.find((item) => location.pathname.startsWith(item.path))?.name ??
    "Dashboard";

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "enabled") {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.body.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "disabled");
    }
  };

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800">
      {/* Left: Mobile sidebar toggle + title */}
      <div className="flex items-center gap-2">
        <Button
          onClick={() => setOpen(true)}
          className="lg:hidden bg-slate-100 dark:bg-slate-800 text-black dark:text-white p-2"
          size="icon"
        >
          <AlignJustify className="h-5 w-5" />
        </Button>

        <h2 className="text-xl font-bold text-gray-800 dark:text-white truncate">
          {currentTitle}
        </h2>
      </div>

      {/* Right: Notifications & theme toggle */}
      <div className="flex items-center gap-2">
        {/* Notifications (optional) */}
        <Button
          className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-black dark:text-white p-2"
          size="icon"
        >
          <FontAwesomeIcon icon={faBell} className="text-lg" />
        </Button>

        {/* Theme toggle */}
        <Button
          onClick={toggleTheme}
          className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 p-2"
          size="icon"
        >
          <FontAwesomeIcon
            icon={isDarkMode ? faMoon : faSun}
            className="text-lg"
          />
        </Button>
      </div>
    </header>
  );
}
