import React, { useEffect, useState } from 'react';
import "./Blogviewer.css";
import Navbar from '../Pages/Navbar';
import Developerpic from "../assets/developerpic.jpg";
import { CalendarMonthOutlined, FacebookRounded, Instagram, Person3Outlined, SearchOutlined, Twitter } from '@mui/icons-material';
import Comment_Temp from './Comment_Temp';
import { CircularProgress } from '@mui/material';
function Blogviewer() {
    const [comments_data, setComments_data] = useState([]);
    useEffect(() => {
        setTimeout(async () => {
            await fetch("https://dummyjson.com/comments?limit=4").then((data) => data.json()).then((succ) => setComments_data(succ.comments)).catch(err => console.log(err));

        }, 2000);

    }, [])

    return (
        <div className='blogviewer'>
            <Navbar />
            <section className='blogviewer_main_headings'>
                <span className='main_heading' style={{ color: "black", fontSize: "22px", fontWeight: "700", marginBottom: "10px" }}>Blogs Details</span>
                <span className='sub_heading'>Home/<span style={{ color: "coral" }}>Blog</span></span>
            </section>
            <div className='blogviewer_main'>
                <div className="blogviewer_left" >
                    <section className='blogviewer_backdrop'>
                        <img width={"100%"} height={"100%"} style={{ objectFit: "fill", borderRadius: "20px" }} src={Developerpic} alt='blog_Pic' />
                    </section>
                    <section className='blogviewer_left_headings'>
                        <span className='blog_heading' style={{ fontSize: "20px", fontWeight: "700" }}>Good Developer</span>
                        <div className='blog_posting_details'>
                            <span style={{ textAlign: "center", display: "flex", alignItems: "center" }}><Person3Outlined /> By Admin  </span>
                            <span style={{ textAlign: "center", display: "flex", alignItems: "center", fontSize: "12px" }}><CalendarMonthOutlined />March 7th 2022</span>

                        </div>
                    </section>

                    <section className='blogviewer_blog_details'>
                        <p style={{ textAlign: "justify", opacity: ".8", padding: "6px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam quos est magni repellat saepe sequi consequuntur laudantium iste! Voluptates velit quod harum placeat omnis eius beatae recusandae explicabo sequi inventore facere, temporibus fugit. Ea consectetur, officiis tempora similique at tenetur rem id ipsam fugit dolorem tempore sed incidunt velit sint veniam nulla hic quidem nisi voluptate vitae aliquid aspernatur! Voluptate adipisci, veritatis id blanditiis sed vel facilis enim voluptatibus, sit suscipit delectus eveniet. Et aliquam error, numquam blanditiis dolor maiores non doloribus totam animi laboriosam magnam, vel accusamus exercitationem neque voluptate libero harum earum? Repellat fuga ducimus dolores atque id, tempora molestiae corporis animi quibusdam, et distinctio neque voluptatibus sequi quae sapiente facilis quasi. Libero velit sapiente recusandae quos iure!</p>

                        <p style={{ textAlign: "justify", opacity: ".8", padding: "5px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui molestias nesciunt iusto ullam quia laborum animi, eveniet, earum at fuga numquam odio quo illum nemo impedit, enim recusandae aspernatur accusantium suscipit quis? Ut in blanditiis asperiores? Autem aut excepturi vel, quia tempore illum? Recusandae, assumenda. Dicta culpa suscipit provident eum.</p>
                    </section>
                    <section className='blogviewer_main_blog_details'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis exercitationem dolorum commodi vitae at expedita voluptate cupiditate minima sapiente ipsam aut labore facilis veniam, explicabo error earum soluta natus accusantium!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi repellat odio expedita eaque asperiores, esse, harum, ipsa ducimus vel quae vitae adipisci labore quasi quis quas autem. Voluptates, in provident.
                    </section>

                    <footer className='blogviewer_left_end_options'>
                        <div className='blogviewer_left_end_sharing'>
                            <span style={{ color: "black", fontSize: "17px", fontWeight: "400", marginRight: "30px" }}>Social Share</span>
                            <span className='facebook_share'><FacebookRounded /></span>
                            <span className='twitter_share'><Twitter /></span>
                            <span className='linkedin_share'><Instagram /></span>

                        </div>
                        <div className='blogviewer_left_end_tagscloud'>
                            <button id="button"style={{ backgroundColor: "coral", color: "white", border: "none", width: "auto", height: "40px" }} >UI Design</button>
                            <button id="button" style={{ backgroundColor: "coral", color: "white", border: "none", width: "auto", height: "40px" }} >Graphic Design</button>
                            <button id="button"style={{ backgroundColor: "coral", color: "white", border: "none", width: "auto", height: "40px" }} >Web Design</button>

                        </div>
                    </footer>
                    <span style={{ color: "black", fontSize: "17px", fontWeight: "700", marginRight: "30px", marginTop: "20px" }}>Recent Comments</span>

                    {
                        comments_data ? (
                            comments_data.map((d) => <Comment_Temp name={d.user.username} commented_text={d.body + "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui molestias nesciunt iusto ullam quia laborum animi, eveniet, earum at fuga numquam odio quo illum nemo impedit, enim recusandae aspernatur accusantium suscipit quis? Ut in blanditiis asperiores? Autem aut excepturi vel"} posted_date={"March 26,2020 4.30 am"} key={d.postId} />)
                        ) : <div style={{ margin: "30px auto" }}><CircularProgress /></div>
                    }


                </div>
                <div className="blogviewer_right">
                    <section className='blogviewer_right_search_bar'>
                        <input className='search_input' placeholder='Search...' /><span className='search_icon' style={{ color: "white", backgroundColor: "coral", height: "100%", width: "60px" }}><SearchOutlined /></span>
                    </section>
                    <section className="categories">
                        <span style={{ color: "black", fontWeight: "700", fontSize: "18px" }}>Categories</span>
                        <div className='categories_list'>
                            <li id='categoty_item'>Photoshop</li>
                            <li className='categoty_item'>Graphic Design</li>
                            <li className='categoty_item'>Mobile Development</li>
                            <li className='categoty_item'>App Design</li>
                            <li className='categoty_item'>Marketing</li>

                        </div>
                    </section>
                    <section className='popular_posts'>
                        <h2 >Popular Posts</h2>
                        <div className='all_popular_posts'>
                            <div className='post'>
                                <div className='post_pic'>
                                    <img src={Developerpic} width={"100%"} height={"100%"} style={{ objectFit: "cover", borderRadius: "8px" }} alt="post_profile" />
                                </div>
                                <div className='post_details'>
                                    <p className='About_post'>Lets work how its work with all the special  brothers and sisiters ..... </p>
                                    <small>Posted on 5th June, 2020 </small>
                                </div>

                            </div>
                            {/* seocndone */}
                            <div className='post'>
                                <div className='post_pic'>
                                    <img src={Developerpic} width={"100%"} height={"100%"} style={{ objectFit: "cover", borderRadius: "8px" }} alt="post_profile" />
                                </div>
                                <div className='post_details'>
                                    <p className='About_post'>Lets work how its work with all the special  brothers and sisiters ..... </p>
                                    <small>Posted on 5th June, 2020 </small>
                                </div>

                            </div>
                            {/* tihrdone */}
                            <div className='post'>
                                <div className='post_pic'>
                                    <img src={Developerpic} width={"100%"} height={"100%"} style={{ objectFit: "cover", borderRadius: "8px" }} alt="post_profile" />
                                </div>
                                <div className='post_details'>
                                    <p className='About_post'>Lets work how its work with all the special  brothers and sisiters ..... </p>
                                    <small>Posted on 5th June, 2020 </small>
                                </div>

                            </div>

                            {/* fouthone */}
                            <div className='post'>
                                <div className='post_pic'>
                                    <img src={Developerpic} width={"100%"} height={"100%"} style={{ objectFit: "cover", borderRadius: "8px" }} alt="post_profile" />
                                </div>
                                <div className='post_details'>
                                    <p className='About_post'>Lets work how its work with all the special  brothers and sisiters ..... </p>
                                    <small>Posted on 5th June, 2020 </small>
                                </div>

                            </div>




                        </div>
                    </section>
                    <section className='tags_cloud'>
                        <span style={{ color: "black", fontWeight: "700", fontSize: "18px" }}>Tags Cloud</span>
                        <div className='all_buttons'>
                            <button id='button'>UI Design</button>
                            <button id="button">Web Design</button>
                            <button id="button">Graphic Design</button>
                            <button id="button">UX Design</button>

                        </div>
                    </section>

                    <section className='news_letter_mail'>
                        <p className='news_letter_headline'>Get the latest post & article in your email</p>
                        <input className='email_input' type='email' placeholder='Enter your Email address' />
                        <button id="button" className='subscribe_button'>Subscribe</button>
                    </section>



                </div>

            </div>

        </div>
    )
}

export default Blogviewer;