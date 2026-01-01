import React from 'react'

function Button1(props) {
  return (
    <div>
      <button className='w-[210px] h-[60px] rounded-lg border pt-3 pr-5 pb-3 pl-5 gap-3 border-[#454545]'>
        <span className='gap-3 text-[24px] text-[#454545] font-medium '>{props.buttonname}</span>
      </button>
    </div>
  )
}

export default Button1
