import React from 'react'
import { TodoFrom } from './TodoFrom'
import { TodoList } from './TodoList'

export const TodoLayout = () => {
  return (
    <div className='w-2/6 bg-base-300 p-10 rounded-lg shadow-md'>
    <TodoFrom/>
    <div className='divider'></div>
    <TodoList/>
    </div>
  )
}
