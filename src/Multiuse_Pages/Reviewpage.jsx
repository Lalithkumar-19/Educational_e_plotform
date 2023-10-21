import React, { useState } from 'react'
import "../Multiuse_Pages/Reviewpage.css";
import { TrendingUp } from '@mui/icons-material';
import Rating from '@mui/material/Rating';
function Reviewpage() {


    const [RatingValue, setRating] = useState(0);
    console.log(RatingValue);

    return (
        <div className='review_page'>
            <h1  className='review_page_title'style={{ marginLeft: "0px" }}>Reviews</h1>
            <div className='ratings'>
                <section className='overall_rating'>
                    <span style={{ fontSize: "30px", textAlign: "center" }} className='rating_number'>4.7</span>
                    <p style={{ marginTop: "2px" }}> ⭐⭐⭐⭐⭐
                        <br />
                        (14 Reviews)
                    </p>

                </section>
                <div className='ratings_indicators'>
                    <section className='rating_bars'>
                        <span className='main_rate_bar'>
                            <span className='inner_rate_bar' style={{ width: "90%" }}></span>
                        </span>

                        <span className='main_rate_bar'>
                            <span className='inner_rate_bar' style={{ width: "70%" }}></span>
                        </span>

                        <span className='main_rate_bar'>
                            <span className='inner_rate_bar' style={{ width: "50%" }}></span>
                        </span>

                        <span className='main_rate_bar'>
                            <span className='inner_rate_bar' style={{ width: "30%" }}></span>
                        </span>

                        <span className='main_rate_bar'>
                            <span className='inner_rate_bar' style={{ width: "10%" }}></span>
                        </span>



                    </section>
                    <section className='rating_stars'>
                        <span className='fivestar'> ⭐⭐⭐⭐⭐</span>
                        <span className='fourstar'> ⭐⭐⭐⭐</span>
                        <span className='threestar'> ⭐⭐⭐</span>
                        <span className='twostar'> ⭐⭐</span>
                        <span className='onestar'> ⭐</span>
                    </section>
                </div>
            </div>
            <div className='recent_reviews'>
                <h1 className='recent_reviews_title'>Recent Review</h1>
                <section className='main_reviews'>
                    <div className='student_reviews_left_box'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum quis minus expedita, et, excepturi doloribus quibusdam unde, praesentium quaerat commodi sint delectus. Saepe beatae repellendus voluptatum a temporibus reiciendis.</p>
                        <div className='student_details'>
                            <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="student" />

                            <span className='about_student'>
                                <span className='student_name' style={{ width: "150px", marginLeft: "0px" }}>Harshu Reddy
                                    <p style={{ margin: "1px", textAlign: "center", width: "15px" }}>Student</p>
                                </span>

                                <p className='student_rating' style={{ backgroundColor: "maroon", width: "50px", color: "white", textAlign: "center" }}>4.5⭐</p>
                            </span>
                        </div>
                    </div>


                    {/* secondone */}
                    <div className='student_reviews_left_box'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum quis minus expedita, et, excepturi doloribus quibusdam unde, praesentium quaerat commodi sint delectus. Saepe beatae repellendus voluptatum a temporibus reiciendis.</p>
                        <div className='student_details'>
                            <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="student" />

                            <span className='about_student'>
                                <span className='student_name' style={{ width: "150px", marginLeft: "0px" }}>Harshu Reddy
                                    <p style={{ margin: "1px", textAlign: "center", width: "15px" }}>Student</p>
                                </span>

                                <p className='student_rating' style={{ backgroundColor: "maroon", width: "50px", color: "white", textAlign: "center" }}>4.5⭐</p>
                            </span>
                        </div>
                    </div>

                    {/* thirdone */}

                    <div className='student_reviews_left_box'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum quis minus expedita, et, excepturi doloribus quibusdam unde, praesentium quaerat commodi sint delectus. Saepe beatae repellendus voluptatum a temporibus reiciendis.</p>
                        <div className='student_details'>
                            <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="student" />

                            <span className='about_student'>
                                <span className='student_name' style={{ width: "150px", marginLeft: "0px" }}>Harshu Reddy
                                    <p style={{ margin: "1px", textAlign: "center", width: "15px" }}>Student</p>
                                </span>

                                <p className='student_rating' style={{ backgroundColor: "maroon", width: "50px", color: "white", textAlign: "center" }}>4.5⭐</p>
                            </span>
                        </div>
                    </div>
                </section>
                <div className='all_Reviews'>
                    <button className='click_button'>
                        See All <span><TrendingUp /></span>
                    </button>


                </div>

                <section className='new_review_form' id='new_review_form'>
                    <h1 className='review_header_title'>Write a Review</h1>

                    <Rating
                        name="simple-controlled"
                        value={RatingValue}
                        onChange={(event, newValue) => {
                            setRating(newValue);
                        }}
                    />

                    <form className='review_taken_form'>
                        <input className='review_title' placeholder='Review Title' type='text'name='review_title' />
                        <input className='reviewer_name' placeholder='Reviewer Name' name='reviewer_name' type='text' />
                        <input className='reviewer_email' placeholder='Email' name='reviewer_email' type='email' />
                        <input className='reviewer_website' placeholder='Website' name='reviewer_website' type='text'/>
                        <button type='submit' id='button' className='submit_button' >
                            Submit Review
                        </button>


                    </form>
                </section>


            </div>



        </div>
    )
}

export default Reviewpage