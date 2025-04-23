import './Workcard.css'
import { MdDeleteForever } from "react-icons/md";
import { useContext } from 'react';
import { data } from '../store/data.jsx';

function Workcard() {
    const { list, handleDeleteTodo } = useContext(data);

    return (<>
        {list.map((item) => (
            <div className="work-card" key={item.id}>
                <p className='first-element'>{item.todo}</p>
                <p >{item.deadline}</p>
                <button className='btn' onClick={() => handleDeleteTodo(item.id)} >
                    <MdDeleteForever />
                </button>
            </div>
        ))}

    </>)
}

export default Workcard