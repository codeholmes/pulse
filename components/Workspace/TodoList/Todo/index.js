import React from 'react'
import styles from './styles.module.css';

export default function Todo(props) {
    return (
        <li>
            <div>
              <label className={styles.taskList} htmlFor={props.id}>
                {props.name}
              </label>
                <div className="btn-group">
                    <button type="button" className={styles.DeleteBtn} onClick={()=>props.deleteTask(props.id)}>
                        <div className={styles.Minus}></div>
                    </button>
                </div>
            </div>
        </li>
    );
}