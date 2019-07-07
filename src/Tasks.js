import React, { useState } from 'react'
import uuid from 'uuid/v4';

export default () => {

    const [text, setText] = useState('');
    const [tasks, setTasks] = useState([]);
    const [completed, setCompleted] = useState([]);
const updateTaskText = ({target}) => {
    setText(target.value);
}
const addTask = () => {
    setTasks([...tasks, {text, id: uuid() }]);
}

const completeTask = t => {
    setCompleted([...completed, t])
    setTasks(tasks.filter(task => t.id !== task.id))
}
const deleteTask = t => () => {
    setCompleted(completed.filter(task => t.id !== task.id))
}

    return(
        <div>
<div className="form">
        <input  value={text} onChange={updateTaskText} />
        <button onClick={addTask} >Add</button>
      </div>
      <div className="task-list">
{
    tasks.map(t => <div key={t.id} onClick={() => completeTask(t)} >{t.text}</div>)  
}
      </div>
      <div className="completed-list">
{
    completed.map(t => <div key={t.id}  >{t.text}{' '}<span onClick={deleteTask(t)}>x</span></div>)  
}
      </div>
      </div>
    );
}