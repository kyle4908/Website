import React, {useState} from 'react'
import {MenuIcon, XIcon, MoonIcon, SunIcon} from '@heroicons/react/outline'
import {Link} from "react-router-dom"

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => {setNav(!nav)}
    function getInitialMode(){
        if(localStorage.getItem('theme') === null){
            if(window.matchMedia('(prefers-color-scheme: dark)').matches){
                localStorage.theme = 'dark'
                document.documentElement.classList.add('dark')
                return 'dark'
            } else {
                localStorage.theme = 'light'
                return 'light'
            }
        } else {
            if(localStorage.theme === 'dark'){
                document.documentElement.classList.add('dark')
                return 'dark'
            } else {
                document.documentElement.classList.remove('dark')
                return 'light'
            }
        }
    }
    const initialTheme = getInitialMode()
    const [darkMode, setDarkMode] = useState(initialTheme === 'dark')
    const darkModeToggle = () => {
        if(localStorage.theme === 'light'){
            localStorage.theme = 'dark'
            document.documentElement.classList.add('dark')
            setDarkMode(true)
        } else {
            localStorage.theme = 'light'
            document.documentElement.classList.remove('dark')
            setDarkMode(false)
        }
    }
    
    return (
        <div className='w-screen h-[8rem] bg-blue-500 dark:bg-black fixed drop-shadow-lg'>
            <div className='px-2 flex justify-evenly items.center w-full h-full pr-5'>
                <div className='flex items-center w-full h-full justify-start'>
                    <Link className='text-4xl mr-4 sm:text-5xl text-center font-bold hover:font-extrabold' to="/">Kyle D'Souza</Link>
                </div>
                <div className='flex items-end w-full h-full justify-center'>
                    <ul className='hidden sm:flex text-2xl md:text-3xl justify-evenly'>
                        <Link className='underline underline-offset-8 hover:font-bold p-4' to="/About">About</Link>
                        <Link className='underline underline-offset-8 hover:font-bold p-4' to="/Skills">Skills</Link>
                        <Link className='underline underline-offset-8 hover:font-bold p-4' to="/Projects">Projects</Link>
                    </ul>
                </div>
                <div className='flex items-center w-full h-full justify-end'>
                    {!darkMode ? <MoonIcon className='w-8' onClick={darkModeToggle}/> : <SunIcon className='w-8' onClick={darkModeToggle}/>}
                    {!nav ? <MenuIcon className='w-8 sm:hidden' onClick={handleClick}/> : <XIcon className='w-8 sm:hidden' onClick={handleClick}/>}
                </div>
            </div>
            <ul className={!nav ? 'hidden' : 'sm:hidden absolute bg-blue-500 dark:bg-black w-full px-8 p-2'}>
                <li className='border-b-2 border-black dark:border-white w-full'>
                    <Link className='hover:font-bold' to="/About">About</Link>
                </li>
                <li className='border-b-2 border-black dark:border-white w-full'>
                    <Link className='hover:font-bold' to="/Skills">Skills</Link>
                </li>
                <li className='border-b-2 border-black dark:border-white w-full'>
                    <Link className='hover:font-bold' to="/Projects">Projects</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar