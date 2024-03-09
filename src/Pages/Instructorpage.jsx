import React, { useEffect, useState } from 'react'
import "../Styles/instructors.css";
import Team_member_card from './Team_member_card';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
function Instructorpage() {
    const [instructors, setInstructors] = useState([]);
    const Fetch_ins = async () => {
        try {
            const res = await axios.get("http://localhost:5000/fetch_all_ins?limit=6");
            if (res.status === 200) {
                setInstructors(res.data);
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        Fetch_ins();
    }, [])
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
                {Array.isArray(instructors) ? (
                    <>
                        {instructors.map((item, i) => {
                            return <Team_member_card key={i} id={item._id} name={item.instructor_name} role={item.profession} socialmedia={item.social_media} />
                        })}
                    </>
                ) : <CircularProgress />
                }


            </div>




        </div>

    )
}

export default Instructorpage