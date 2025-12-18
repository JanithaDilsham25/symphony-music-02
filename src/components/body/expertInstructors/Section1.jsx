import React from 'react'
import Card1 from './Card1'

function Section1(icon, topic, para ,index) {
  return (
    <div className='gap-5 w-[1060px] lg:h-64 flex flex-col  lg:mb-0 items-center justify-center  lg:flex-row  '>
      <Card1 icon="src\assets\Frame 41.png" topic="Expert Instructors" para="Learn from professional musicians with years of teaching experience" index="1"/>
      <Card1 icon="src\assets\Frame 41.png" topic="Expert Instructors" para="Learn from professional musicians with years of teaching experience" index="2"/>
     
    </div>
  )
}

export default Section1
