import React, { useState } from "react";
import styles from './styles.module.css';

function Form(props) {

    const [name, setName] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (name.length >0) {
            props.addTask(name);
            setName("");
        }
        else {
            setName("");
        }
    }

    function handleChange(e) {
        setName(e.target.value);
    }

  return (
    <form onSubmit={handleSubmit} >

      <div className={styles.InputField}>
        <input
          type="text"
          id="new-todo-input"
          className={styles.input}
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
        <button type="submit" className={styles.addBtn}>
          <div>+</div>
        </button>
      </div>
    </form>
  );
}

export default Form;