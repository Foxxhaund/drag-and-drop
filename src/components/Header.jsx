import { useEffect, useState } from "react"
import MoonIcon from "./icons/MoonIcon"
import SunIcon from "./icons/SunIcon"

const initialStateDrkMode = localStorage.getItem('theme') === 'dark'

export default function Header(){

    const [darkMode, setDarkMode] = useState(initialStateDrkMode)

   useEffect(() =>{
        if(darkMode){ 
            document.documentElement.classList.add("dark")
            localStorage.setItem('theme','dark')
        }else{
            document.documentElement.classList.remove("dark")
            localStorage.setItem('theme','light')
        }
   },[darkMode])

    return(
        <header className="container mx-auto px-4 pt-8 md:max-w-xl">
            <div className="flex justify-between">
            <h1 className="text-3xl font-semibold tracking-[0.3em] uppercase text-white">Todo</h1>
            <button onClick={() => setDarkMode(!darkMode)}>
                {!darkMode ? <MoonIcon fill="#fff"/> : <SunIcon/>}
            </button>
            </div>
        </header>
    )
}