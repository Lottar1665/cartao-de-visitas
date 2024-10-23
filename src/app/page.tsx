"use client"

import React from 'react'
import { ThemeProvider } from 'next-themes'
import { ThemeSwitcher } from './components/ThemeSwitcher'

function page() {

  const handleDarkMode = () => {
    alert('Botão Clicado')
  }


  return (
    <ThemeProvider>
      <ThemeSwitcher>
    </ThemeSwitcher>
    </ThemeProvider>
    
  )
}

export default page