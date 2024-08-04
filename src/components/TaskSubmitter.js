import React, {useState} from "react";
import classes from "../css/TaskSubmitter.module.css"

const TaskSubmitter = (props) => {
    const [textData, setTextData] = useState('');
    const [error, setError] = useState('');

    const addTaskHandler = (e) => {
        e.preventDefault();
        if (textData === '') {
            setError({
                message: "Blank submissions not accepted."
            });
            return;
        }
        props.onAddTask(textData);
        setTextData('');
    }

    const textChangeHandler = (e) => {
        setTextData(e.target.value);
    }

    const errorHandler = () => {
        setError(null);
    }
    
    return (
        /*
        <form>
            <textarea id="formText" placeholder="Add a task..." />
            <button id="submitButton">Submit</button>
        </form>
        */
       <div className={classes.submitter}>
            <form onSubmit={addTaskHandler}>
                <input
                    id='textDataInput'
                    type='text'
                    value={textData}
                    onChange={textChangeHandler}
                    placeholder='New ToDo List Item...'
                />
                <button type='submit'>Submit</button>
                {error && (
                    <p>
                        {error.message}
                        {errorHandler}
                    </p>
                )}
                {!error && (
                    <p></p>
                )}
            </form>
       </div>
    );
};

export default TaskSubmitter;