import React, {useState} from "react";
import classes from "../css/ListItem.module.css";

const ListItem = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [textData, setTextData] = useState(props.text);
    const [isChecked, setIsChecked] = useState(false);
    const [error, setError] = useState('');

    console.log(props.id);

    const handleEdit = () => {
        setEditMode(current => !current);
    }

    const handleChange = (e) => {
        e.preventDefault();
        if (textData === '') {
            setError({
                message: "Value cannot be blank."
            })
            return;
        }
        setTextData(textData);
        setEditMode(false);
    }

    const textChangeHandler = (e) => {
        setTextData(e.target.value);
    }

    const handleError = () => {
        setError(null);
    }

    const handleCheckBox = () => {
        setIsChecked(current => !current);
    }

    return (
        <div className={classes.itemDisplay}>
            {!editMode && (
                <li id={props.id}>
                    <input type='checkbox' checked={isChecked} onClick={handleCheckBox} onChange={props.onChange}/>
                    {!isChecked && (
                        <span>{textData}</span>
                    )}
                    {isChecked && (
                        <span><del>{textData}</del></span>
                    )}
                    <div className="actionButtons">
                        <button onClick={handleEdit}>Edit</button>
                        <button id={props.id + '-delete'} onClick={props.onClickDelete}>Delete</button>
                    </div>
                </li>
            )}
            {editMode && (
                <form onSubmit={handleChange}>
                    <input
                        id="editTextData"
                        type='text'
                        onChange={textChangeHandler}
                        value={textData}
                    />
                    <button type='submit'>Confirm</button>
                </form>
            )}
            {error && (
                <div>
                    <p>{error.message}</p>
                    {handleError}
                </div>
            )}
        </div>
    )
}

export default ListItem;