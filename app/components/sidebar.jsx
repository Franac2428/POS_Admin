'use client';
import Link from "next/link";
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import { createContext, useContext, useState } from "react";
import { Warehouse, Utensils, FileLineChart, LockKeyhole, Flag, BriefcaseBusiness, LifeBuoy, Settings, BadgeCent, Truck } from "lucide-react";
import ThemeButton from "./theme/ChangeTheme";
import { useEffect } from "react";



const SidebarContext = createContext();

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsSmallScreen(true);
        setExpanded(false);
      } else {
        setIsSmallScreen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sidebarItems = [
    { icon: <Utensils size={20} />, text: "POS", link: "/menu" },
    { icon: <Warehouse size={20} />, text: "Inventario", link: "/inventario" },
    { icon: <FileLineChart size={20} />, text: "Reportes",  link: "/reporteria"},
    { icon: <BadgeCent size={20} />, text: "Transacciones", link: "/transacciones" },
    { icon: <BriefcaseBusiness size={20} />, text: "Empleados",  link: "/empleado"  },
    { icon: <LockKeyhole size={20} />, text: "Seguridad" },
    { icon: <Truck size={20} />, text: "Pedidos",link:"/pedido"  },
    { icon: <hr className="my-3" /> },
    { icon: <Settings size={20} />, text: "Settings" },
    { icon: <LifeBuoy size={20} />, text: "Help" },
  ];

  return (
    <>
      <aside className={`h-screen ${isSmallScreen && expanded ? "fixed" : "static"} inset-y-0 left-0 z-50 transform transition-transform duration-200 ease-in-out"}`}>    
          <nav className="h-full flex flex-col bg-white dark:bg-gray-800 border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center bg-custom-yellow">
            <img src="/nombre.png" className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`} />

            <button
              onClick={() => setExpanded(!expanded)}
              className="p-1.5 rounded-lg bg-custom-yellow hover:bg-yellow-600"
            >
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>

          <ul className="flex-1 px-3">
            {sidebarItems.map((item, index) => (
              <SidebarItem key={index} expanded={expanded} {...item} />
            ))}
          </ul>

          <div className="border-t border-gray-400 dark:border-gray-200  flex p-3">
            <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
              <div className="leading-4 text-gray-700 dark:text-white">
                <h4 className="font-semibold">Grupo03</h4>
                <span className="text-xs text-gray-600">
                  Grupo3
                </span>
              </div>
              <div className="flex flex-row space-x-2">
                <ThemeButton />
                <button className="inline-flex items-center p-2 text-sm font-medium text-gray-500 rounded-lg dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <MoreVertical size={16} />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </aside>
      {expanded && isSmallScreen && <div className="fixed inset-0 bg-black opacity-50 z-40"></div>}
    </>
  );
}

export function SidebarItem({ icon, text, active, link, expanded }) {
  const MenuItem = link ? Link : 'div';

  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-yellow-100 hover:bg-yellow-50 text-gray-400 dark:hover:bg-yellow-400 dark:bg-yellow-600 dark:text-gray-200" : "hover:bg-yellow-200 dark:hover:bg-yellow-600 text-gray-600 dark:text-gray-300"}`}

    >
      <MenuItem className="flex" href={link}>
        {icon}
        <span className={`overflow-hidden transition-all ${expanded ? "ml-3" : "w-0"}`}>
          {text}
        </span>
      </MenuItem>

      {!expanded && (
        <div
          className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-yellow-100 text-yellow-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
        >
          {text}
        </div>
      )}
    </li>
  );
}
