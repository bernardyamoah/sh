import React from 'react'
import { ThemeProvider } from 'next-themes'

function Provider({ children }) {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}

export default Provider
