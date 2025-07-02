import { useState, useEffect, useRef } from 'react';



function ToDoList(){


    const handleClickClose = (e) => e.target.style.display = "none";
    const handleClickText = (e) => e.target.textContent = "Good thing";
    const DisLogin = document.querySelector('.add-button');





    const [tasks, setTasks] = useState(["go to the gym", "buy some milk", "study React"]);
    const [newTask, setNewTask] = useState('');
    const [doneTask, setDoneTask] = useState(false);



    function handleInputChange(event) {
        setNewTask(event.target.value);

    }



    function addTask(){

        if(newTask.trim() !== '') {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }

    }

    function deleteTask(index){

        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);

    }

    function moveTaskUp(index){
        if(index > 0) {
            const   updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }

    function moveTaskDown(index){
        if(index < tasks.length - 1) {
            const   updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }

    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
                <button
                className='add-button'
                onClick={addTask}>
                    Add Task +
                </button>
                <input
                type='text'
                placeholder='Enter a ToDo'
                value={newTask}
                onChange={handleInputChange}
                />

            </div>

            <ul className='TileTask-Todo'>
                <h1 >ToDo</h1>
                {tasks.map((task, index)=>
                    <li key={index}>
                        <input className='done-task' type="checkbox" />
                        <span className="text">{task}</span>

                        <button className='move-button'
                        onClick={() => moveTaskUp(index)}>Up⬆</button>

                        <button className='move-button'
                        onClick={() => moveTaskDown(index)}>Down⬇</button>

                        <button className='delete-button'
                        onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                )}
            </ul>
            <ul>
                <h1 className='TileTask-Doing'>Doing</h1>
                {tasks.map((task, index)=> <li key={index}>

                </li>
                )}
            </ul>
            <ul>
                <h1 className='TileTask-Done'>Done</h1>
                {tasks.map((task, index)=> <li key={index}>

                </li>
                )}
            </ul>


        </div>);






}

export default ToDoList;