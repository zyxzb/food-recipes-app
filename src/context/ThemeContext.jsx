import { createContext  } from "react";
import { useState } from 'react';



export const ThemeContext = createContext();


export function ThemeProvider({children}) {

    const  [toggle, setToggle]  =  useState(false);
    const toggleFunction =  ()  =>  {

    setToggle(!toggle);
    };
        return(
            <ThemeContext.Provider value={{toggle, toggleFunction}}>
                {children}
            </ThemeContext.Provider>
        )
}
