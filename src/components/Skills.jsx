import React from 'react'

const Skills = () => {
    return (
        <div className='w-full h-auto bg-sky-200 dark:bg-dark-back flex flex-col'>
            <div className='flex justify-center h-auto mt-40 items-center flex-col space-y-2'>
                <h1 className='text-3xl'>Programming Languages</h1>
                <div className='flex justify-center items.center pb-5 flex-wrap'>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-java-plain'></i>
                        <div className='text-base'>Java</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-c-plain'></i>
                        <div className='text-base'>C</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-cplusplus-plain'></i>
                        <div className='text-base'>C++</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-python-plain'></i>
                        <div className='text-base'>Python</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-javascript-plain'></i>
                        <div className='text-base'>Javascript</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-matlab-plain'></i>
                        <div className='text-base'>MATLAB</div>
                    </div>
                </div>
                <h1 className='text-3xl'>Web Development</h1>
                <div className='flex justify-center items.center flex-row pb-5 flex-wrap'>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-html5-plain'></i>
                        <div className='text-base'>HTML</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-css3-plain'></i>
                        <div className='text-base'>CSS</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-javascript-plain'></i>
                        <div className='text-base'>Javascript</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-react-original'></i>
                        <div className='text-base'>React</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-tailwindcss-plain'></i>
                        <div className='text-base'>Tailwind CSS</div>
                    </div>
                </div>
                <h1 className='text-3xl'>Frameworks/Libraries</h1>
                <div className='flex justify-center items.center flex-row pb-5 flex-wrap'>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-numpy-original'></i>
                        <div className='text-base'>NumPy</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-pandas-original'></i>
                        <div className='text-base'>Pandas</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-tensorflow-original'></i>
                        <div className='text-base'>TensorFlow</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-react-original'></i>
                        <div className='text-base'>React</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-tailwindcss-plain'></i>
                        <div className='text-base'>Tailwind CSS</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-java-plain'></i>
                        <div className='text-base'>Java Swing</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <svg version="1.0" className='fill-black dark:fill-white h-20 w-24 mt-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168 188">
                            <path d="M56 3c-7 3-18 17-20 25v2l1-1c0-2 8-15 12-19 5-5 8-6 16-6 7 0 8 0 14 4l6 5 8 3c2 0 1-1-1-1L81 8l-7-6h-8L56 3zM113 11l-6 2-5 2-3 1c-2 2 3 1 9-2 9-4 19-4 26 1 4 2 6 4 8 8l3 4-6-11-12-6h-14z"/><path d="M57 13c-6 4-7 5-11 12-4 11-3 25 4 32l2 3-4 3-5 4-2 5-3 6-1 3-7-6c-7-7-8-8-7-15 0-5 3-12 7-19l5-8c0-2-5 6-9 14-4 7-5 9-5 15s0 7 2 9c2 3 5 11 5 15l-1 5h1l7-3c3 0 4 0 4 2l2 3c2 3 2 11 0 11s-4 2-4 5c0 2 0 2-3 1-2 0-3 0-4 3-2 4 0 6 3 7 1 0 2 1 2 4 1 3 1 3 5 4 4 0 4 0 6-3 1-3 2-4 4-4s3-1 3-4c0-2 0-4-2-4v-5c1-4 3-4 11 0 9 5 10 5 18 5 13 2 13 1 13 11s0 11 7 18c4 4 10 6 18 6 6 0 15-3 15-5l3-4c4-4 5-7 5-14s-1-10-5-14l-3-4-4-3c-3-1-3-1-2-3 2-2 3-1 6 2l8 6-1-1c-3-4 2-15 9-20 5-3 6-5 6-14l-1-12v7c0 10 0 10-3 14-2 3-4 5-11 8l-9 4 1-4c1-6-1-14-6-19l-3-2 5-4c6-6 10-15 10-25 0-6-1-8-4-13-4-8-8-11-15-11-5 0-7 1-12 5-7 6-10 19-8 29l1 6-22-3 3-7c3-6 3-7 3-13-1-8-5-17-10-21l-8-3c-4 0-5 0-9 3zm16 2c5 4 8 10 8 20 0 8-1 10-3 15-3 4-4 5-7 5l-15 3c-5 2-10-10-10-21 1-19 15-30 27-22zm55 8c4 4 6 7 8 16l-1 10c-2 8-6 14-11 16-2 2-3 1-12-3l-10-6-1-10c0-9 0-10 2-15 5-8 10-12 17-12 3 0 5 1 8 4zM97 59c11 3 18 6 24 12 9 8 12 17 6 25-4 6-9 9-21 13-11 3-18 3-30-1-19-4-29-10-33-21l-3-8c0-3 5-11 9-14 3-2 12-6 18-7 5-2 25-1 30 1zM35 84l-2 1c-2 1-1 1-2-2s-1-3 1-2l3 3zm102 14-3 2 2-3c3-3 4-2 1 1zm-88 1c2 1 2 2 0 8-2 7-5 11-4 5l1-9c0-6 1-7 3-4zm70 11a294 294 0 0 0-3 13c-2 0-1-14 0-16 2-2 3-1 3 3zm10 1c-1 1-2-1-1-2h1v2zm-5 2 1 5c-1 2-6 5-6 3l1-1c2 0 3-5 2-7v-2l2 2zm-13 7c0 7-2 10-6 10-7 0-9-7-5-11l9-5 2 6zm16 2c-2 1-3 3-3 5 0 3 2 5 5 5 2 0 3-1 4-3 1-1 1-2 2-1 1 2-2 5-8 8l-9 4c-3 2-8 2-9-1-1-2 1-2 3 0 3 2 3 2 6 0 2-2 3-7 0-8l-1-3c0-1 1-3 5-5 5-3 9-4 5-1zm7 0c2 2 1 3-2 1l-2-2c0-2 2-1 4 1zm4-1v1l-2-1 1-1 1 1zm-26 10-4 3c-1-1 1-4 2-4l2 1zm-5 10-1 1c-2-1-2-3-1-3l2 2z"/><path d="M67 45c-4 3 0 11 5 8 3-2 4-5 3-8-2-2-6-3-8 0zM104 49c-3 3 0 9 5 9 2 0 5-3 5-5 0-4-7-7-10-4zM101 120c-2 1-1 7 1 8 3 1 4 1 6-1s3-4 0-6c-1-2-6-3-7-1zM145 31l1 5 2 3-1-4c0-4-2-7-2-4zM147 42l1 4v-3c0-4-1-5-1-1zM150 53l2 3v-1c0-4-2-5-2-2zM22 95l-2 3 2-3 3-3-3 3zM16 103l-2 5 3-3 2-6-3 4zM13 118l2 9c3 6 12 14 16 15s5 7 5 17c-1 9-1 9 1 9s2 0 2-11c-1-11-1-12 1-12l2 2c0 3 3 8 6 11 5 6 17 10 27 10 11 0 22-6 24-13l3-4 6 2h5v4l-3 5v6c2 0 4-5 7-15l5-1c4 0 6-1 9-3l4-4-2 1c-2 3-8 4-17 4h-10l-6-4-7-6c-1-1-3-2-13-2l-17-3-8-2c-3 0-9 4-11 7s-7 3-15-1c-7-4-11-9-13-17-2-9-3-10-3-4zm49 19 7 2c3 2 7 2 13 2 8 0 9 0 11 2 3 4 4 6 2 11-2 7-4 8-14 10-9 1-25-2-30-7-3-2-6-9-5-11 2-8 5-12 10-10l6 1zM143 115l1 10c0 6-1 8-3 12-1 3-3 5-4 5-1 1-1 3 1 2l4-6c2-5 3-8 3-13l-2-9v-1z"/>
                            <path d="M65 121c-4 1-5 4-3 6 2 1 2 1 6-1 7-5 5-9-3-5zM80 122c-5 2-6 7-2 7s8-4 8-6c-1-3-2-3-6-1z"/>
                        </svg>
                        <div className='text-base'>Pygame</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <svg className='fill-black dark:fill-white h-20 w-28 mt-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230 230">
                            <path d="M333 347c34-34 40-83 13-110s-76-21-110 13-24 98-13 110c10 9 76 21 110-13z" transform="translate(-121 -220)"/>
                            <path d="M194 298c-19-19-48-23-64-7-15 16-12 44 8 64 19 20 57 14 64 7 5-5 12-44-8-64z" transform="translate(-121 -220)"/>
                            <path d="M262 339c-3 3-6 6-9 7-3 2-5 2-7 2-3 0-5-1-7-3s-3-5-3-8c0-6 2-12 4-20l8-20 10-4h1l2 1v5l-3 15c-3 5-6 10-12 16v5l1 5c1 2 2 2 4 2l4-1 7-6v4zm-15-15c4-4 6-8 8-12l3-12v-2l-1-1-4 7-6 20zM291 339c-3 3-6 6-9 7-3 2-5 2-8 2-4 0-7-1-9-3s-3-5-3-9c0-5 2-10 6-14 3-5 7-7 12-7l6 2 2 5c0 5-6 9-17 13 1 5 4 7 8 7l5-1 7-6v4zm-20-7c6-2 10-5 10-10 0-3-1-4-3-4s-3 1-5 4-2 6-2 10z" transform="translate(-121 -220)"/>
                            <path d="m332 339-9 8-5 1c-4 0-6-3-6-10l-7 8c-2 2-4 2-7 2-2 0-4-1-5-3-2-2-3-4-3-8 0-3 1-7 3-10 3-4 5-7 9-9l8-3c4 0 6 1 7 4l8-4h2l-3 11-3 12c0 2 1 3 2 3l4-2 5-4v4zm-28 2c2 0 5-2 7-6l3-12-1-4-2-1c-3 0-5 2-8 7l-3 12 1 3 3 1z"  transform="translate(-121 -220)"/>
                        </svg>
                        <div className='text-base'>Scikit-Learn</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <svg className='stroke-black dark:stroke-white fill-black dark:fill-white h-20 w-28 mt-6' xmlns="http://www.w3.org/2000/svg" stroke="gray" viewBox="0 0 180 200">
                            <g stroke-width="2" fill-opacity="0">
                                <circle cx="90" cy="90" r="88"/><circle cx="90" cy="90" r="66"/>
                                <circle cx="90" cy="90" r="44"/><circle cx="90" cy="90" r="22"/>
                                <path d="M90 2v176m62-26L28 28m124 0L28 152m150-62H2"/>
                            </g>
                            <g opacity="1">
                                <path d="M90 90h18a18 18 0 0 0 0-5z"/>
                                <path d="m90 90 34-43a55 55 0 0 0-15-8z"/>
                                <path d="M90 90 74 18a74 74 0 0 0-31 15z"/>
                                <path d="M90 90 32 62a65 65 0 0 0-5 39z"/>
                                <path d="m90 90-33 16a37 37 0 0 0 2 5z"/>
                                <path d="m90 90-10 45a46 46 0 0 0 18 0z"/>
                                <path d="m90 90 46 58a74 74 0 0 0 12-12z"/>
                            </g>
                        </svg>
                        <div className='text-base'>Matplotlib</div>
                    </div>
                </div>
                <h1 className='text-3xl'>Tools</h1>
                <div className='flex justify-center items.center flex-row pb-5 flex-wrap'>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-git-plain'></i>
                        <div className='text-base'>Git</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-github-original'></i>
                        <div className='text-base'>GitHub</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-bash-plain'></i>
                        <div className='text-base'>Bash</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-linux-plain'></i>
                        <div className='text-base'>Linux</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-vscode-plain'></i>
                        <div className='text-base'>VS Code</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-intellij-plain'></i>
                        <div className='text-base'>IntelliJ IDEA</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-pycharm-plain'></i>
                        <div className='text-base'>PyCharm</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-raspberrypi-line'></i>
                        <div className='text-base'>Raspberry Pi</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills