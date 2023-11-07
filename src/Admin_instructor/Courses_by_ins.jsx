import React from 'react'
import Coursecard from '../Pages/Coursecard';
import "./courses_by_ins.css";

function Courses_by_ins() {
  return (
    <div className='courses_by_ins'>
        <h1 className='courses_by_ins_title'>Courses by you</h1>
        <section className="course-card">
            <Coursecard admin={true}/>
            <Coursecard admin={true}/>
            <Coursecard admin={true}/>
            <Coursecard admin={true}/>
            <Coursecard admin={true}/>
            <Coursecard admin={true}/>
            <Coursecard admin={true}/>
           
        </section>


    </div>
  )
}

export default Courses_by_ins;