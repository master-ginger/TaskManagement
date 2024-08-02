import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function TaskForm({onSave}){
    const [taskName,setTaskName]=useState('')
    const [dueDate,setDueDate]=useState(new Date());
    const handleSubmit=(e)=>{
        e.preventDefault();
        onSave({taskName,dueDate});
        setTaskName('');
        setDueDate(new Date());
    }
    return(
        <div className='text-lg text-black'>
            <form onSubmit={handleSubmit}>
                <input className='mr-5' type='text' placeholder='Task Name' value={taskName} onChange={(e)=>setTaskName(e.target.value)} required/>
                <DatePicker 
                    selected={dueDate}
                    onChange={(date)=>setDueDate(date)}
                    dateFormat="MMMM d, yyyy"
                
                />
                <button type='submit' className='ml-3 bg-[#007bff] px-4 py-1 rounded-[4px] text-white '>Save Task</button>
            </form>

        </div>
    )
}