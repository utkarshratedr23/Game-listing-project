/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState,useContext,useEffect } from "react";
import logo from "./../assets/images/logo.png";
import { HiOutlineMagnifyingGlass, HiMoon, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../Context/ThemeContext";
function Header() {
  const [toggle, setToggle] = useState(false);
  const {theme,setTheme}= useContext(ThemeContext)
  useEffect(()=>{
   console.log("theme",theme)
  },[])
  return (
    <div className="flex justify-between p-3 space-between">
      <img src={logo} width={60} height={60} />
      <div className="text-[30px] font-bold dark:text-white text-align:centre ">
       Game Zone
      </div>
      <div>
        {theme=='light' ? (
          <HiMoon
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor pointer"
            onClick={() => {setTheme('dark');localStorage.setItem('theme','dark')}}
          />
        ) : (
          <HiSun
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor pointer"
            onClick={() => {setTheme('light');localStorage.setItem('theme','dark')}}
          />
        )}
      </div>
    </div>
  );
}
export default Header;
