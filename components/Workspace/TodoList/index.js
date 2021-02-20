import React, { useState } from 'react';
import {nanoid} from "nanoid";
import Todo from './Todo';
import Form from './Form';
import styles from './styles.module.css';

function TodoList(props) {

    const [tasks, setTasks] = useState(props.tasks);

    function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
    }

    const taskList = tasks.map(task => 
    <Todo id={task.id} name={task.name} completed={task.completed} key={task.key} deleteTask={deleteTask}/>);

    function addTask(name) {
        alert(name);
      }

      function addTask(name) {
        const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
        setTasks([...tasks, newTask]);
      }
      
      const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
    const headingText = `${taskList.length} ${tasksNoun} remaining`;


    return (
      <div className="">
                <h2 className={styles.taskStatus}>
          {headingText}
        </h2>
                <ul
          role="list"
          className={styles.taskList}
          aria-labelledby="list-heading"
        >
        {taskList}
        </ul>
        <Form addTask={addTask}/>

      </div>
    );
  }

  export default TodoList;