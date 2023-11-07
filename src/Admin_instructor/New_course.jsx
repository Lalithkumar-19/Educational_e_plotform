import React from 'react'
import "./new_course.css"
import Stepper from './Stepper'
function New_course() {

    return (
        <div className='new_course'>
            <h1 className='new_course_title'>New course</h1>
            <section>
                <Stepper />
            </section>

        </div>
    )
}

export default New_course