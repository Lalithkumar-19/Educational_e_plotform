import React from 'react'
import "../Styles/Student_review.css";

function Student_reviews() {
    return (
        <div className='student_reviews'>

            <div className='categories_explore'>
                <h3 className='category_heading'>#Review</h3>
                <div className='category_title_box'>
                    <h1 className='categoty_title'>Our Student <span style={{ color: "tomato" }}>Review </span></h1>
                    <span className='category_sub_quote'>psam ratione aliquid veniam, libero accusantium neque sunt eius, temporibus fugiat earum ipsa, inventore esse. There are many variations of passages .

                    </span>
                </div>
            </div>
            <div className="student_reviews_main">
                <div className='student_reviews_left'>
                    
                    <div className='student_reviews_left_box'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum quis minus expedita, et, excepturi doloribus quibusdam unde, praesentium quaerat commodi sint delectus. Saepe beatae repellendus voluptatum a temporibus reiciendis.</p>
                        <div className='student_details'>
                            <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="student" />

                            <span className='about_student'>
                                <span className='student_name' style={{ width: "150px", marginLeft: "0px" }}>Rani
                                    <p style={{ margin: "1px", textAlign: "center", width: "15px" }}>Student</p>
                                </span>

                                <p className='student_rating' style={{ backgroundColor: "maroon", width: "50px", color: "white", textAlign: "center" }}>4⭐</p>
                            </span>
                        </div>
                    </div>




                    {/* secondone */}
                    <div className='student_reviews_left_box'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum quis minus expedita, et, excepturi doloribus quibusdam unde, praesentium quaerat commodi sint delectus. Saepe beatae repellendus voluptatum a temporibus reiciendis.</p>
                        <div className='student_details'>
                            <img src="https://watermark.lovepik.com/photo/50169/0876_lovepik-female-college-students-review-carefully-in-the-photo-image_wh1200.jpg" alt="student" />

                            <span className='about_student'>
                                <span className='student_name' style={{ width: "150px", marginLeft: "0px" }}>Harshu Reddy
                                    <p style={{ margin: "1px", textAlign: "center", width: "15px" }}>Student</p>
                                </span>

                                <p className='student_rating' style={{ backgroundColor: "maroon", width: "50px", color: "white", textAlign: "center" }}>4⭐</p>
                            </span>
                        </div>
                    </div>

                </div>
                <div className='student_reviews_right'>

                </div>

            </div>
        </div>
    )
}

export default Student_reviews