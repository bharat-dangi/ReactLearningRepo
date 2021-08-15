import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const ThemeToggler=()=>{

    const [themeMode,setThemeMode]=useContext(ThemeContext)

    return(
        <div
        onClick={()=>{
            setThemeMode(themeMode==="light"?"dark":"light")
        }}
        >
            <button>{themeMode==="light"?"Go to Dark Mode":"Go to Normal Mode"}</button>
            
        </div>
    )

}


export default ThemeToggler