import React from 'react'
import "./Course_card_line_align.css";
import developerpic from "../assets/developerpic.jpg";
import VideocamIcon from '@mui/icons-material/Videocam';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Course_card_line_align() {
    return (
        <div className='course_card_align_two'>
            <div className='course_backdrop'>
                <img src={developerpic} alt="backdrop_of_course" width={"100%"} height={"100%"} style={{ borderRadius: "10px" }} />
                <span className='level_of_learning'>Beginner</span>
            </div>
            <div className='course_card_align_two_details'>
                <div className='course_creator_main_details'>
                    <div className="course_creator_pic_div">
                        <img src={developerpic} alt="creator_pic" width={"100%"} height={"100%"} style={{ borderRadius: "100%" }} />
                    </div>

                    <span className='creator_name'>Lalith Kumar</span>
                </div>
                <h1 className='course_name'>Full Web Designing Course for beginners</h1>
                <div className='course_meta_details'>
                    <span className='item item1'>
                        <span className='item_icon' style={{ alignContent: "center", color: "coral" }}><AccessTimeIcon /></span>
                       <span className='item_name'> 11 Weeks</span>
                    </span>
                    {/* 2ndone */}
                    <span className='item2 item'>
                        <span className='item_icon' style={{ color: "green" }}><VideocamIcon /></span>
                        <span className="item_name">11 Weeks</span>
                    </span>
                    {/* 3rd one */}
                    <span className='item3 item' style={{ marginRight: "3px" }}>
                       <span className="item_name "> 4.4 🌟(50)</span>
                    </span>
                </div>
                <div className='course_price_and_buy_button_div'>
                    <span className='course_price'>$89</span>
                    <button className='buy_now' id='button' style={{ marginRight: "3px" }}>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Course_card_line_align