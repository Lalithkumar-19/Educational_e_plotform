import React, { useEffect } from 'react'
import "../Styles/blogs_showing.css";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

function Blogsshowingpage({ headingshow }) {
    useEffect(() => {
        Aos.init();
    }, [])
    const navigate = useNavigate();


    return (
        <div className='blogspage' style={{ marginTop: headingshow ? "180px" : "0px" }} data-aos="fade-down">
            <div className='categories_explore'>
                {headingshow ? (<h3 className='category_heading' >#Blogs</h3>) : ""}
                <div className='category_title_box' style={{ alignSelf: headingshow ? "center" : "start" }}>
                    <h1 className='categoty_title' style={{ alignSelf: headingshow ? "center" : "start" }}>Latest News & <span style={{ color: "tomato" }}>Articles</span></h1>
                    <span className='category_sub_quote' style={{ display: headingshow ? "flex" : "none" }}>
                        There are many variations of passages of courses are available on this website ,but majority have suffered alteration in some form,by injected humour
                    </span>
                </div>
            </div>

            {/* mainpagecode */}

            <div className='blogs_showing_section' data-aos="fade-right" onClick={() => navigate("/selectedblog")} >
                
                <div className='blog_banner_div'>
                    <div className='backdrop_div'>
                        <span className='uploaded_date'>
                            25 February 2022
                        </span>
                        <img className="backdrop_pic" src="https://images.unsplash.com/photo-1570215171424-f74325192b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwYW5kJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="blogs_banner" />
                    </div>
                    <div className='About_blog'>
                        <p className='About_blog_heading'>Ui and ux presentation updates</p>
                        <p className='About_blog_text'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad rem recusandae similique voluptas ipsa labore nam necessitatibus velit, tempore molestias distinctio in, temporibus numquam dolore totam magni? Quas, beatae est!</p>
                        <div className='read_full_post'>
                            <div className='click_button'>
                                <span className='click_button_text' style={{ textAlign: "center" }}>Read Post </span><span ><TrendingUpIcon /></span></div>

                        </div>


                    </div>
                </div>



                {/* secondone */}
                <div className='blog_banner_div'>
                    <div className='backdrop_div'>
                        <span className='uploaded_date'>
                            25 February 2022
                        </span>
                        <img className="backdrop_pic" src="https://images.unsplash.com/photo-1570215171424-f74325192b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwYW5kJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="blogs_banner" />
                    </div>
                    <div className='About_blog'>
                        <p className='About_blog_heading'>Ui and ux presentation updates</p>
                        <p className='About_blog_text'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad rem recusandae similique voluptas ipsa labore nam necessitatibus velit, tempore molestias distinctio in, temporibus numquam dolore totam magni? Quas, beatae est!</p>
                        <div className='read_full_post'>
                            <div className='click_button'>
                                <span className='click_button_text' style={{ textAlign: "center" }}>Read Post </span><span ><TrendingUpIcon /></span></div>

                        </div>


                    </div>
                </div>



               

                {/* thirdone */}
                <div className='blog_banner_div'>
                    <div className='backdrop_div'>
                        <span className='uploaded_date'>
                            25 February 2022
                        </span>
                        <img className="backdrop_pic" src="https://images.unsplash.com/photo-1570215171424-f74325192b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwYW5kJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="blogs_banner" />
                    </div>
                    <div className='About_blog'>
                        <p className='About_blog_heading'>Ui and ux presentation updates</p>
                        <p className='About_blog_text'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad rem recusandae similique voluptas ipsa labore nam necessitatibus velit, tempore molestias distinctio in, temporibus numquam dolore totam magni? Quas, beatae est!</p>
                        <div className='read_full_post'>
                            <div className='click_button'>
                                <span className='click_button_text' style={{ textAlign: "center" }}>Read Post </span><span ><TrendingUpIcon /></span></div>

                        </div>


                    </div>
                </div>






                {/* fourth one */}
                <div className='blog_banner_div'>
                    <div className='backdrop_div'>
                        <span className='uploaded_date'>
                            25 February 2022
                        </span>
                        <img className="backdrop_pic" src="https://images.unsplash.com/photo-1570215171424-f74325192b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwYW5kJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="blogs_banner" />
                    </div>
                    <div className='About_blog'>
                        <p className='About_blog_heading'>Ui and ux presentation updates</p>
                        <p className='About_blog_text'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad rem recusandae similique voluptas ipsa labore nam necessitatibus velit, tempore molestias distinctio in, temporibus numquam dolore totam magni? Quas, beatae est!</p>
                        <div className='read_full_post'>
                            <div className='click_button'>
                                <span className='click_button_text' style={{ textAlign: "center" }}>Read Post </span><span ><TrendingUpIcon /></span></div>

                        </div>


                    </div>
                </div>



                {/* fifthone */}
                <div className='blog_banner_div'>
                    <div className='backdrop_div'>
                        <span className='uploaded_date'>
                            25 February 2022
                        </span>
                        <img className="backdrop_pic" src="https://images.unsplash.com/photo-1570215171424-f74325192b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwYW5kJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="blogs_banner" />
                    </div>
                    <div className='About_blog'>
                        <p className='About_blog_heading'>Ui and ux presentation updates</p>
                        <p className='About_blog_text'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad rem recusandae similique voluptas ipsa labore nam necessitatibus velit, tempore molestias distinctio in, temporibus numquam dolore totam magni? Quas, beatae est!</p>
                        <div className='read_full_post'>
                            <div className='click_button'>
                                <span className='click_button_text' style={{ textAlign: "center" }}>Read Post </span><span ><TrendingUpIcon /></span></div>

                        </div>


                    </div>
                </div>





                {/* sixthone */}
                <div className='blog_banner_div'>
                    <div className='backdrop_div'>
                        <span className='uploaded_date'>
                            25 February 2022
                        </span>
                        <img className="backdrop_pic" src="https://images.unsplash.com/photo-1570215171424-f74325192b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwYW5kJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="blogs_banner" />
                    </div>
                    <div className='About_blog'>
                        <p className='About_blog_heading'>Ui and ux presentation updates</p>
                        <p className='About_blog_text'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad rem recusandae similique voluptas ipsa labore nam necessitatibus velit, tempore molestias distinctio in, temporibus numquam dolore totam magni? Quas, beatae est!</p>
                        <div className='read_full_post'>
                            <div className='click_button'>
                                <span className='click_button_text' style={{ textAlign: "center" }}>Read Post </span><span ><TrendingUpIcon /></span></div>

                        </div>


                    </div>
                </div>




            </div>



        </div>






    )
}

export default Blogsshowingpage;