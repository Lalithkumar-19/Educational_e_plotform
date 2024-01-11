import React, { useEffect, useState } from 'react'
import "../Styles/Courseplayer.css";
import video from "../assets/video2.mp4";
import { PlayCircle, SearchRounded } from '@mui/icons-material';
import pic from "../assets/developerpic.jpg"
import Forum from '../Multiuse_Pages/Forum';
import Notice_board from '../Multiuse_Pages/Notice_board';
import Assignments from '../Multiuse_Pages/Assignments';
import Course_videos from '../Multiuse_Pages/Course_videos';
import Navbar from './Navbar';
import Contactpage from '../Pages/FooterPage';
import { Player } from 'react-tuby';
import axios from 'axios';



function Courseplayer({ }) {
    const id = "65641b6ef8e65cfa8fe8bb7f";
    const [Active1, setActive1] = useState(true);
    const [Active2, setActive2] = useState(false);
    const [Active3, setActive3] = useState(false);
    const [Active4, setActive4] = useState(false);

    const [course, setCourse] = useState({});
    const [current_video, setCurrent_video] = useState(course.course_intro_video);
    const [page, setPage] = useState(0);
    const [small_screen, setSmallscreen] = useState(false);

    function Info_toggler() {
        switch (page) {
            case 1:
                return <Forum />
            case 2:
                return <Notice_board notice_board={course.noticeboard} />
            case 3:
                return <Assignments assignments={course.assignments} />
            case 4:
                return (
                    <>
                        <h1 style={{ marginLeft: "0px" }}>Post a Question</h1>
                        <form>
                            <label for="fname" style={{ color: "coral", fontWeight: "800", fontSize: "15px" }}>Question:</label><br />
                            <input type="text" style={{ width: "300px", height: "40px", border: "none", outline: "none" }} placeholder="Enter your Question" /><br />
                            <button id='button' style={{ padding: "13px", marginTop: "9px", width: "100px" }}>Submit</button>
                        </form>

                    </>
                )


            default:
                return <Forum />
        }


    };

    useEffect(() => {
        async function get_course_Details() {
            console.log("invoked...");
            await axios.get("http://localhost:5000/get_single_course?id=" + id,).then(data => {
                setCourse({ ...data.data[0] });
                console.log(data.data);
            }).catch(err => {
                console.log(err);
            })
        }
        get_course_Details();
    }, [])

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
        if (window.innerWidth <= 400) {
            setSmallscreen(true);
        }
        else {
            setSmallscreen(false);
        }
    })


    return (
        <div className='courseplayer'>
            <Navbar />
            <div className='course_player_main'>
                <section className='courseplayer_left'>
                    <div className='course_video_player'>
                        <Player src={current_video ? current_video : video} pictureInPicture />
                    </div>
                    <section className='course_meta_details'>
                        <div className='course_creator_details'>
                            <div className='course_creator_pic'>
                                <img src={pic} width={"100%"} style={{ objectFit: "cover", borderRadius: "100%" }} height="100%" alt="course_creator_details" />
                            </div>
                            <div className='course_creator_name_role'>
                                <span className='course_creator_name'>
                                    Lalith Kumar
                                </span>
                                <span className='course_creator_role'>
                                    Creative Director,UI/UX Designer
                                </span>
                            </div>
                        </div>
                        <div className='course_reviews'>
                            <span className='course_reviews_heading'>
                                Review
                            </span>
                            <span className='course_ratings'>
                                4.97 (4.9K+ Reviews) *****
                            </span>
                        </div>
                    </section>

                    {!small_screen && (
                        <section className='course_main_headlines' id='course_main_headlines'>
                            <span className='course_headline'>How to create your first digital product</span>
                            <p className='course_main_desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam aut quam quaerat maiores modi nihil deleniti? Consequuntur voluptatibus perspiciatis, eligendi sit laboriosam delectus minus aspernatur magni a dolores quibusdam libero rerum. Ab, veniam optio hic dolores veritatis dolorem alias.</p>
                            <div className='selector_buttons' id='vidoe_Player_selection_buttons'>
                                <button id="buttons_in_course_video" style={{ backgroundColor: Active1 ? "coral" : "transparent" }} onClick={() => { setPage(1) }}>Forum</button>
                                <button id="buttons_in_course_video" style={{ backgroundColor: Active2 ? "coral" : "transparent" }} onClick={() => { setPage(2) }}>Noticeboad</button>
                                <button id="buttons_in_course_video" style={{ backgroundColor: Active3 ? "coral" : "transparent" }} onClick={() => { setPage(3) }}>Assignments</button>
                                <button id="buttons_in_course_video" style={{ backgroundColor: Active4 ? "coral" : "transparent" }} onClick={() => { setPage(4) }}>Post Question</button>
                            </div>
                            <div className='search_bar_for_questions' id='search_bar_for_questions'>
                                <span className='search_icon'><SearchRounded /></span>
                                <input className='search_input' type='text' placeholder='Search Questions...' />
                            </div>

                            {
                                Info_toggler()
                            }


                        </section>

                    )}


                </section>

                <section className='courseplayer_right'>
                    <Course_videos curiculm={course.curriculm} curr_video={setCurrent_video} />
                    {
                        small_screen && (
                            <section className='course_main_headlines' id='course_main_headlines'>
                                <span className='course_headline'>How to create your first digital product</span>
                                <p className='course_main_desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam aut quam quaerat maiores modi nihil deleniti? Consequuntur voluptatibus perspiciatis, eligendi sit laboriosam delectus minus aspernatur magni a dolores quibusdam libero rerum. Ab, veniam optio hic dolores veritatis dolorem alias.</p>
                                <div className='selector_buttons' id='vidoe_Player_selection_buttons'>
                                    <button id="buttons_in_course_video" style={{ backgroundColor: Active1 ? "coral" : "transparent" }} onClick={() => { setPage(1) }}>Forum</button>
                                    <button id="buttons_in_course_video" style={{ backgroundColor: Active2 ? "coral" : "transparent" }} onClick={() => { setPage(2) }}>Noticeboad</button>
                                    <button id="buttons_in_course_video" style={{ backgroundColor: Active3 ? "coral" : "transparent" }} onClick={() => { setPage(3) }}>Assignments</button>
                                    <button id="buttons_in_course_video" style={{ backgroundColor: Active4 ? "coral" : "transparent" }} onClick={() => { setPage(4) }}>Post Question</button>
                                </div>
                                <div className='search_bar_for_questions' id='search_bar_for_questions'>
                                    <span className='search_icon'><SearchRounded /></span>
                                    <input className='search_input' type='text' placeholder='Search Questions...' />
                                </div>

                                {
                                    Info_toggler()
                                }


                            </section>

                        )
                    }
                </section>
            </div>
            <Contactpage />

        </div>
    )
}

export default Courseplayer