import React from 'react'
import me from "../assets/Kyle_D'Souza.jpg"

const About = () => {
    return (
        <div className='w-full h-auto md:h-screen bg-sky-200 dark:bg-dark-back flex flex-col'>
            <div className='flex flex-col justify-center mt-40 items-center'>
                <div className='flex justify-center items-center flex-wrap'>
                    <div className='flex text-2xl p-2 text-center flex-wrap w-7/12'>
                        <p>
                            {"My name is Kyle D'Souza. I am a third year software engineering student at McMaster University. You can reach out to me by my email, dsouzk8@mcmaster.ca, or on "} 
                            <a rel='noreferrer' href='https://www.linkedin.com/in/kyle-d-souza-0036891b8/' target="_blank" className='underline hover:font-bold'>{"Linkedin"}</a>.
                        </p>
                    </div>
                    <img className='h-72 p-2 rounded-3xl' src={me} alt="me"/>
                </div>
                <div className='flex flex-col justify-center items-center bg-sky-200 dark:bg-dark-back'>
                    <div className='text-4xl font-bold pb-6'>Hobbies/Interests:</div>
                    <div className='flex justify-center items.center flex-wrap space-x-5'>
                        <div className='flex justify-center items-center flex-col'>
                            <svg className='stroke-black dark:stroke-white h-40' viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25 2C12.299 2 2 12.298 2 25s10.299 23 23 23 23-10.298 23-23S37.701 2 25 2h0z" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="m18.71 34.719-3.909-12.062 10.225-7.454 10.227 7.454-3.905 12.062zM33.738 3.788l-8.712 3.717-8.71-3.717M7.646 10.106l.837 9.463-6.22 7.16M5.576 36.957l9.227 2.125 4.869 8.146M30.388 47.228l4.865-8.15 9.224-2.125M47.793 26.727l-6.225-7.164.836-9.457M25.026 7.505v7.698M35.253 22.956l6.315-3.393M31.348 34.719l3.905 4.359M18.71 34.719l-3.907 4.363M8.483 19.569l6.318 3.088"/>
                            </svg>
                            <div className='text-xl'>Playing Soccer</div>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                            <svg className='fill-black dark:fill-white h-40' viewBox="0 0 1024 650" xmlns="http://www.w3.org/2000/svg">
                                <path d="M245 468a23 23 0 0 0 23 23.1h168v5a23 23 0 0 0 7.7 17.3c9 7.9 22.5 24 23 48.6.1 7.2 0 13.5-.1 18.8h90.8a338 338 0 0 1 0-18.8c.4-24.6 14-40.7 22.9-48.6A23 23 0 0 0 588 496v-5h168a23 23 0 0 0 23-23v-19.2H245v19.2zM617 600H407c-23 0-41.7 18.7-41.7 41.7 0 5.3 4.3 9.6 9.6 9.6H649c5.3 0 9.6-4.3 9.6-9.6 0-23-18.6-41.7-41.6-41.7zM619 219h103.8v51.2H619zM460.1 219H564v51.2H460zM301.2 219H405v51.2H301.2z"/><path d="M756 116.7H268a23 23 0 0 0-23 23v290h534v-290a23 23 0 0 0-23-23zm-41.7 32.1h18a9.6 9.6 0 0 1 0 19.2h-18a9.6 9.6 0 0 1 0-19.2zm-204.6 0H528a9.6 9.6 0 0 1 0 19.2h-18.2a9.6 9.6 0 0 1 0-19.2zm-54.5 0h18.1a9.6 9.6 0 0 1 0 19.2h-18a9.6 9.6 0 0 1 0-19.2zM441 209c0-5 4.1-9.2 9.2-9.2H574c5 0 9.2 4.2 9.2 9.2v71.3c0 5-4.1 9.2-9.2 9.2H450c-5 0-9.2-4.2-9.2-9.2v-71.3zm-94.7-60h18a9.6 9.6 0 0 1 0 19.1h-18a9.6 9.6 0 0 1 0-19.2zm-54.6 0h18.1a9.6 9.6 0 0 1 0 19.1h-18a9.6 9.6 0 0 1 0-19.2zM424.2 388c0 5.3-4.3 9.6-9.6 9.6h-123a9.6 9.6 0 0 1-9.6-9.6v-31.4c0-5.3 4.3-9.6 9.6-9.6h123c5.3 0 9.6 4.3 9.6 9.6V388zm-9.6-60.2h-123a9.6 9.6 0 0 1 0-19.2h123a9.6 9.6 0 1 1 0 19.2zm9.6-47.6c0 5-4.1 9.2-9.2 9.2H291.2c-5 0-9.2-4.2-9.2-9.2v-71.3c0-5 4.2-9.2 9.2-9.2H415c5 0 9.2 4.2 9.2 9.2v71.3zM418.8 168h-18.1a9.6 9.6 0 0 1 0-19.2h18.1a9.6 9.6 0 0 1 0 19.2zm164.3 220c0 5.3-4.3 9.6-9.6 9.6h-123a9.6 9.6 0 0 1-9.6-9.6v-31.4c0-5.3 4.3-9.6 9.6-9.6h123c5.3 0 9.6 4.3 9.6 9.6V388zm-9.6-60.2h-123a9.6 9.6 0 0 1 0-19.2h123a9.6 9.6 0 1 1 0 19.2zM742 388c0 5.3-4.3 9.6-9.6 9.6h-123a9.6 9.6 0 0 1-9.6-9.6v-31.4c0-5.3 4.3-9.6 9.6-9.6h123c5.3 0 9.6 4.3 9.6 9.6V388zm-9.6-60.2h-123a9.6 9.6 0 0 1 0-19.2h123a9.6 9.6 0 1 1 0 19.2zm9.6-47.6c0 5-4.2 9.2-9.2 9.2H609c-5 0-9.2-4.2-9.2-9.2v-71.3c0-5 4.1-9.2 9.2-9.2h123.8c5 0 9.2 4.2 9.2 9.2v71.3z"/>
                            </svg>
                            <div className='text-xl'>Web Development</div>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                            <svg className='fill-black dark:fill-white h-40' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27 24a3 3 0 0 0-1.3.3L21.4 20H18v2h2.6l3.7 3.7a3 3 0 0 0 1.6 4A3 3 0 1 0 27 24zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM27 13a3 3 0 0 0-2.8 2H18v2h6.2a3 3 0 1 0 2.8-4zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM27 2a3 3 0 0 0-2.7 4.4L20.6 10H18v2h3.4l4.4-4.3A3 3 0 1 0 27 2zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/><path d="M18 6h2V4h-2a4 4 0 0 0-3 1.4A4 4 0 0 0 12 4h-1c-5 0-9 4-9 9v6c0 5 4 9 9 9h1a4 4 0 0 0 3-1.4 4 4 0 0 0 3 1.4h2v-2h-2a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2zm-6 20h-1a7 7 0 0 1-7-6h2v-2H4v-4h3a3 3 0 0 0 3-3V9H8v2c0 .6-.4 1-1 1H4a7 7 0 0 1 7-6h1a2 2 0 0 1 2 2v4h-2v2h2v4h-2a3 3 0 0 0-3 3v2h2v-2c0-.6.4-1 1-1h2v4a2 2 0 0 1-2 2z"/><path d="M0 0h32v32H0z" fill='none'/>
                            </svg>
                            <div className='text-xl'>Machine Learning</div>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                            <svg className='fill-black dark:fill-white h-40' viewBox="0 0 1024 768" xmlns="http://www.w3.org/2000/svg">
                            <path d="M814.4 539.1c8-12 12.4-26.2 12.4-40.7 0-41.1-33.4-74.4-74.5-74.4a61.7 61.7 0 0 0-84.3-71 130.2 130.2 0 0 0-58-84.7 51.3 51.3 0 0 0 4.9-21 53 53 0 0 0-30.2-47.6c4-10 6-20.6 6-31.3 0-48.6-39.4-88-88-88-22 0-43.1 8.2-59.2 23.2a72.9 72.9 0 0 0-138 19.5 55.6 55.6 0 0 0-49.5 55.2c0 1.3 0 2.5.2 3.8a59.5 59.5 0 0 0 8.3 118.3h172.2a128.6 128.6 0 0 0-24 55.9 96.8 96.8 0 0 0-63.5-23.7 98.2 98.2 0 0 0-85 146.8 74.8 74.8 0 0 0-78.7 74c0 41 33.2 74 74.2 74.1h86.7a8.5 8.5 0 0 0 0-17h-86.7a57 57 0 1 1 22-109.7A8.5 8.5 0 0 0 291 487a80.8 80.8 0 1 1 121.7-106 8.5 8.5 0 0 0 15.2-5.1c1-61.6 51-111 112.5-111.3 58 0 107.2 45.2 112.2 102.9a8.5 8.5 0 0 0 13.5 6.1 44.7 44.7 0 0 1 70.8 35.9c0 7-1.8 14-5.1 20.3A8.5 8.5 0 0 0 741 442a57.1 57.1 0 0 1 53.3 94.9 8.5 8.5 0 0 0 4.2 14 30.2 30.2 0 0 1-7.5 59.4h-69.3a8.5 8.5 0 0 0 0 17.1h69.4a47.3 47.3 0 0 0 23.2-88.4zM452 283.5H264.6c-23.4 0-42.4-19-42.4-42.5a42.5 42.5 0 0 1 43.5-42.2h.3a8.5 8.5 0 0 0 8.6-10.7c-1-3.2-1.5-6.5-1.5-9.8 0-21 17-38.3 39.4-38.3h.3c4.6.6 8.6-3.4 8.9-8a55.8 55.8 0 0 1 110.1-10.2 8.5 8.5 0 0 0 15 3.2 70.6 70.6 0 0 1 118.7 75.6 8.5 8.5 0 0 0 5.4 12.1 36 36 0 0 1 26.8 34.7c0 4.4-1 8.8-2.7 12.8-17-8.2-35.5-12.5-54.4-12.7-33 .1-64.9 13-88.7 36z"/><path d="M673.7 645h-11V501.7a23.3 23.3 0 0 0-23.3-23.2h-205a23.3 23.3 0 0 0-23.2 23.2V645h-11a8.5 8.5 0 0 0-8.6 8.5v36.2c0 9.2 7.5 16.7 16.7 16.7h257.3c9.2 0 16.6-7.5 16.7-16.7v-36.2c0-4.7-3.9-8.5-8.6-8.5zM428.3 501.7c0-3.4 2.8-6.2 6.2-6.2h204.9c3.4 0 6.1 2.8 6.1 6.2V645H428.3zm236.9 187.6-256.5.4V662h256.5z"/><path d="M617.5 515.8H456.3a8.5 8.5 0 0 0-8.5 8.5V619a8.5 8.5 0 0 0 8.5 8.5h161.2a8.5 8.5 0 0 0 8.6-8.5v-94.7a8.5 8.5 0 0 0-8.6-8.5zm-8.5 94.7H464.9v-77.6h144z"/>
                            </svg>
                            <div className='text-xl'>Cloud Computing</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About