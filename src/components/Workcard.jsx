import './Workcard.css'
import { MdDeleteForever } from "react-icons/md";

function Workcard({ items ,onDeleteTodo}) {

    return (<>
        {items.map((item) => (
            <div className="work-card" key = {item.todo}>
                <p className='first-element'>{item.todo}</p>
                <p >{item.deadline}</p>
                <button className='btn' onClick={() => onDeleteTodo(item.todo)} >
                <MdDeleteForever />
                </button>
            </div>
        ))}

    </>)
}

export default Workcard