import React, { useEffect, useState } from 'react'
import Coursecard from '../Pages/Coursecard';
import "../Admin_instructor/courses_by_ins.css";
import { toast } from 'react-hot-toast';
import axios from 'axios';

function All_courses() {
  const [all_courses, setAll_courses] = useState([]);
  async function fetch_courses() {
    try {
      const response = await axios.get("http://localhost:5000/get_all_courses?token=" + localStorage.getItem("instructor-token"));
      if (response.status === 200) {
        setAll_courses([...response.data]);
      }
      else {
        toast.error("internal error occured");
      }
    } catch (error) {
      console.log(error);
      toast.error("error occured , please try later ");
    }

  }
  useEffect(() => {
    fetch_courses();
  }, []);

  return (
    <div className='courses_by_ins'>
      <h1 className='courses_by_ins_title'>Courses by you</h1>
      <section className="course-card">

        {
          all_courses.length > 0 ?all_courses.map((course, index) => {
            return <Coursecard admin={true} key={index}  course_name={course.course_name} course_duration={course.course_duration} course_lectures={course.course_lectures} course_price={course.course_price} course_thumnail={course.course_thumbnail.split(":")[0]==="https"?course.course_thumbnail:"http://localhost:5000/"+course.course_thumbnail} skill_level={course.skill_level} id={course._id}/>

          }):"No courses are there,or not fetched "
      }
      </section>


    </div>
  )
}

export default All_courses;