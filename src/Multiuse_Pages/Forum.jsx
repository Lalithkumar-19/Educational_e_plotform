import React from 'react';
import "./Forum.css";
import { ThumbUpOutlined } from '@mui/icons-material';
import pic from "../assets/developerpic.jpg"


function Forum() {
    return (
        <div className='forum'>
            <h2  className="forum_heading">20 Questions in this course</h2>

            <section className='course_questions'>
                <div className='question'>
                    <h2 style={{ marginBottom: "2px" }}>Can't select database</h2>
                    <p className='question_inbrief'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum quod repellendus iure. Nihil perspiciatis nulla molestias. Molestiae, reiciendis non.
                    </p>
                    <div className='questioner_info'>
                        <div className='questioner_details'>
                            <div className='questioner_pic'>
                                <img src={pic} width={"100%"} height={"100%"} style={{ objectFit: "cover", borderRadius: "100%" }} alt="questioner_pic" />

                            </div>
                            <div className='questioner_name_role'>
                                <span className='questioner_name'>Ashok kumar</span>
                                <span className='question_posted_date'>
                                    May 24,2022
                                </span>
                            </div>
                        </div>
                        <span className='like_button_for_question' style={{ display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center", gap: "8px", cursor: "pointer" }}><ThumbUpOutlined />
                            <span style={{ textAlign: "center", marginRight: "10px" }} className='like_text'>
                                Like
                            </span>
                        </span>
                    </div>
                </div>



                {/* secondone */}
                <div className='question'>
                    <h2 style={{ marginBottom: "2px" }}>Can't select database</h2>
                    <p className='question_inbrief'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum quod repellendus iure. Nihil perspiciatis nulla molestias. Molestiae, reiciendis non.
                    </p>
                    <div className='questioner_info'>
                        <div className='questioner_details'>
                            <div className='questioner_pic'>
                                <img src={pic} width={"100%"} height={"100%"} style={{ objectFit: "cover", borderRadius: "100%" }} alt="questioner_pic" />

                            </div>
                            <div className='questioner_name_role'>
                                <span className='questioner_name'>Ashok kumar</span>
                                <span className='question_posted_date'>
                                    May 24,2022
                                </span>
                            </div>
                        </div>
                        <span className='like_button_for_question' style={{ display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center", gap: "8px", cursor: "pointer" }}><ThumbUpOutlined />
                            <span style={{ textAlign: "center", marginRight: "10px" }} className='like_text'>
                                Like
                            </span>
                        </span>
                    </div>
                </div>

                {/* thirdone */}
                <div className='question'>
                    <h2 style={{ marginBottom: "2px" }}>Can't select database</h2>
                    <p className='question_inbrief'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum quod repellendus iure. Nihil perspiciatis nulla molestias. Molestiae, reiciendis non.
                    </p>
                    <div className='questioner_info'>
                        <div className='questioner_details'>
                            <div className='questioner_pic'>
                                <img src={pic} width={"100%"} height={"100%"} style={{ objectFit: "cover", borderRadius: "100%" }} alt="questioner_pic" />

                            </div>
                            <div className='questioner_name_role'>
                                <span className='questioner_name'>Ashok kumar</span>
                                <span className='question_posted_date'>
                                    May 24,2022
                                </span>
                            </div>
                        </div>
                        <span className='like_button_for_question' style={{ display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center", gap: "8px", cursor: "pointer" }}><ThumbUpOutlined />
                            <span style={{ textAlign: "center", marginRight: "10px" }} className='like_text'>
                                Like
                            </span>
                        </span>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Forum