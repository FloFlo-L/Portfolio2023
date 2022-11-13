import React, {createContext, useState} from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) =>{

    const [theme, setTheme] = useState(true)
    const [test, setTest] = useState('test context')

    const toggleTheme = () =>{
        setTheme(!theme)
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme, test}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider