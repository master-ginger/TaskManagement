import React, { useState } from 'react';
import TaskForm from './TaskForm';

export default function Task(){
    const [tasks,setTasks]=useState([]);

    const handleSaveTask=(task)=>{
        setTasks([...tasks,task]);
    };

    return(
        <div className='mx-[200px] flex justify-center border-2 border-[#2f2f2f] py-10'>
            <div>
            <div className='font-roboto text-4xl text-center lg:mb-[20px]'>Task Manager</div>
            <TaskForm onSave={handleSaveTask}/>
            <br/>
            <ol className='text-xl' type='I'>
                {tasks.map((task,index)=>(
                    <li key={index} >
                        {task.taskName} - Due: {task.dueDate.toDateString()}
                    </li>
                ))}
            </ol>
            </div>
        </div>
    )
}