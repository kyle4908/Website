import React from 'react'
import Project from './Project'

const Projects = () => {
    return (
        <div className='w-full h-screen bg-sky-200 dark:bg-dark-back flex flex-col items-center'>
            <div className='w-full flex flex-col bg-sky-200 dark:bg-dark-back items-center'>
                <div className='flex w-5/6 justify-center mt-40 items-end flex-wrap'>
                    <Project Name="Tic-Tac-Toe" Link="https://github.com/kyle4908/Tic-tac-toe" Description = "Tic-Tac-Toe with an AI opponent made in Python with a user interface designed using the Pygame library." Stack="Python, Pygame"/>
                    <Project Name="Connect Four" Link="https://github.com/kyle4908/Connect-Four" Description = "2-player Connect Four game made in Java with a user interface designed using Java 2D Graphics." Stack="Java, Java Swing"/>
                    <Project Name="Surgical Tool Sterilization" Link="https://kyle49008.wixsite.com/1p13portfolio/p-2" Description = "Team project to create a system that sorts containers housing surgical tools into autoclaves for sterilization. Developed code using Python to allow a Q-arm to detect the containers and sort them into the appropriate autoclave." Stack="Python"/>
                    <Project Name="Recyclable Sorting" Link="https://kyle49008.wixsite.com/1p13portfolio/p-3" Description = "Team Project to create a system that could detect different kinds of waste materials and sort them into different waste bins. Developed code using Python to detect the type of waste picked up, and sort it into the appropriate bin." Stack="Python"/>
                    <Project Name="Logistic Regression Breast Cancer Prediction" Link="https://github.com/kyle4908/Logistic-Regression-Breast-Cancer" Description="Uses scikit-learn to create a logistic regression model that can predict whether a person has breast cancer or not. Uses data from the scikit-learn breast cancer dataset to make predictions." Stack="Python, Matplotlib, Pandas, NumPy, Scikit-Learn"/>
                </div>
            </div>
        </div>
    )
}

export default Projects