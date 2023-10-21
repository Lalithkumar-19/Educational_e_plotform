import React from 'react'
import "../Multiuse_Pages/InstructorTemplate.css";
import { BookRounded, Person2Rounded, ReviewsRounded, StarBorderRounded } from '@mui/icons-material';
import Developer from "../assets/developerpic.jpg";

function InstructorTemplate() {
  return (
    <div className='instructorpage'>
      <div className='instructor_main_details'>
        <div className='instructor_main_details_left'>
          <img width="100%" height="100%" style={{ objectFit: "cover", borderRadius: "10px" }} src={Developer} alt='instructor_profile' />
        </div>
        <div className='instructor_main_details_right'>
          <span style={{ fontSize: "20px", fontWeight: "800", opacity: "0.8" }}>Lalith kumar</span>
          <span style={{ fontSize: "14px", color: "black", opacity: "0.8 " }}>Former & CEO</span>
          <p className='about_instructor'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque iste error facere architecto sequi delectus nisi eum, soluta totam amet earum saepe odio officia distinctio, ipsa quam sapiente non dignissimos!</p>
          <div className='main_info'>
            <span className='main_info_item'>
              <span className='info_icon' style={{ color: "coral", marginRight: "10px" }}> <StarBorderRounded /></span>
              <p style={{ color: "black", opacity: "0.8", marginLeft: "2px" }}>4.5 Instructor Rating</p>
            </span>
            <span className='main_info_item'>
              <span className='info_icon' style={{ color: "coral", marginRight: "10px" }}> <ReviewsRounded /></span>
              <p style={{ color: "black", opacity: "0.8", marginLeft: "2px" }}>254 Reviews</p>
            </span>


            <span className='main_info_item'>
              <span className='info_icon' style={{ color: "coral", marginRight: "10px" }}> <Person2Rounded /></span>
              <p style={{ color: "black", opacity: "0.8", marginLeft: "2px" }}>34567 Students</p>
            </span>


            <span className='main_info_item'>
              <span className='info_icon' style={{ color: "coral", marginRight: "10px" }}> <BookRounded /></span>
              <p style={{ color: "black", opacity: "0.8", marginLeft: "2px" }}>50 Courses</p>
            </span>
          </div>

        </div>
      </div>
      <div className='more_info_about_course'>
        <h1 className='first_head' style={{ opacity: "0.8", fontSize: "18px", marginLeft: "0px" }}>
          Great Courses For Beginners
        </h1>
        <p className='about_info' style={{ textAlign: "justify", marginBottom: "19px" }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus minus, placeat, ad labore iusto, enim aliquam reiciendis eveniet ipsam vero voluptatibus porro in praesentium. Dignissimos similique esse quaerat ratione beatae!</p>


        <h1 className='first_head' style={{ opacity: "0.8", fontSize: "18px", marginLeft: "0px" }}>
          More About Phil
        </h1>
        <p className='about_info' style={{ textAlign: "justify", marginBottom: "13px" }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus minus, placeat, ad labore iusto, enim aliquam reiciendis eveniet ipsam vero voluptatibus porro in praesentium. Dignissimos similique esse quaerat ratione beatae!</p>


      </div>


    </div>
  )
}

export default InstructorTemplate;