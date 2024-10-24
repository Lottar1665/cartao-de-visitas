// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Button from "./Button";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Função que alterna entre temas
  const handleDarkMode = () => {
    // Alterna entre 'dark' e 'light'
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  // Impede a renderização até que o componente seja montado para evitar erros de tema
  if (!mounted) return null;

  return (
    
    <div className={`${theme === 'dark' ? 'bg-[#0f1021] bg-cover bg-no-repeat' : 'bg-[#258dd7] bg-cover bg-no-repeat'} h-screen w-screen`}>
      
      <div className=''>

<div className=''>

  <div className='flex justify-center'>

  <div className={`${theme === 'dark' ? 'bg-logo3' : 'bg-logo3'}  w-[112px] h-[112px] md:w-[200px] md:h-[200px] bg-cover rounded-full mt-16 md:mt-56`}/>

  </div>


  <div className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-center my-5`}>Vinicius Mariano</div>

  <div className="flex justify-center items-center">
      <Button onClick={handleDarkMode}>
          <div className={`${theme === 'dark' ? 'bg-moon' : 'bg-sun'}  w-[20px] h-[20px] md:w-[40px] md:h-[40px] bg-cover`}/>
      </Button>
      </div>

  <div className='flex justify-center items-center my-5 w-screen md:w-screen'>
    
  <div className='text-center md:w-60 md:mr-80'>

    <button className={`${theme === 'dark' ? 
    'text-center dark:bg-[#ffffff8f] dark:hover:text-white w-[300px] md:w-[540px] md:h-[56px] p-2 mb-4 md:mb-[16px] h-10 rounded-xl opacity-50 hover:opacity-100 transition ease-in-out delay-150 dark:bg-blue-400 hover:-translate-y-1 hover:scale-110 dark:hover:bg-blue-600 duration-300 hover:border' 
    : 'text-center dark:bg-[#ffffff8f] dark:hover:text-white w-[300px] md:w-[540px] md:h-[56px] p-2 mb-4 md:mb-[16px] h-10 rounded-xl opacity-50 hover:opacity-100 transition ease-in-out delay-150 dark:bg-red-400 hover:-translate-y-1 hover:scale-110 dark:hover:bg-red-600 duration-300 hover:border'}`}>
      Instagram
    </button>
    
    
  
    <button className={`${theme === 'dark' ? 
    'text-center dark:bg-[#ffffff8f] dark:hover:text-white w-[300px] md:w-[540px] md:h-[56px] p-2 mb-4 md:mb-[16px] h-10 rounded-xl opacity-50 hover:opacity-100 transition ease-in-out delay-150 dark:bg-blue-400 hover:-translate-y-1 hover:scale-110 dark:hover:bg-blue-600 duration-300 hover:border' 
    : 'text-center dark:bg-[#ffffff8f] dark:hover:text-white w-[300px] md:w-[540px] md:h-[56px] p-2 mb-4 md:mb-[16px] h-10 rounded-xl opacity-50 hover:opacity-100 transition ease-in-out delay-150 dark:bg-red-400 hover:-translate-y-1 hover:scale-110 dark:hover:bg-red-600 duration-300 hover:border'}`}>
      X
    </button>
  
    <button className={`${theme === 'dark' ? 
    'text-center dark:bg-[#ffffff8f] dark:hover:text-white w-[300px] md:w-[540px] md:h-[56px] p-2 mb-4 md:mb-[16px] h-10 rounded-xl opacity-50 hover:opacity-100 transition ease-in-out delay-150 dark:bg-blue-400 hover:-translate-y-1 hover:scale-110 dark:hover:bg-blue-600 duration-300 hover:border' 
    : 'text-center dark:bg-[#ffffff8f] dark:hover:text-white w-[300px] md:w-[540px] md:h-[56px] p-2 mb-4 md:mb-[16px] h-10 rounded-xl opacity-50 hover:opacity-100 transition ease-in-out delay-150 dark:bg-red-400 hover:-translate-y-1 hover:scale-110 dark:hover:bg-red-600 duration-300 hover:border'}`}>
      Gmail
    </button>
  
    <button className={`${theme === 'dark' ? 
    'text-center dark:bg-[#ffffff8f] dark:hover:text-white w-[300px] md:w-[540px] md:h-[56px] p-2 mb-4 md:mb-[16px] h-10 rounded-xl opacity-50 hover:opacity-100 transition ease-in-out delay-150 dark:bg-blue-400 hover:-translate-y-1 hover:scale-110 dark:hover:bg-blue-600 duration-300 hover:border' 
    : 'text-center dark:bg-[#ffffff8f] dark:hover:text-white w-[300px] md:w-[540px] md:h-[56px] p-2 mb-4 md:mb-[16px] h-10 rounded-xl opacity-50 hover:opacity-100 transition ease-in-out delay-150 dark:bg-red-400 hover:-translate-y-1 hover:scale-110 dark:hover:bg-red-600 duration-300 hover:border'}`}>
      Whatsapp
    </button>
  
    </div>

    </div>


  </div>
  <div className='text-center text-gray-600'>
    <a className="text-xs">Created by: LMSDeveloper</a>
  </div>
  
</div>
    </div>
  );
}
