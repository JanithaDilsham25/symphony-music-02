import React from 'react'

function Button1(props) {
  return (
    <div>
      <button className='w-4/12 h-[45px] rounded-lg border gap-3 border-[#454545]'>
        <span className='gap-3 text-[1rem] md:text-[1.25rem] lg:text-[1rem] text-[#454545] font-medium '>{props.buttonname}</span>
      </button>
    </div>
  )
}

export default Button1
