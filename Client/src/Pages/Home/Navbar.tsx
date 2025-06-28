// src/components/Navbar.tsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About", anchor: "about" },
  { label: "Features", anchor: "features" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (item: any) => {
    if (item.path) {
      navigate(item.path);
    } else if (item.anchor) {
      const section = document.getElementById(item.anchor);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <div
          onClick={() => navigate("/")}
          className="font-bold text-xl cursor-pointer text-gray-800"
        >
          LedgerPro
        </div>

        <nav className="hidden md:flex gap-6 items-center">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              className="text-gray-800 hover:text-red-500"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 rounded bg- primary text-white hover:bg-red-600"
          >
            Log In
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="px-4 py-2 rounded border border-red-500 text-red-500 hover:bg-gradient-to-r from-red-500 to-pink-500 hover:text-white"
          >
            Sign Up
          </button>
        </nav>

        <button className="md:hidden" onClick={() => setMobileOpen(true)}>
          <Menu className="h-6 w-6 text-gray-800" />
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          <div className="flex justify-end p-4">
            <button onClick={() => setMobileOpen(false)}>
              <X className="h-6 w-6 text-gray-800" />
            </button>
          </div>
          <div className="flex flex-col items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className="text-gray-800 text-lg"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => navigate("/login")}
              className="w-40 px-4 py-2 border rounded text-gray-800"
            >
              Log In
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="w-40 px-4 py-2 bg-red-500 text-white rounded"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
