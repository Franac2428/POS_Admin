'use client';

import Agregar from "@/app/components/inventario/crearProducto";
import { Users, FileUp, Pencil, SlidersHorizontal, Trash } from "lucide-react";
import { useState } from "react";
import Eliminar from "../../components/inventario/eliminarProducto";
import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import TabsDemo from "@/app/components/pedido/pedido";
import Filtro from "../../components/inventario/filtro";



export default function inventario() {
  return (
    <>    
    <div className="w-full ">  
        <div className="grid grid-cols-10 gap-4 max-w-7xl mx-auto">
          <h1 className="font-semibold col-span-10 pt-4" style={{ fontSize: "28px" }}>Pedidos</h1>               
          <div className="col-start-8 col-span-3 ">
            <div className="flex justify-end gap-6">
            <div className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform shadow-sm bg-verde px-3 py-1 rounded-md">
              <a  href="/proveedores" className="flex items-center gap-4 shadow-sm active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform
                  text-white font-semibold px-4 py-1 rounded-md relative flex-1"  >                  
                      <Users className=" text-white-800"/>
                      <div className="">Proveedores</div>
                </a>
            </div>
              
         
                
            </div>
          </div>
 
          <div className="shadow-sm col-span-10  bg-white px-3 py-2 rounded-md">
            <TabsDemo/>
            
          </div>
        </div>  
      
      </div>      
    </>
  );
}
