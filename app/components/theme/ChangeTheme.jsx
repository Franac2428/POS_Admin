'use client';

import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';
import { Moon } from 'lucide-react';
import { Sun } from 'lucide-react';

export default function ThemeButton() {
    const { theme, handleToggleTheme } = useTheme();
    return (
        <button id="themebutton" onClick={handleToggleTheme()} className="inline-flex items-center p-2 text-sm font-medium text-gray-500 rounded-lg dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600">
            {theme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
        </button>
    )
}