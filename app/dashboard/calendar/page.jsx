'use client'
import React, { useState, useMemo, useCallback } from 'react';
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import useSWR, { mutate } from 'swr';


const MyCalendar = () => {
    const localizer = useMemo(() => momentLocalizer(moment), []);
    const [date, setDate] = useState(new Date(2024, 6, 20)); // Example start date
    const [view, setView] = useState(Views.WEEK);
    const onNavigate = useCallback((newDate) => setDate(newDate), []);
    const onView = useCallback((newView) => setView(newView), []);
    const [asistencia, setAsistencia] = useState(null);

    useEffect(() => {
        async function fetchAsistencia() {
          if (!employeeId) return; 
          try {
            const response = await fetch(`/api/marcar/${employeeId}`);
            if (!response.ok) {
              const errorData = await response.json();
              toast.info('Aún debe marcar la asistencia de hoy');
              return;
            }            
            const data = await response.json();
            setAsistencia(data);
          } catch (err) {
            toast.error('Error al comunicar con el servidor');
          } finally {
            setLoading(false);
          }
        }
        fetchAsistencia();
    }, [employeeId]);

    const demoEvents = [
        {
            id: 0,
            title: 'My Event',
            start: new Date(2024, 6, 20, 10, 0),
            end: new Date(2024, 6, 20, 12, 0),
            desc: 'This is a sample event'
        },
    ];

    return (
        <div className="row custom_row bg-white rounded-corner h-100 p-4">
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
