import React, {useState} from 'react';
import ListItem from './ListItem';
import classes from '../css/TaskList.module.css';

const TaskList = (props) => {
    return (
        <div>
            <ul className={classes.listBacker}>
                {props.listItems.map((item) => (
                    <ListItem key={item.id} id={item.id} text={item.textData} onChange={props.onChange} onClickDelete={props.onClickDelete}/>
                ))}
            </ul>
        </div>
    )
}

export default TaskList;