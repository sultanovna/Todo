import React from 'react'
import { TodoLayout } from '../comonents/todo/TodoLayout'

export const Home = () => {
  return (
    <div className='flex items-center flex-col'>
    <h1 className='text-5xl'>Your To Do</h1>
    <TodoLayout/>
    </div>
  )
}
