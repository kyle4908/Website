import React from 'react'
import me from "../assets/Kyle_D'Souza.jpg"

const Home = () => {
    return (
        <div className='w-full h-screen bg-sky-200 dark:bg-dark-back flex flex-col'>
            <div className='flex flex-col justify-center h-80 mt-80 items-center'>
                <img className='max-h-80 p-2 rounded-3xl' src={me} alt="me"/>
                <div className='flex text-center text-3xl p-2 flex-col bg-sky-200 dark:bg-dark-back w-full'>
                    <p className='pb-3'>My name is Kyle D'Souza.</p> 
                    <p className='pb-3'>I'm a third year software engineering student at McMaster University.</p>
                    <p className='pb-6'>This is my website, built using React and Tailwind CSS.</p>
                    <p className='font-bold pb-2'>My Links:</p>
                    <a className='hover:font-semibold' href='https://github.com/kyle4908' target='blank_'>GitHub</a>
                    <a className='hover:font-semibold' href='https://www.linkedin.com/in/kyle-d-souza-0036891b8/' target='blank_'>LinkedIn</a>
                </div>
                
            </div>
            {/*<div className="flex justify-center h-60 flex-col space-y-1 text-center text-2xl">
                <p className='font-bold pb-2'>My Links:</p>
                <a href='https://github.com/kyle4908' target='blank_'>GitHub</a>
                <a href='https://www.linkedin.com/in/kyle-d-souza-0036891b8/' target='blank_'>LinkedIn</a>
            </div>*/}
        </div>
    )
}

export default Home