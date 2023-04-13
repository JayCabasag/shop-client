import { Footer } from '@/containers/footer'
import { Navbar } from '@/containers/navbar'
import React, { ReactNode } from 'react'

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return <>
    <Navbar />
    {children}
    <Footer/>
    </>
}
