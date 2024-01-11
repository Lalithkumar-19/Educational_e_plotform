import React, { useEffect, useState } from 'react'
import "../Styles/coursecard.css";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import VideocamIcon from '@mui/icons-material/Videocam';
import Aos from 'aos';
import "aos/dist/aos.css";
import { DeleteForever, EditSharp, FavoriteOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Coursecard({ animation, b, admin, id, course_thumnail, course_name, course_duration, course_price, course_lectures, skill_level, }) {
    const [min, setmIn] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const items_in_list = useSelector(state => state.wishList);
    
    const handle_add_to_wish = () => {
        dispatch({ type: "add_to_wishlist", payload: id });
        toast.success("Added to wishlist ");
    }

    useEffect(() => {
        Aos.init();
        if (items_in_list.includes(id)) {
            setmIn(true);
        }
        else {
            setmIn(false);
        }

    }, [])

    const View_course = () => {
        navigate("/courses/overview/" + id);
    }

    const handle_delete_course = async () => {
        try {
            const res = await axios.put("http://localhost:5000/delete_course?token=" + localStorage.getItem("instructor-token") + "&id=" + id);
            if (res.status === 200) {
                toast.success("Deleted successfully");
                window.location.reload();
            }
            else {
                toast.error("Error occured while reaching to our servers");
            }

        } catch (error) {
            toast.error("Error occured while deleting...")

        }
    }

    return (
        <div className='course_box' style={{ backgroundColor: b ? "white" : "" }} data-aos={animation ? "fadedown" : ""} >
            <Toaster position='bottom-right' />
            <div className='course_item item_1'>
                <div className='course_backdrop_pic'>
                    <img src={course_thumnail} alt="course_backdrop" className='course_backdrop' />
                </div>
                <div className='course_details'>
                    <div className='course_creator_details'>
                        <img src='https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg' alt="creator_pic" />
                        <span className='course_creator_main_details'>
                            <h3 className='course_creator_name'>Lalith kumar</h3>
                            <p className='course_rating'>4.7 &nbsp; ⭐(95) &nbsp; </p>
                        </span>
                    </div>
                    <span className='course_name' onClick={View_course}>{course_name} </span>
                    <div className="course_card_bottom">

                        <span className='course_card_bottom_details course_time'>
                            <span style={{ color: "tomato" }}><AccessTimeFilledIcon /></span>  <span style={{ height: "20px" }}>{course_duration && course_duration.length} {course_duration ? (course_duration.field === "W" ? "Weeks" : "Years") : ""} </span>
                        </span>
                        <span className='course_card_bottom_details course_videos'>
                            <span style={{ color: "green" }}><VideocamIcon /></span>  <span style={{ height: "20px", marginLeft: "2px" }}>{course_lectures} Lessons</span>
                        </span>
                        <span className='course_card_bottom_details course_price' style={{ color: "tomato", fontSize: "17px", fontWeight: "900", height: "20px", alignSelf: "center" }}>
                            ${course_price}
                        </span>
                    </div>
                </div>
                <div className='top_header'>
                    <span className='learn_tag'>{skill_level}</span>
                    {
                        admin ? (
                            <>
                                <span onClick={handle_delete_course}><DeleteForever fontSize='large' sx={{ color: "black", borderRadius: "10px", background: "white" }} /></span>
                            </>
                        ) : (
                            <>
                                <span id='fav_course_icon' onClick={handle_add_to_wish} >
                                    <FavoriteOutlined sx={{ background: "white", borderRadius: "100%", color: min ? "red" : "black" }} />
                                </span>

                            </>
                        )
                    }
                </div>

            </div>
        </div>
    )
}

export default Coursecard;