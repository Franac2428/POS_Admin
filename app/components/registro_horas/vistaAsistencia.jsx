'use client'
import React, { useState, useMemo, useCallback } from 'react';
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import useSWR from 'swr';
import { useSession } from "next-auth/react";

const MyCalendar = () => {
    const localizer = useMemo(() => momentLocalizer(moment), []);
    const [date, setDate] = useState(new Date(2024, 6, 20)); 
    const [view, setView] = useState(Views.WEEK);
    const { data: session, status } = useSession(); 
    const employeeId = session?.user?.id;

    const onNavigate = useCallback((newDate) => setDate(newDate), []);
    const onView = useCallback((newView) => setView(newView), []);
    const { data, error } = useSWR(`http://localhost:3000/api/calendario/${employeeId}`, async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      return data;
  });

  if (error) return <div>Error al cargar los datos</div>;
  if (!data) return <div>Cargando...</div>;
  if (!data || !Array.isArray(data)) return <div>No hay datos disponibles</div>;    

  
    const demoEvents = [];
    data.forEach((asistencia) => {
        demoEvents.push({
            start: new Date(asistencia.entrada),
            end: new Date(asistencia.salida),
        });
    });

    return (
        <div className="shadow-lg bg-white dark:bg-gray-700 p-4 rounded-lg">
            <div className="col-md-12 px-0">
                <Calendar
                    localizer={localizer}
                    events={demoEvents}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 580 }}
                    date={date}
                    view={view}
                    onNavigate={onNavigate}
                    onView={onView}
                />
            </div>
        </div>
    );
}

export default MyCalendar;
