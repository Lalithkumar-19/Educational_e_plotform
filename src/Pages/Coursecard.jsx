import React, { useEffect, useState } from 'react'
import "../Styles/coursecard.css";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import VideocamIcon from '@mui/icons-material/Videocam';
import Aos from 'aos';
import "aos/dist/aos.css";
import { EditSharp, FavoriteOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster, toast } from 'react-hot-toast';


function Coursecard({ animation, b, admin, id }) {
    const [min,setmIn]=useState(false);
    const dispatch = useDispatch();
    const items_in_list = useSelector(state => state.wishList);
    const handle_add_to_wish = () => {
        dispatch({ type: "add_to_wishlist", payload: id });
        toast.success("Added to wishlist ");
    }

    useEffect(() => {
        Aos.init();
        if(items_in_list.includes(id)){
            setmIn(true);
        }
        else{
            setmIn(false);
        }
    
    }, [])

    console.log("key is", id)
    console.log(items_in_list.includes(id), "log");


    console.log("i", items_in_list);
    return (
        <div className='course_box' style={{ backgroundColor: b ? "white" : "" }} data-aos={animation ? "fadedown" : ""}>
            <Toaster position='bottom-right' />
            <div className='course_item item_1'>
                <div className='course_backdrop_pic'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3VZo7OoUdGXqjATB6THSV7BDO_xF1BZbngPWyzP0wfW7zQ345JeqhqK6p8PMwVGEhN-s&usqp=CAU" alt="course_backdrop" className='course_backdrop' />
                </div>
                <div className='course_details'>
                    <div className='course_creator_details'>
                        <img src='https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg' alt="creator_pic" />
                        <span className='course_creator_main_details'>
                            <h3 className='course_creator_name'>Lalith kumar</h3>
                            <p className='course_rating'>4.7 &nbsp; ⭐(95) &nbsp; </p>
                        </span>
                    </div>
                    <span className='course_name'>Full Web development with 12 web resources </span>
                    <div className="course_card_bottom">
                        <span className='course_card_bottom_details course_time'>
                            <span style={{ color: "tomato" }}><AccessTimeFilledIcon /></span>  <span style={{ height: "20px" }}>10 weeks </span>
                        </span>
                        <span className='course_card_bottom_details course_videos'>
                            <span style={{ color: "green" }}><VideocamIcon /></span>  <span style={{ height: "20px", marginLeft: "2px" }}>50 Lessons</span>
                        </span>
                        <span className='course_card_bottom_details course_price' style={{ color: "tomato", fontSize: "17px", fontWeight: "900", height: "20px", alignSelf: "center" }}>
                            $97
                        </span>
                    </div>
                </div>
                <div className='top_header'>
                    <span className='learn_tag'>Beginner</span>
                    {
                        admin ? (
                            <>
                                <EditSharp fontSize='large' sx={{ color: "black", borderRadius: "10px", background: "white" }} />
                            </>
                        ) : (
                            <>
                                <span id='fav_course_icon' onClick={handle_add_to_wish} >
                                    <FavoriteOutlined  sx={{ background: "white", borderRadius: "100%",color:min?"red":"black" }} />
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