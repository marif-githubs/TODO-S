import { useState } from 'react'
import './inputfields.css'
import { MdAddShoppingCart } from "react-icons/md";

function Inputfields({ list, handleAddTodo }) {

    let [newTodo, setTodo] = useState('')
    let [newdeadline, setDeadline] = useState('')

    const updateTodoList = (newTodo, newdeadline) => {
        if (newTodo != "" && newdeadline != "") {
            let item = { todo: newTodo, deadline: newdeadline }
            // let newlist = [...list, item]
            handleAddTodo((currVale)=>[...currVale,item])
            setTodo('')
            setDeadline('')
        }
    }

    
    return (
        <>
            <div className='div'>
                <input id='workitem' type="text" placeholder="Enter Todo here" value={newTodo} onChange={(e) => { setTodo(e.target.value) }} />
                <input id="workdate" type="date" placeholder='dd/mm/yyyy' value={newdeadline} onChange={(e) => { setDeadline(e.target.value) }} />
                <button onClick={() => updateTodoList(newTodo, newdeadline)} >
                    <MdAddShoppingCart />
                </button>
            </div>
        </>
    )
}

export default Inputfields