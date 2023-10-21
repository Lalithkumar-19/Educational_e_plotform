import React, { useEffect,useState } from 'react'
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


function Courseplayer() {
    const [play, setPlay] = useState(false);
    const [Active1, setActive1] = useState(true);
    const [Active2, setActive2] = useState(false);
    const [Active3, setActive3] = useState(false);


    const [page, setPage] = useState(0);

    function Info_toggler() {
        switch (page) {
            case 1:
                return <Forum />
            case 2:
                return <Notice_board />
            case 3:
                return <Assignments />

            default:
                return <Forum />
        }


    };

    function ChangeBgColor() {
        switch (page) {
            case 1:
                setActive1(true);
                setActive2(false);
                setActive3(false);
                break;
            case 2:
                setActive1(false);
                setActive2(true);
                setActive3(false);
                break;
            case 3:
                setActive1(false);
                setActive2(false);
                setActive3(true);
                break;

        }

    }



    useEffect(() => {

        ChangeBgColor();
        window.addEventListener("DOMContentLoaded", () => {
            const video = document.getElementById("video");
            const player = document.getElementById("player_icon");
            setVideo(video);
            setPlay(player);

        })


    }, [page])


    return (
        <div className='courseplayer'>
            <Navbar />
            <div className='course_player_main'>
                <section className='courseplayer_left'>
                    <div className='course_video_player'>
                        <video controls={false} width={"100%"} style={{ borderRadius: "20px",margin:"0px" }} height={"100%"} className='video' id='video'>
                            <source width={"100%"} src={video} type='video/mp4'/>
                            
                        </video>
                        <div className='player_options_overlay' id="player_div">
                            <span className='player_icon' id='play_icon'
                                onClick={() => {
                                    if (play) {
                                        let video_playing = document.getElementById("video");
                                        video_playing.play();
                                        video_playing.controls = true;
                                        document.getElementById("play_icon").style.display = "none";
                                        document.getElementById("player_div").addEventListener("click", () => {
                                            video_playing.pause();
                                            setPlay(false);

                                        })
                                    }
                                    else {
                                        let video_playing = document.getElementById("video");
                                        video_playing.pause();
                                        video_playing.controls = false;
                                        document.getElementById("play_icon").style.display = "flex";
                                        document.getElementById("player_div").addEventListener("click", () => {
                                            setPlay(true);
                                            video_playing.play();

                                        })
                                    }



                                }} >
                                <PlayCircle fontSize='large' />

                            </span>

                        </div>
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


                    <section className='course_main_headlines' id='course_main_headlines'>
                        <span className='course_headline'>How to create your first digital product</span>
                        <p className='course_main_desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam aut quam quaerat maiores modi nihil deleniti? Consequuntur voluptatibus perspiciatis, eligendi sit laboriosam delectus minus aspernatur magni a dolores quibusdam libero rerum. Ab, veniam optio hic dolores veritatis dolorem alias.</p>
                        <div className='selector_buttons' id='vidoe_Player_selection_buttons'>
                            <button id="buttons_in_course_video" style={{ backgroundColor: Active1 ? "coral" : "transparent" }} onClick={() => { setPage(1) }}>Forum</button>
                            <button id="buttons_in_course_video" style={{ backgroundColor: Active2 ? "coral" : "transparent" }} onClick={() => { setPage(2) }}>Noticeboad</button>
                            <button id="buttons_in_course_video" style={{ backgroundColor: Active3 ? "coral" : "transparent" }} onClick={() => { setPage(3) }}>Assignments</button>
                        </div>
                        <div className='search_bar_for_questions' id='search_bar_for_questions'>
                            <span className='search_icon'><SearchRounded /></span>
                            <input className='search_input' type='text' placeholder='Search Questions...' />
                        </div>

                        {
                            Info_toggler()
                        }


                    </section>




                </section>

                <section className='courseplayer_right'>
                    <Course_videos />
                </section>
            </div>
            <Contactpage/>

        </div>
    )
}

export default Courseplayer