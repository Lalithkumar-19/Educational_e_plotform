import React from 'react'
import "../Styles/featured_courses.css";
import Coursecard from './Coursecard';
import { Link } from 'react-router-dom';


function Feautured_courses({ heading, desc, titleBoolean, courses_restrict }) {
    return (
        <div className='featured_courses' >
            <h3 className='category_heading'>{heading}</h3>
            <div className='category_title_box'>
                {
                    titleBoolean ?
                        <h1 className='categoty_title'>Explore Top <span style={{ color: "tomato" }}>Courses </span></h1> : ""}
                <span className='category_sub_quote'>
                    {desc}
                </span>
            </div>

            <div className='courses_box'>
                <Link to="/courses/overview"><Coursecard />  </Link>
                <Link to="/courses/overview"><Coursecard />  </Link>
                <Link to="/courses/overview"><Coursecard />  </Link>
                <Link to="/courses/overview"><Coursecard />  </Link>
                <Link to="/courses/overview"><Coursecard />  </Link>
                <Link to="/courses/overview"><Coursecard />  </Link>



                {
                    courses_restrict ? (
                        <>
                            <Link to="/overview"><Coursecard />  </Link>
                            <Link to="/overview"><Coursecard />  </Link>
                            <Link to="/overview"><Coursecard />  </Link>
                            <Link to="/overview"><Coursecard />  </Link>
                            <Link to="/overview"><Coursecard />  </Link>
                            <Link to="/overview"><Coursecard />  </Link>
                            <Link to="/overview"><Coursecard />  </Link>
                            <Link to="/overview"><Coursecard />  </Link>
                            <Link to="/overview"><Coursecard />  </Link>
                            <Link to="/overview"><Coursecard />  </Link>
                        </>
                    ) : ""

                }


            </div>

            {/* <Contactpage />  */}
        </div>
    )
}

export default Feautured_courses