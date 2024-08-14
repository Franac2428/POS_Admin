'use client';
import { AlarmClock, ScrollText, BadgeCent, BookUser, BriefcaseBusiness, ChevronFirst, ChevronLast, Computer, FileLineChart, Flag, LockKeyhole, LogOut, MoreVertical, Truck, Utensils, Warehouse } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { createContext, useEffect, useState } from "react";
import ThemeButton from "./theme/ChangeTheme";

const SidebarContext = createContext();

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const { data: session, status } = useSession();

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

  if (status === "loading") return <div>Cargando...</div>;
  if (status === "unauthenticated") return <div>No autorizado</div>;

  const sidebarItems = [
    { icon: <Computer size={20} />, text: "Inicio/Cierre Caja", link: "/dashboard/caja" },
    { icon: <Utensils size={20} />, text: "POS", link: "/dashboard/menu" },
    { icon: <ScrollText size={20} />, text: "Facturas", link: "/dashboard/factura" },
    { icon: <Warehouse size={20} />, text: "Inventario", link: "/dashboard/inventario", subItems: [{ text: "Inventario", link: "/dashboard/inventario" }, { text: "Proveedores", link: "/dashboard/proveedores" }, session?.user?.role === "Administrador" && { text: "Categorías", link: "/dashboard/categorias" }] },
    session?.user?.role === "Administrador" && { icon: <FileLineChart size={20} />, text: "Reportes", link: "/dashboard/reporteria" },
    session?.user?.role === "Administrador" && { icon: <BriefcaseBusiness size={20} />, text: "Empleados", link: "/dashboard/empleado", subItems: [{ text: "Empleados", link: "/dashboard/empleado" }, { text: "Metas", link: "/dashboard/metas" }] },
    { icon: <BookUser size={20} />, text: "Clientes", link: "/dashboard/clientes" },
    session?.user?.role === "Administrador" && { icon: <LockKeyhole size={20} />, text: "Seguridad", link: "/dashboard/seguridad", subItems: [{ text: "Usuarios", link: "/dashboard/seguridad" }, { text: "Audit. Login", link: "/dashboard/auditoria" }, { text: "Info. Empresa", link: "/dashboard/empresa" }] },
    session?.user?.role === "Administrador" && { icon: <Truck size={20} />, text: "Pedidos", link: "/dashboard/pedido" },
    session?.user?.role === "Administrador" && { icon: <AlarmClock size={20} />, text: "Monitorizar horarios", link: "/dashboard/horas" },
    session?.user?.role === "Empleado" && { icon: <BriefcaseBusiness size={20} />, text: "Metas", link: "/dashboard/metas" },
    session?.user?.role === "Empleado" && { icon: <Flag size={20} />, text: "Marcar Hora", link: "/dashboard/marcar" },
    { icon: <hr className="my-3" /> },
    { icon: <LogOut size={20} />, text: "Cerrar Sesión", link: "/api/auth/signout" },
  ].filter(Boolean); // Filtrar elementos nulos

  return (
    <>
      <aside className={`h-screen ${isSmallScreen && expanded ? "fixed" : "static"} inset-y-0 left-0 z-50 transform transition-transform duration-200 ease-in-out"}`}>
        <nav className="h-full flex flex-col bg-white dark:bg-gray-800 border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center bg-custom-yellow">
            <Image src="/nombre.png" width={200} height={200} className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`} />

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

          <div className="border-t border-gray-400 dark:border-gray-200 flex p-3">
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

export function SidebarItem({ icon, text, active, link, expanded, subItems }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const MenuItem = link ? Link : 'div';
  const handleDropdownClick = () => setDropdownOpen(!dropdownOpen);

  if (subItems && subItems.length > 0) {
    return (
      <li className={`relative my-1 ${!expanded ? 'hidden' : ''}`}>
        <button
          type="button"
          className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          aria-expanded={dropdownOpen ? "true" : "false"}
          onClick={handleDropdownClick}
        >
          {icon}
          <span className="flex-1 ml-3 text-left whitespace-nowrap">{text}</span>
          {subItems && subItems.length > 0 && (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          )}
        </button>
        {subItems && subItems.length > 0 && (
          <ul className={`py-2 space-y-2 ${dropdownOpen ? "block" : "hidden"}`}>
            {subItems.map((item, index) => (
              <li key={index}>
                <a href={item.link} className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-yellow-100 hover:bg-yellow-50 text-gray-400 dark:hover:bg-yellow-400 dark:bg-yellow-600 dark:text-gray-200" : "hover:bg-yellow-200 dark:hover:bg-yellow-600 text-gray-600 dark:text-gray-300"}`}>
      <MenuItem className="flex" href={link}>
        {icon}
        <span className={`overflow-hidden transition-all ${expanded ? "ml-3" : "w-0"}`}>{text}</span>
      </MenuItem>
      {!expanded && (
        <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-yellow-100 text-yellow-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
          {text}
        </div>
      )}
    </li>
  );
}
