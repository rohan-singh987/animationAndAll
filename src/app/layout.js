"use client";
import { Inter } from 'next/font/google'
import './globals.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';



const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 400,
    });
  }, []);
  return (
    <html lang="en">
      <StyledEngineProvider injectFirst>
      <body className={inter.className}>{children}</body>
      </StyledEngineProvider>
    </html>
  )
}
