import React from 'react'
import "../Styles/featured_courses.css";
import Coursecard from './Coursecard';


function Feautured_courses({ heading, desc, titleBoolean, courses_restrict }) {
    const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
                {keys ? (
                    <>
                        {keys.map((m, index) => {
                            { console.log('M', m) }
                            return <Coursecard id={m} />
                        })}
                    </>
                ) : ""}
                {/* {
                    courses_restrict ? (
                        <>
                            <Coursecard />
                            <Coursecard />
                            <Coursecard />
                            <Coursecard />
                            <Coursecard />
                            <Coursecard />
                            <Coursecard />
                            <Coursecard />
                            <Coursecard /> */}




                {/* <Link to="/overview"><Coursecard />  </Link>
                            <Link to="/overview"><Coursecard />  </Link>
                            <Link to="/overview"><Coursecard />  </Link>
                            <Link to="/overview"><Coursecard />  </Link>
                            <Link to="/overview"><Coursecard />  </Link>
                            <Link to="/overview"><Coursecard />  </Link>
                            <Link to="/overview"><Coursecard />  </Link>
                            <Link to="/overview"><Coursecard />  </Link>
                            <Link to="/overview"><Coursecard />  </Link>
                            <Link to="/overview"><Coursecard />  </Link> */}
                {/* </>
                    ) : ""

                } */}


            </div>

            {/* <Contactpage />  */}
        </div>
    )
}

export default Feautured_courses