// app/providers.tsx
"use client";

import * as React from 'react';

import {NextUIProvider} from '@nextui-org/react';
import {ThemeProvider as NextThemesProvider} from "next-themes";

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="className" defaultTheme="dark">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}