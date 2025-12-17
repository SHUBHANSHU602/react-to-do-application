import React from 'react'

import tick from '../assets/tick.png'
import deleteIco from '../assets/delete.png'

const List = ({text}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div className='flex flex-1 items-center cursor-pointer'>
        <img src={tick} className='w-7' alt="" />
        <p className='text-slate-700 ml-4 text-[17px]'>{text}</p>
      </div>
      <div>
        <img src={deleteIco} className='w-3.5 cursor-pointer' alt="" />
      </div>
    </div>
  )
}

export default List
