import React from 'react'
import "../Styles/instructors.css";
import Team_member_card from './Team_member_card';
function Instructorpage() {
    return (
        <div className='instructors'>
            <div className='categories_explore'>
                <h3 className='category_heading'>#Our Instructors</h3>
                <div className='category_title_box'>
                    <h1 className='categoty_title'>Meet Our& <span style={{ color: "tomato" }}>Instructors</span></h1>
                    <span className='category_sub_quote'>
                        There are many variations of passages of courses are available on this website ,but majority have suffered alteration in some form,by injected humour
                    </span>
                </div>
            </div>
   <div className='our_instructors'>
    <Team_member_card name={"Lalith kumar"} role="Teacher and founder "/>
    <Team_member_card name="Gate Ganesh" role ={"Co-founder and Instructor"}/>
    <Team_member_card name="Asus Amarnadh" role="Teacher and Manager"/>

   </div>




        </div>

    )
}

export default Instructorpage