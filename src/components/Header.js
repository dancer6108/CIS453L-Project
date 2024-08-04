import React from "react";
import classes from "../css/Header.module.css";

const Header = (props) => {
    return (
        <div className={classes.headerBacking}>
            <h1>{props.tasksDone}/{props.tasksNotDone} Completed.</h1>
        </div>
    )
}

export default Header;