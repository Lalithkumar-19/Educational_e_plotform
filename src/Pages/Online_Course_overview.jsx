import React, { useEffect, useState } from 'react'
import "../Styles/Online_Course_overview.css";
import Img from "../assets/education.jpg";
import videodemo from "../assets/video2.mp4";
import { BookRounded, ShareSharp, TimerRounded } from '@mui/icons-material';
import Navbar from './Navbar';
import Overview_course_desc from '../Pages/overview_course_desc';
import Feautured_courses from './Feautured_courses';
import CuriculmTemp from './CuriculmTemp';
import InstructorTemplate from '../Multiuse_Pages/InstructorTemplate';
import Reviewpage from '../Multiuse_Pages/Reviewpage';
import Contactpage from './FooterPage';
import axios from 'axios';
import { Player } from "react-tuby"
import { useParams } from 'react-router-dom';
import { format, parseISO } from 'date-fns';

function Online_Course_overview() {
    const params = useParams();
    const [course, setCourse] = useState({});

    const [Screen_small, setScreen_small] = useState(false);
    useEffect(() => {
        if (window.innerWidth <= 600) {
            setScreen_small(true);
        }
        else {
            setScreen_small(false);
        }
    }, [])
    const [Active1, setActive1] = useState(true);
    const [Active2, setActive2] = useState(false);
    const [Active3, setActive3] = useState(false);
    const [Active4, setActive4] = useState(false);

    const [page, setPage] = useState(0);

    

    function ChangeBgColor() {
        switch (page) {
            case 1:
                setActive1(true);
                setActive2(false);
                setActive3(false);
                setActive4(false);
                break;
            case 2:
                setActive1(false);
                setActive2(true);
                setActive3(false);
                setActive4(false);
                break;
            case 3:
                setActive1(false);
                setActive2(false);
                setActive3(true);
                setActive4(false);
                break;
            case 4:
                setActive1(false);
                setActive2(false);
                setActive3(false);
                setActive4(true);
                break;


        }

    }


    useEffect(() => {

        ChangeBgColor();
    }, [page]);


    useEffect(() => {
        async function get_course_Details() {
            console.log("invoked...");
            await axios.get("http://localhost:5000/get_single_course?id=" + params.id,).then(data => {
                setCourse({ ...data.data[0] });
                console.log(data.data);
            }).catch(err => {
                console.log(err);
            })
        }
        get_course_Details();
    }, [])
    const parsedDate = parseISO(course.Deadline ? course.Deadline : "19-03-2023");
    function Info_toggler() {
        switch (page) {
            case 1:
                return <Overview_course_desc Course_desc={course.course_description} course_gains={course.learning_objs} course_requirements={course.requirements}/>
            case 2:
                return <CuriculmTemp circulum={course.curriculm} />
            case 3:
                return <InstructorTemplate />
            case 4:
                return <Reviewpage  id={course._id} reviews={course.Reviews}/>
            default:
                return <Overview_course_desc Course_desc={course.course_description} course_gains={course.learning_objs} course_requirements={course.requirements}/>

        }


    };
    return (
        <div className='course_main'>
            <Navbar />
            {course && (
                <>
                    <div className='course_overview'>
                        <div className='course_overView_left'>
                            <header className='course_overView_left_header'>
                                <h1 className="course_overView_left_header_heading" style={{ marginLeft: "0px", overflow: "clip" }}><span style={{ color: "#05386b", padding: "1px" }}>Web Design and graphics Learning Bootcamp 2023</span></h1>
                                <div className='course_details_overview'>
                                    <img className='image_owner' width="60px" height="60px" src={Img} alt='course_creator' />
                                    <div className='course course_createdby'>
                                        <strong className='item_sub_title'>Created by</strong>
                                        <span style={{ color: "black" }} className='course_creator_name'>Lalith kumar</span>
                                    </div>
                                    <div className='course course_category'>
                                        <strong className='item_sub_title'>Categories</strong>
                                        <span style={{ color: "black" }}>{course.category}</span>
                                    </div>
                                    <div className='course course_reviews'>
                                        <strong className='item_sub_title'>Reviews</strong>
                                        <div className='course_reviews_ratings' style={{ color: "black" }}>
                                            <span className="course_review_count">4.97(8.3k+ Reviews)</span>
                                        </div>
                                    </div>

                                </div>
                            </header>
                            {
                                !Screen_small ? (
                                    <>
                                        <div id='option_selectors'>
                                            <button id="selection_buttons button1" style={{ backgroundColor: Active1 ? "coral" : "transparent" }} onClick={() => { setPage(1) }}>Overview</button>
                                            <button id="selection_buttons button2" style={{ backgroundColor: Active2 ? "coral" : "transparent" }} onClick={() => { setPage(2) }}>Curriculum</button>
                                            <button id="selection_buttons button3" style={{ backgroundColor: Active3 ? "coral" : "transparent" }} onClick={() => { setPage(3) }}>Intructor</button>
                                            <button id="selection_buttons button4" style={{ backgroundColor: Active4 ? "coral" : "transparent" }} onClick={() => { setPage(4) }}>Review</button>
                                        </div>
                                        {
                                            Info_toggler()
                                        }</>
                                ) : ""
                            }




                        </div>
                        <div className='course_overView_right'>
                            <div className='price_indicator'>
                                <span className='price'>${course.course_price}
                                    <span className='total_price'>${course.course_actual_price}</span>
                                </span>

                                <span className='offer_cutprice'>70%off</span>
                            </div>

                            <div className='course_video_layout'>

                                <video src={course.course_intro_video?"http://localhost:5000/"+ course.course_intro_video:videodemo} controls  className='video' width={"90%"} height={"200px"}/>
                                {/* <Player dimensions={{ height: "260px", width: "90%" }} pictureInPicture={true} className="video" poster={course.course_thumbnail?course.course_thumbnail:""} src={course.course_intro_video?"http://localhost:5000/"+ course.course_intro_video:videodemo} /> */}
                                <button className='buy_now_button buttons'>
                                    Buy Now
                                </button>
                                <button className='add_wish_button buttons'>
                                    Add to Wishlist
                                </button>


                            </div>

                            <div className='course_video_meta_data'>
                                <div className='course_meta'>
                                    <span className='course_meta_icon'><TimerRounded />
                                        <span className='course_meta_item_name'>Duration</span>
                                    </span>
                                    <span className='meta_value'>{10} Weeks</span>

                                </div>
                            </div>
                            {/* second item */}
                            <div className='course_video_meta_data'>
                                <div className='course_meta'>
                                    <span className='course_meta_icon'><BookRounded />
                                        <span className='course_meta_item_name'>Lectures</span>
                                    </span>
                                    <span className='meta_value'>{course.course_lectures}</span>

                                </div>
                            </div>

                            {/* third item */}
                            <div className='course_video_meta_data'>
                                <div className='course_meta'>
                                    <span className='course_meta_icon'><TimerRounded />
                                        <span className='course_meta_item_name'>Enrolled</span>
                                    </span>
                                    <span className='meta_value'>1992 students</span>

                                </div>
                            </div>

                            {/* fourth item */}
                            <div className='course_video_meta_data'>
                                <div className='course_meta'>
                                    <span className='course_meta_icon'><TimerRounded />
                                        <span className='course_meta_item_name'>Languages</span>
                                    </span>
                                    <span className='meta_value'>{course.course_language}</span>

                                </div>
                            </div>

                            {/* fifth item */}
                            <div className='course_video_meta_data'>
                                <div className='course_meta'>
                                    <span className='course_meta_icon'><TimerRounded />
                                        <span className='course_meta_item_name'>Skill Level</span>
                                    </span>
                                    <span className='meta_value'>{course.skill_level}</span>

                                </div>
                            </div>

                            {/* sixth item */}
                            <div className='course_video_meta_data'>
                                <div className='course_meta'>
                                    <span className='course_meta_icon'><TimerRounded />
                                        <span className='course_meta_item_name'>Deadline</span>
                                    </span>
                                    <span className='meta_value'>
                                        {/* {format(parsedDate, 'MMMM dd, yyyy') */}
                                        29-09-2020
                                    </span>

                                </div>
                            </div>

                            {/* seventh item */}
                            <div className='course_video_meta_data'>
                                <div className='course_meta'>
                                    <span className='course_meta_icon'><TimerRounded />
                                        <span className='course_meta_item_name'>Certificate</span>
                                    </span>
                                    <span className='meta_value'>{course.certificate ? "yes" : "No"}</span>

                                </div>
                            </div>

                            <div className='course_video_meta_data  share_button'>
                                <div className='share_button_inner'>
                                    <span className='share_meta_icon'><ShareSharp />
                                        <span className='share_meta_item_name'>Share This Course</span>
                                    </span>


                                </div>
                            </div>

                            <div className='tags_cloud'>
                                <h1>Tags Cloud</h1>
                                <div className='button_div'>
                                    {
                                        course.Tags && Array.isArray(course.Tags) && course.Tags.map((tag, i) => {
                                            return <button className='tags_button' key={i}>{tag}</button>

                                        })
                                    }
                                    {/* <button className='tags_button'>Web Design</button>
                            <button className='tags_button'>Graphic Design</button>
                            <button className='tags_button'>Ux Design</button>
                            <button className='tags_button'>Software Design</button> */}
                                </div>


                            </div>


                        </div>


                    </div>
                    {
                        !Screen_small ? "" : (
                            <>
                                <div id='option_selectors'>
                                    <button id="selection_buttons button1" style={{ backgroundColor: Active1 ? "coral" : "transparent" }} onClick={() => { setPage(1) }}>Overview</button>
                                    <button id="selection_buttons button2" style={{ backgroundColor: Active2 ? "coral" : "transparent" }} onClick={() => { setPage(2) }}>Curriculum</button>
                                    <button id="selection_buttons button3" style={{ backgroundColor: Active3 ? "coral" : "transparent" }} onClick={() => { setPage(3) }}>Intructor</button>
                                    <button id="selection_buttons button4" style={{ backgroundColor: Active4 ? "coral" : "transparent" }} onClick={() => { setPage(4) }}>Review</button>
                                </div>
                                {
                                    Info_toggler()
                                }</>
                        )
                    }
                    <Feautured_courses heading={"Related Courses"} desc={"Discover top courses from below"} titleBoolean={false} />
                    <Contactpage />
                </>)
            }





        </div>
    )
}

export default Online_Course_overview;