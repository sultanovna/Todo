import React, { useState } from 'react'
import { BiTrash } from 'react-icons/bi'

export const Todo = ({ todo }) => {
    const [check, setCheck] = useState(false)
  return (
    <li className='flex justify-betwen items-center'>
     <div className="flex items-center gap-3">
      <div className='from-control'>
        <label className="cursor-pointer label">
          <input type="checkbox" checked={check} onChange={event => setCheck(event.target.checked)} className="checkbox checkbox-secondary"/>
        </label>
      </div>
      <span className='text-lg'>{todo.title}</span>
    </div>
    <button className='btn btn-error btn-square btn-sm text-lg'><BiTrash/></button>
    </li>
  )
}
