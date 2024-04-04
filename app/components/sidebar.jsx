'use client';
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import { createContext, useContext, useState } from "react";
import { Warehouse, Utensils, FileLineChart, LockKeyhole, Flag, BriefcaseBusiness, LifeBuoy, Settings } from "lucide-react";

const SidebarContext = createContext();

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const sidebarItems = [
    { icon: <Utensils size={20} />, text: "POS",  },
    { icon: <Warehouse size={20} />, text: "Inventario", },
    { icon: <FileLineChart size={20} />, text: "Reportes", },
    { icon: <BriefcaseBusiness size={20} />, text: "Empleados" },
    { icon: <LockKeyhole size={20} />, text: "Seguridad" },
    { icon: <Flag size={20} />, text: "Reporting" },
    { icon: <hr className="my-3" /> },
    { icon: <Settings size={20} />, text: "Settings" },
    { icon: <LifeBuoy size={20} />, text: "Help" },
  ];

  return (
    <>
      <aside className="h-screen">
        <nav className="h-full flex flex-col bg-white border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center bg-custom-yellow">
            <img
              src="/nombre.png"
              className={`overflow-hidden transition-all ${
                expanded ? "w-32" : "w-0"
              }`}
            />

            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="p-1.5 rounded-lg bg-custom-yellow hover:bg-yellow-600"
            >
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">
              {sidebarItems.map((item, index) => (
                <SidebarItem key={index} {...item} />
              ))}
            </ul>
          </SidebarContext.Provider>

          <div className="border-t flex p-3">
            <div
              className={`flex justify-between items-center overflow-hidden transition-all ${
                expanded ? "w-52 ml-3" : "w-0"
              }`}
            >
              <div className="leading-4">
                <h4 className="font-semibold">constGenius</h4>
                <span className="text-xs text-gray-600">
                  constgenius@gmail.com
                </span>
              </div>
              <MoreVertical size={20} />
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}

export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext);
  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        active
          ? "bg-gradient-to-tr from-yellow-200 to-yellow-100 text-yellow-800"
          : "hover:bg-yellow-50 text-gray-600"
      }`}
    >
      {icon}
      <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
        {text}
      </span>
      

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
