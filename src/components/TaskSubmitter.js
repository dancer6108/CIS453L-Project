import React, {useState} from "react";
import classes from "../css/TaskSubmitter.module.css"

const TaskSubmitter = (props) => {
    const [textData, setTextData] = useState('');
    const [error, setError] = useState('');

    const addTaskHandler = (e) => {
        e.preventDefault();
        setError('');
        if (textData === '') {
            setError('Blank submissions not accepted.');
            return;
        }
        props.onAddTask(textData);
        setTextData('');
    }
    
    return (
       <div className={classes.submitter}>
            <form onSubmit={addTaskHandler}>
                <input
                    id='textDataInput'
                    type='text'
                    value={textData}
                    onChange={(e) => setTextData(e.target.value)}
                    placeholder='New ToDo List Item...'
                />
                <button type='submit'>Submit</button>
            </form>
            {error ? <div className={classes.errorDiv}><span id='errorMessage'>{error}</span></div> : <div className="errorDiv"><br /></div>}
       </div>
    );
};

export default TaskSubmitter;