import React from 'react';
import {MdCheckBoxOutlineBlank, MdRemoveCircleOutline, MdCheckBox} from 'react-icons/md';
import '../css/TodoListItem.css';

const TodoListItem = (props) => {
    const {id,text, checked, date} = props.todo;
    return(
        <div className="TodoListItem">
            <div className={checked ? 'checkbox checked' : 'checkbox'}
                onClick={()=>props.onToggle(id)}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
            </div>
            <div className="text">{text}{date}</div>
            <div className="remove" onClick={() =>{props.onRemove(id)}}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    )
}

export default TodoListItem;