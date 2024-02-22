'use client'
import 'tailwindcss/tailwind.css';
import Sidebar from "@/components/Sidebar";


export default function Layout({
                                   children,
                               }: Readonly<{
    children: React.ReactNode;
}>){
    return (
        <>
            <Sidebar/>
        </>
    )
}