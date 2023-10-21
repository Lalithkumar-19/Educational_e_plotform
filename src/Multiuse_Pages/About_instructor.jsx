import React from "react";
import "./About_instructor.css";
import { AssistWalker, CallMadeRounded, FacebookOutlined, GroupOutlined, LinkedIn, LocationCityOutlined, MailOutline, NetworkCellOutlined, PlayCircleRounded, Twitter } from "@mui/icons-material";
import pic from "../assets/developerpic.jpg"
import Coursecard from "../Pages/Coursecard";
import Navbar from "../Pages/Navbar";
import Contactpage from "../Pages/FooterPage";

function About_instructor() {

    return (
        <div className="about_instructor">
            <Navbar/>
            <span className="heading">Instructor Details</span>
            <span className="sub_heading">Home/<span className="sub_sub_heading">Instructor</span>
            
            </span>
            <div className="about_instructor_main">


                <section className="about_instructor_left">

                    <div className="about_instructor_card">
                        <div className="instructor_pic">
                            <img src={pic} width={"100%"} style={{ borderRadius: "20px" }} height={"100%"} alt="instructor_profile" />
                        </div>
                        <div className="about_instructor_details">
                            <div className="about_instructor_details_item">
                                <span className="details_title">
                                    <LocationCityOutlined /><span className="title">Address</span>
                                </span>
                                <span className="details_desc">
                                    Dhaka mirpur,Edison,517643
                                </span>
                            </div>
                            {/* seconsone */}
                            <div className="about_instructor_details_item">
                                <span className="details_title">
                                    <MailOutline /> <span className="title">Email</span>
                                </span>
                                <span className="details_desc">
                                    lalithdev123@gmail.com
                                </span>
                            </div>

                            {/* thirdone */}
                            <div className="about_instructor_details_item">
                                <span className="details_title">
                                    <CallMadeRounded /><span className="title">Phone</span>
                                </span>
                                <span className="details_desc">
                                    9573247732
                                </span>
                            </div>
                            {/* fouthone */}
                            <div className="about_instructor_details_item">
                                <span className="details_title">
                                    <NetworkCellOutlined /><span className="title">Website</span>
                                </span>
                                <span className="details_desc">
                                    https://www.lalithporto.com
                                </span>
                            </div>
                        </div>
                        <div className="follow_me_div">
                            <div className="follow_me">
                                <span className="follow_me_title">Follow Me:</span>
                                <span className="fb_link"><FacebookOutlined /></span>
                                <span className="twitter_link"><Twitter /></span>
                                <span className="linkedin_link"><LinkedIn /></span>
                            </div>
                        </div>
                    </div>

                </section>
                <section className="about_instructor_right">
                    <h1 style={{ marginLeft: "0px", marginBottom: "3px",marginTop:"0px" }} className="instructor_name">
                        Tony Bowler
                    </h1>
                    <span className="instructor_role">
                        Former CEO
                    </span>
                    <p className="instructor_details">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat velit itaque eum provident beatae quasi tenetur, labore nesciunt eos totam consequatur vitae sit explicabo voluptatum voluptates. Eius, corrupti? Voluptatem perferendis doloribus dignissimos molestiae ratione minus sapiente, pariatur voluptate tempora error? Molestias delectus quam optio soluta esse. Dolorum veniam nemo, harum doloribus quaerat beatae temporibus tempore sit maxime maiores sint iste suscipit, reprehenderit in, veritatis at quia delectus eveniet. Cupiditate harum iusto neque assumenda error atque, eligendi aperiam. Nihil molestias provident est, aspernatur voluptatibus tempora architecto nemo ullam iure delectus exercitationem inventore blanditiis mollitia quidem sunt assumenda. Quasi alias, sunt error repudiandae debitis perspiciatis iure est aspernatur nihil nobis ad, deleniti ea quaerat cupiditate qui repellendus, ab voluptates. Dolor, laudantium saepe?

                    </p>
                    <div className="instructor_meta_details">
                        <div className="meta_item">
                            <span className="player_icon">  <PlayCircleRounded fontSize="large" /></span>
                            <h1 className="meta_details_number">10+</h1>
                            <span className="meta_item_name">
                                Total Courses
                            </span>
                        </div>


                        {/* secondone */}
                        <div className="meta_item">
                            <span className="player_icon">  <GroupOutlined fontSize="large" /></span>
                            <h1 className="meta_details_number" >45k+</h1>
                            <span className="meta_item_name">
                                Total Students
                            </span>
                        </div>

                        {/* thirdone */}

                        <div className="meta_item">
                            <span className="player_icon">  <AssistWalker fontSize="large" /></span>
                            <h1 className="meta_details_number">15+</h1>
                            <span className="meta_item_name">
                                Years in Experience
                            </span>
                        </div>
                    </div>
                    <div className="skills_bars">
                        <h1 style={{ marginLeft: "0px" }}>Skills</h1>

                        {/* firstone */}
                        <div className="skill_item">
                            <span className="skill_name">
                                Web design
                            </span>
                            <span className="skill_bar">
                                <span className="skill_bar_main">
                                    <span className="skill_indicator" ></span>
                                </span>
                                <span className="skill_perc">80%</span>


                            </span>
                        </div>

                        {/* Secondone */}
                        <div className="skill_item">
                            <span className="skill_name">
                                Web design
                            </span>
                            <span className="skill_bar">
                                <span className="skill_bar_main">
                                    <span className="skill_indicator" style={{ backgroundColor: "blueviolet" }} ></span>
                                </span>
                                <span className="skill_perc">80%</span>


                            </span>
                        </div>

                        {/* thirdone */}
                        <div className="skill_item">
                            <span className="skill_name">
                                Web design
                            </span>
                            <span className="skill_bar">
                                <span className="skill_bar_main">
                                    <span className="skill_indicator" style={{ backgroundColor: "coral" }} ></span>
                                </span>
                                <span className="skill_perc">80%</span>


                            </span>
                        </div>
                    </div>
                </section>

            </div>

            <section className="more_courses_by_author">
                <h1 className="more_courses_title_head" style={{textAlign:"center"}}>More Courses by Author</h1>
                <div className="courses">
                    <Coursecard animation={false} />
                    <Coursecard animation={false} />
                    <Coursecard animation={false} />



                </div>
            </section>

            <Contactpage/>
            

        </div >




    )
}


export default About_instructor;