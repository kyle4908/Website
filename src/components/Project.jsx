import React from 'react'

const Project = (props) => {
    return (
        <div className='h-96 w-96 flex items-center justify-center'>
            <div className='bg-sky-600 h-80 w-80 dark:bg-gray-600 flex rounded-lg items-center justify-center shadow-lg'>
                <div className='flex justify-center flex-col p-2'>
                    <div className='pb-3 text-center text-2xl font-bold'>{props.Name}</div>
                    <a href={props.Link} target='_blank' rel="noreferrer" className='pb-3 text-center text-base p-2 underline hover:font-bold'>Link</a>
                    <div className='pb-3 text-center text-sm'>{props.Description}</div>
                    <div className='pb-3 text-center text-base font-bold'>Tech Stack:</div>
                    <div className='pb-3 text-center text-sm'>{props.Stack}</div>
                </div>
            </div>
        </div>
    )
}

export default Project