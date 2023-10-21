import React, { useEffect, useState } from 'react'
import "./Course_list.css";
import Navbar from '../Pages/Navbar';
import { CancelRounded, SearchOutlined } from '@mui/icons-material';
import Contactpage from '../Pages/FooterPage';
import AppsIcon from '@mui/icons-material/Apps';
import ListIcon from '@mui/icons-material/List';
import Coursecard from '../Pages/Coursecard';
import Course_card_line_align from '../Course_line_align/Course_card_line_align';
import Slider from '@mui/material/Slider';
import PaginationMui from '../PaginationMui/PaginationMui';
import axios from 'axios';
import FilterAltIcon from '@mui/icons-material/FilterAlt';




function Course_list() {
    const [filtering_for_sm, Set_filtering_for_sm] = useState(false);
    const [alignline, SetAlignline] = useState(false);
    const [priceRange, setPricerange] = useState(0);
    const [top_categories, setTop_categories] = useState(["All"]);
    const [top_instructors, setTop_instructors] = useState(["All"]);
    const [license, setLicense] = useState("free");
    const [rating, setRating] = useState(["All"]);
    const [Data, setdata] = useState([]);
    const [search, setSearch] = useState("");

    const [Screen_small, setScreen_small] = useState(false);
    useEffect(() => {
        if (window.innerWidth <= 600) {
            setScreen_small(true);
        }
        else {
            setScreen_small(false);
        }

    }, [])

    useEffect(() => {
        if (document.readyState == "complete") {
            if (Screen_small) {
                let filters = document.getElementById("all_filters");
                if (filtering_for_sm) {
                    filters.style.display = "flex";
                    document.body.style.overflowY = "hidden";
                    document.body.style.opacity = 1.1;

                }
                else {
                    filters.style.display = "none";
                    document.body.style.overflowY = "scroll";
                    document.body.style.opacity = 1.2
                }

            }
        }

    }, [" ", filtering_for_sm, Screen_small, window.scroll]);




    useEffect(() => {
        const getfilteredResult = async () => {
            try {
                const url = `http://localhost:5173/api/course_list?search=${search}&categories=${top_categories}&instructors=${top_instructors}&license=${license}&rating=${rating}`;
                const { data } = await axios.get(url);
                if (data) {
                    setdata(data);
                }
                if (Screen_small) {
                    Set_filtering_for_sm(false);
                }
            } catch (error) {
                console.log("error occured while fetching from db for filters", error)
            }
        }
        getfilteredResult();
    }, [search, top_categories, top_instructors, rating, license,]);


    const getrangeValue = (value) => {
        console.log(value);
        setPricerange(value);
    };



    return (
        <div className='course_list' id='course_list'>
            <Navbar />
            <header className='course_list_header'>
                <h1 className='course_list_header_title'>
                    Course List
                </h1>
                <span className='course_list_header_sub_title'>
                    Home/<span className='course_list_header_sub_sub_title'>
                        Course List
                    </span>
                </span>
            </header>

            {/* main sections */}
            <section className='course_list_main'>

                <section className='course_list_main_left'>
                    <div className='course_list_main_left_search_bar'>
                        <input className='search_input' placeholder='  Search...' /><span className='search_icon' style={{ color: "white", backgroundColor: "coral", height: "32px", width: "60px" }}><SearchOutlined /></span>
                    </div>
                    {

                        <div className='all_filters' id='all_filters' >
                            {
                                Screen_small ? (
                                    <>
                                        <span className='cancle_button' onClick={() => {
                                            window.scrollTo(0, 0);
                                            Set_filtering_for_sm(false)
                                        }} ><CancelRounded fontSize='large' sx={{ color: "coral" }} /></span>
                                    </>
                                ) : ""
                            }
                            <div className='top_categories_filter'>
                                <h1 className='top_categories_title'>Top Categories </h1>
                                <div className='categoty_filter_item'>
                                    <input className='checkbox' type='checkbox' id='checkboxes' style={{ backgroundColor: "coral", color: "coral" }} />
                                    Web Design (5)
                                </div>

                                <div className='categoty_filter_item'>
                                    <input className='checkbox' type='checkbox' id='checkboxes' style={{ backgroundColor: "coral", color: "coral" }} />
                                    Web Design (5)
                                </div>

                                <div className='categoty_filter_item'>
                                    <input className='checkbox' type='checkbox' id='checkboxes' style={{ backgroundColor: "coral", color: "coral" }} />
                                    Web Design (5)
                                </div>

                                <div className='categoty_filter_item'>
                                    <input className='checkbox' type='checkbox' id='checkboxes' style={{ backgroundColor: "coral", color: "coral" }} />
                                    Web Design (5)
                                </div>

                                <div className='categoty_filter_item'>
                                    <input className='checkbox' type='checkbox' id='checkboxes' style={{ backgroundColor: "coral", color: "coral" }} />
                                    Web Design (5)
                                </div>

                            </div>

                            {/* 2nd item */}
                            <div className='top_instructors_filter'>
                                <h1 className='top_instructos_title'>Top Instructors</h1>
                                <div className='categoty_filter_item' id='categoty_filter_item'>
                                    <input className='checkbox' type='checkbox' id='checkboxes' style={{ backgroundColor: "coral", color: "coral" }} />
                                    Web Design (5)
                                </div>

                                <div className='categoty_filter_item'>
                                    <input className='checkbox' type='checkbox' id='checkboxes' style={{ backgroundColor: "coral", color: "coral" }} />
                                    Web Design (5)
                                </div>

                                <div className='categoty_filter_item'>
                                    <input className='checkbox' type='checkbox' id='checkboxes' style={{ backgroundColor: "coral", color: "coral" }} />
                                    Web Design (5)
                                </div>

                                <div className='categoty_filter_item'>
                                    <input className='checkbox' type='checkbox' id='checkboxes' style={{ backgroundColor: "coral", color: "coral" }} />
                                    Web Design (5)
                                </div>

                                <div className='categoty_filter_item'>
                                    <input className='checkbox' type='checkbox' id='checkboxes' style={{ backgroundColor: "coral", color: "coral" }} />
                                    Web Design (5)
                                </div>

                            </div>

                            {/* 3rd item */}
                            <div className='license_filter'>
                                <h1 className='license_filter_title'>Licenses</h1>
                                <div className='categoty_filter_item'>
                                    <input className='checkbox' type='checkbox' id='checkboxes' style={{ backgroundColor: "coral", color: "coral" }} />
                                    Free
                                </div>

                                <div className='categoty_filter_item'>
                                    <input className='checkbox' type='checkbox' id='checkboxes' style={{ backgroundColor: "coral", color: "coral" }} />
                                    Premium
                                </div>
                            </div>


                            {/* 4th item price filter */}
                            <div className='price_filter'>
                                <h1 className='price_filter_title'>Price Filter</h1>
                                {/* <input className='price_filter_input' type='range' max={100} min={20} /> */}
                                <Slider
                                    aria-label="Price"
                                    defaultValue={30}
                                    getAriaValueText={getrangeValue}
                                    valueLabelDisplay="auto"
                                    step={10}
                                    marks
                                    min={10}
                                    max={110}
                                    color={"primary"}

                                />
                                <p style={{ fontSize: "19px" }}>Price: ${priceRange}</p>

                            </div>


                            {/* 5th item filter with rating */}
                            <div className='rating_filter'>
                                <h1 className='rating_filter_title'>Ratings</h1>
                                <div className='categoty_filter_item'>
                                    <input className='checkbox' type='checkbox' id='checkboxes' style={{ backgroundColor: "coral", color: "coral" }} />
                                    🌟🌟🌟🌟🌟
                                </div>

                                <div className='categoty_filter_item'>
                                    <input className='checkbox' type='checkbox' id='checkboxes' style={{ backgroundColor: "coral", color: "coral" }} />
                                    🌟🌟🌟🌟 ✰
                                </div>

                                <div className='categoty_filter_item'>
                                    <input className='checkbox' type='checkbox' id='checkboxes' style={{ backgroundColor: "coral", color: "coral" }} />
                                    🌟🌟🌟 ✰ ✰
                                </div>

                                <div className='categoty_filter_item'>
                                    <input className='checkbox' type='checkbox' id='checkboxes' style={{ backgroundColor: "coral", color: "coral" }} />
                                    🌟🌟 ✰ ✰ ✰
                                </div>


                                <div className='categoty_filter_item'>
                                    <input className='checkbox' type='checkbox' id='checkboxes' style={{ backgroundColor: "coral", color: "coral" }} />
                                    🌟 ✰ ✰  ✰  ✰
                                </div>
                            </div>

                        </div>


                    }
                </section>


                {/* right section */}
                <section className='course_list_main_right'>
                    <div className='course_list_main_right_top'>
                        <span className='course_list_main_right_top_filtered_results'>Showing 15 Courses of 55</span>
                        <div className='right_top_filters'>
                            <div className='sort_by' id='sort_by'>
                                <span className='sort_title'>Sort by:</span>
                                <select className='sort_by_select_input'>
                                    <option className='sort_by_select_input_option' value={"popularity"}>popularity</option>
                                    <option className='sort_by_select_input_option' value={"Rating"}>Rating</option>
                                </select>
                            </div>
                            <span className='view_type_one' onClick={() => SetAlignline(false)} style={{ border: !alignline ? "1px solid coral" : "" }}>
                                <AppsIcon fontSize='medium' />
                            </span>
                            <span className='view_type_two' onClick={() => SetAlignline(true)} style={{ border: alignline ? "1px solid coral" : "" }}>
                                <ListIcon fontSize='medium' />
                            </span>
                            {
                                Screen_small ? (
                                    <>
                                        <span className='filters_for_sm_screen' onClick={() => Set_filtering_for_sm((p) => !p)} style={{ border: filtering_for_sm ? "1px solid coral" : "" }}>
                                            <FilterAltIcon fontSize='medium' />
                                        </span>



                                    </>
                                ) : ""
                            }



                        </div>

                    </div>
                    <div className="course_list_main_right_bottom">
                        {
                            !alignline ? (
                                <>

                                    <Coursecard w={true} h={true} b={true} />
                                    <Coursecard w={true} h={true} b={true} />
                                    <Coursecard w={true} h={true} b={true} />
                                    <Coursecard w={true} h={true} b={true} />


                                </>
                            ) : (
                                <>
                                    <Course_card_line_align />
                                    <Course_card_line_align />
                                    <Course_card_line_align />
                                    <Course_card_line_align />

                                </>
                            )}
                    </div>
                    <PaginationMui />
                </section>

            </section>

            <Contactpage />


        </div>
    )
}

export default Course_list;