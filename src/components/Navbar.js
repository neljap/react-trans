import { useTheme } from 'next-themes'
import React from 'react'
import {BsSun, BsMoon} from "react-icons/bs"
const Navbar = () => {
  
    const {systemTheme, theme, setTheme} = useTheme();


    function darkmode() {
        const currentTheme = theme === 'system' ? systemTheme : theme;
        
        if(currentTheme === "dark") {
            return (
                <BsMoon role='button'  onClick={() => setTheme("light")}/>
            )
        }else{
            return(
                <BsSun role='button ' onClick={() => setTheme("dark")}/>
            )
        }
    }

    return (
      <div className="flex justify-between align-middle p-4 dark:bg-gray-600 bg-white text-black">
        <h2>Logo</h2>
        <ul className="flex">
          <li>About</li>
          <li>About</li>
          <li>About</li>
          <li>Project</li>
        </ul>
        <div>
          {darkmode()}
        </div>
        <button>Sign In</button>
      </div>
    );
}

export default Navbar
