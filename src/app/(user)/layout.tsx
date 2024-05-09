import NavigationBar from '@/components/Header'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <NavigationBar />
            {children}
        </div>
    )
}
