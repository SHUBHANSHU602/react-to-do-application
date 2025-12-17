import React, { useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import List from './list'

const Todo = () => {
  const [todolist, settodolist] = useState([])
  const inputref = useRef()

  const add = () => {
    const inputtext = inputref.current.value.trim()
    if (inputtext === '') return

    const newtodo = {
      id: Date.now(),
      text: inputtext,
      iscomplete: false,
    }

    settodolist(prev => [...prev, newtodo])
    inputref.current.value = ""
  }

  return (
    <div className='bg-white w-3/12 min-h-100 rounded-3xl p-3'>
      <div className='flex gap-2 p-2'>
        <img src={todo_icon} alt="" className='w-8' />
        <h1 className='text-3xl font-semibold'>To-Do-App</h1>
      </div>

      <div className='bg-gray-300 flex rounded-full items-center my-7'>
        <input
          ref={inputref}
          className='p-3 text-2xl flex-1 bg-transparent border-0  outline-none h-14 pl-6 pr-2 placeholder:text-slate-600'
          type="text"
          placeholder='Enter Your Task'
        />
        <button
          onClick={add}
          className='bg-amber-400 p-3 rounded-full h-14 w-20 font-medium cursor-pointer'
        >
          ADD
        </button>
      </div>

      <div>
        {todolist.map((hey) => (
          <List key={hey.id} text={hey.text} id={hey.id} iscomplete={hey.iscomplete}                    />
        ))}
      </div>
    </div>
  )
}

export default Todo

