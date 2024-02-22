import {FC, useState} from "react";
import {List, ListSubheader} from "@mui/material";


interface SidebarProps{

}

const Sidebar:FC<SidebarProps> = (props) => {
    return (
        <>
            <List
                className={"bg-white w-80 h-screen flex flex-col gap-1 border-r border-slate-100"}
                component="nav"
                aria-labelledby="메뉴"
                subheader={
                    <ListSubheader component="div" id="메뉴">
                        메뉴
                    </ListSubheader>
                }
            >
            </List>
            <nav className="">
                <div className="logo text-2xl font-bold text-center h-16 flex items-center justify-center">NINEONE</div>
                <div
                    className="user flex items-center justify-center flex-col gap-4 border-b border-emerald-slate-50 py-3">
                    <div className="flex flex-col items-center">
                        <span className="font-semibold text-lg text-emerald-700">지식관리</span>
                    </div>
                    <div className="text-sm text-slate-400">
                        <span className="font-semibold text-slate-500">지식관리를 위한 웹사이트</span>
                    </div>
                </div>

                <ul className="px-6 space-y-2">
                    <li>
                        <a className="block px-4 py-2.5 text-slate-800 font-semibold  hover:bg-emerald-950 hover:text-white rounded-lg"
                           href="#">유지보수</a>
                    </li>
                    <li>
                        <a className="block px-4 py-2.5 text-slate-800 font-semibold hover:bg-emerald-950 hover:text-white rounded-lg"
                           href="#">고객사</a>

                    </li>
                    <li>
                        <a className="block px-4 py-2.5 text-slate-800 font-semibold hover:bg-emerald-950 hover:text-white rounded-lg"
                           href="#">Destek Talepleri</a>
                    </li>
                    <li className="bg-slate-50 pb-2 rounded-lg border">
                        <a className="block px-4 py-2.5 text-slate-200 font-semibold hover:bg-emerald-950 hover:text-white rounded-lg bg-emerald-950"
                           href="#">Loglar & Kayıtlar</a>
                        <ol className="text-sm text-slate-700 space-y-4 pl-6 my-2.5">
                            <li>
                                <a className="block text-slate-500 hover:text-slate-950">Karakter Transfer Talepleri</a>
                            </li>
                            <li>
                                <a className="block text-slate-500 hover:text-slate-950">Silah Yükseltme Talepleri</a>
                            </li>
                            <li>
                                <a className="block text-slate-500 hover:text-slate-950">İsim Değiştirme Kayıtları</a>
                            </li>
                            <li>
                                <a className="block text-slate-500 hover:text-slate-950">Klan Değiştirme Kayıtları</a>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <a className="block px-4 py-2.5 text-slate-800 font-semibold hover:bg-emerald-950 hover:text-white rounded-lg"
                           href="#">Etkinlik Yönetimi</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default Sidebar;