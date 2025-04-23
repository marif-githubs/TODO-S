import { useRef, useState } from 'react'
import './inputfields.css'
import { useContext } from 'react';
import { data } from '../store/data.jsx';
import { MdAddShoppingCart } from "react-icons/md";

function Inputfields() {

    const { handleAddTodo } = useContext(data);
    let todo = useRef()
    let date = useRef()
    const updateTodoList = () => {
        if (todo.current.value && date.current.value) {
            let item = {
                todo: todo.current.value,
                deadline: date.current.value
            };
            handleAddTodo(item);
            todo.current.value = "";
            date.current.value = "";
        }
    }

    return (
        <>
            <div classtodo='div'>
                <input id='workitem' type="text" placeholder="Enter Todo here" ref={todo} />
                <input id="workdate" type="date" placeholder='dd/mm/yyyy' ref={date} />
                <button onClick={() => updateTodoList()} >
                    <MdAddShoppingCart />
                </button>
            </div>
        </>
    )
}

export default Inputfields