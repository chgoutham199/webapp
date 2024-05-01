import React, { createContext, useState ,useContext} from 'react'
import {ChevronLeft, ChevronRight, CircleHelp, Clipboard, Ellipsis, Gem, LayoutDashboard, LogOut, Mail, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
const SidebarContext=createContext()
export default function Navbar({children}) {
  const [expand,setExpand]=useState(true);
  return (
    <SidebarContext.Provider value={{expand}}>

      <div className={`h-full flex flex-col  text-white ${expand ? "" : "justify-center items-center" } border-r border-neutral-800 shadow-sm`} >
          <Link to="/">          <div className='pb-2  flex  items-center pt-3 '>
           <img src={`./logo${expand?"":"1"}.png`} alt='Logo' className={`overflow-hidden transition-all  ${expand ?"w-40": "w-10 " }`}  />
          </div>
          </Link>

           
           <ul className='flex flex-col pt-3  '>
              {children}
          </ul>
         <div className='mt-auto'>
          <div className='flex'>
         <button className={`hover:text-orange-500 ${expand || "flex items-center py-2 px-2 my-1"}`} onClick={()=>setExpand(!expand)} >
          {expand ? <ChevronLeft  size={30}/> : <ChevronRight  size={30}/>}
          </button>{expand &&<SideBarItem icon={<LogOut size={20} />} text="Logout" className />}
          </div>
         <SideBarItem icon={<Ellipsis size={20} />} text="Give feedback"  />
         {expand && <SideBarItem icon={<Ellipsis size={20} />} text="Refer an engineer"  />}
         </div>
        
      </div>
      </SidebarContext.Provider>
  )
}
export function SideBarItem({icon,text}){
  const {expand}=useContext(SidebarContext)
  return (
        <li className='relative flex items-center py-2 px-3 my-1 text-sm  rounded-md cursor-pointer hover:text-orange-500'>
          {icon}
          <span className={`overflow-hidden transition-all ${expand ? "w-32 ml-3" :"w-0"}`}>{text}</span>
        </li>

  );

}