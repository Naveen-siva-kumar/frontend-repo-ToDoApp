import React from 'react'
import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"

const ToDo = ({text,doneToDo,updateMode, deleteToDo}) => {
  return (
    
    <div className='todo'>
        <input className="check-box" type="checkbox" onClick={doneToDo} />
        
        <div className='text'>{text}</div>
        
        <div className='icons'>
            <BiEdit className="icon" onClick={updateMode} />
            <AiFillDelete className="icon" onClick={deleteToDo} />
        </div>
    </div>
    
    
  )
}

export default ToDo