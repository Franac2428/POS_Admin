'use client';

import { useEffect, useState, createContext, useContext } from 'react';
import { initFlowbite } from 'flowbite'


const ThemeCtx = createContext(null)

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        setTheme(window.localStorage.getItem('data-theme-user') || 'dark')
        // on all window load
            initFlowbite()
            console.log('%cFlowbite is running!', 'color: #fff; background: #007bff; padding: 10px; border-radius: 5px; font-weight: bold;')
    }, [])

    function handleToggleTheme() {
        return () => {
            setTheme(theme == 'white' ? 'dark' : 'white')
            window.localStorage.setItem('data-theme-user', theme == 'white' ? 'dark' : 'white')
        }
    }

    return (
        <ThemeCtx.Provider value={{ theme, setTheme, handleToggleTheme }}>
            <html className={` ${theme} bg-white dark:bg-gray-900 overflow-x-hidden`} lang="en">
                {children}
            </html>
        </ThemeCtx.Provider>
    )
}

export const useTheme = () => useContext(ThemeCtx)