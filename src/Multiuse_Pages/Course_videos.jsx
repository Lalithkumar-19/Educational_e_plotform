import React from 'react';
import "./Course_videos.css";
import { VideoFileOutlined } from '@mui/icons-material';


function Course_videos() {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    return (
        <div className='course_videos'>

            <div className='all_course_videos'>

                {
                    arr.map(() => {
                        return (
                            <>
                                <div className='one_course_video'>
                                    <h1 className='course_title'>Introduction Wordpress</h1>
                                    <div className='course_video_title_bar'>
                                        <div className='course_video_title_div'>
                                            <span className='video_icon'><VideoFileOutlined /></span>
                                            <p className='about_video'>Welcome to the Web development</p>

                                        </div>
                                        <input type='checkbox' className='course_status_check_box' />
                                    </div>

                                </div>

                            </>

                        )
                    })

                }


            </div>

        </div>
    )
}

export default Course_videos