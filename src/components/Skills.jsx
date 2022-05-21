import React from 'react'

const Skills = () => {
    return (
        <div className='w-full h-auto bg-sky-200 dark:bg-dark-back flex flex-col'>
            <div className='flex justify-center h-auto mt-40 items-center flex-col space-y-2'>
                <h1 className='text-3xl'>Programming Languages</h1>
                <div className='flex justify-center items.center pb-5 flex-wrap'>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-java-plain'></i>
                        <div className='text-1xl'>Java</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-c-plain'></i>
                        <div className='text-1xl'>C</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-cplusplus-plain'></i>
                        <div className='text-1xl'>C++</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-python-plain'></i>
                        <div className='text-1xl'>Python</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-javascript-plain'></i>
                        <div className='text-1xl'>Javascript</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-matlab-plain'></i>
                        <div className='text-1xl'>MATLAB</div>
                    </div>
                </div>
                <h1 className='text-3xl'>Web Development</h1>
                <div className='flex justify-center items.center flex-row pb-5 flex-wrap'>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-html5-plain'></i>
                        <div className='text-1xl'>HTML</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-css3-plain'></i>
                        <div className='text-1xl'>CSS</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-javascript-plain'></i>
                        <div className='text-1xl'>Javascript</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-react-original'></i>
                        <div className='text-1xl'>React</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-tailwindcss-plain'></i>
                        <div className='text-1xl'>Tailwind CSS</div>
                    </div>
                </div>
                <h1 className='text-3xl'>Data Science</h1>
                <div className='flex justify-center items.center flex-row pb-5 flex-wrap'>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-numpy-original'></i>
                        <div className='text-1xl'>NumPy</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-pandas-original'></i>
                        <div className='text-1xl'>Pandas</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-tensorflow-original'></i>
                        <div className='text-1xl'>TensorFlow</div>
                    </div>
                </div>
                <h1 className='text-3xl'>Tools</h1>
                <div className='flex justify-center items.center flex-row pb-5 flex-wrap'>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-git-plain'></i>
                        <div className='text-1xl'>Git</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-github-original'></i>
                        <div className='text-1xl'>GitHub</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-bash-plain'></i>
                        <div className='text-1xl'>Bash</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-linux-plain'></i>
                        <div className='text-1xl'>Linux</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-vscode-plain'></i>
                        <div className='text-1xl'>VS Code</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-intellij-plain'></i>
                        <div className='text-1xl'>IntelliJ IDEA</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-pycharm-plain'></i>
                        <div className='text-1xl'>PyCharm</div>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <i className='devicon-raspberrypi-line'></i>
                        <div className='text-1xl'>Raspberry Pi</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills