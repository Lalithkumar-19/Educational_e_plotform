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
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';




function Course_list() {
    const { search_word } = useParams();

    const [filtering_for_sm, Set_filtering_for_sm] = useState(false);
    const [alignline, SetAlignline] = useState(false);
    const [search, setSearch] = useState("");
    const [priceRange, setPricerange] = useState(12);
    const [top_categories, setTop_categories] = useState([]);
    const [top_instructors, setTop_instructors] = useState([]);
    const [rating, setRating] = useState(5);
    const [Data, setdata] = useState([]);
 
    // setSearch(search_word);

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
        setSearch(search_word);
    }, [search_word]);

    useEffect(() => {
        if (document.readyState === "complete") {
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

    }, [filtering_for_sm, Screen_small]);


console.log("price",priceRange)
    async function getfilteredResult() {
        try {
            const url = `http://localhost:5000/api/course_list?search=${search}&categories=${top_categories.length>0?top_categories.join(","):"  "}&instructors=${top_instructors.length>0?top_instructors.join(","):" "}&rating=${rating}&price=${priceRange}`;
            const { data } = await axios.get(url);
            if (data) {
                setdata(data);
                console.log(data, "data");
            }
            if (Screen_small) {
                Set_filtering_for_sm(false);
            }
        } catch (error) {
            console.log("error occured while fetching from db for filters", error)
        }
    }

    const getrangeValue = (value) => {
        setPricerange(value);
    };

    useEffect(() => {
        getfilteredResult();
    }, [top_categories, top_instructors, rating]);


    const Add_check_filters = (e) => {
        if (e.target.checked) {
            setTop_categories([...top_categories, e.target.value]);
        } else {
            let index = top_categories.indexOf(e.target.value);
            setTop_categories(top_categories.filter((val) => index !== val));
        }
    }

    const Add_instructors_filters = (e) => {
        if (e.target.checked) {
            setTop_instructors([...top_instructors, e.target.value]);
        } else {
            let index = top_instructors.indexOf(e.target.value);
            setTop_instructors(top_instructors.filter((val) => index !== val));
        }
    }



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
                        <input className='search_input' value={search} onChange={(e) => setSearch(e.target.value)} style={{ textIndent: "6px" }} placeholder='Search...' /><span className='search_icon' onClick={() => getfilteredResult()} style={{ color: "white", backgroundColor: "coral", height: "32px", width: "60px" }}><SearchOutlined /></span>
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

                                    <input className='checkbox' type='checkbox' id='checkboxes' style={{ backgroundColor: "coral", color: "coral" }} value={"web design"} onChange={Add_check_filters} />
                                    Web Design 
                                </div>

                                <div className='categoty_filter_item'>
                                    <input className='checkbox' type='checkbox' id='checkboxes' style={{ backgroundColor: "coral", color: "coral" }} value={"ux design"} onChange={Add_check_filters} />
                                    Ux Design 
                                </div>

                                <div className='categoty_filter_item'>
                                    <input className='checkbox' type='checkbox' id='checkboxes' style={{ backgroundColor: "coral", color: "coral" }} value={"chatgpt"} onChange={Add_check_filters} />
                                    chat Gpt & ai tools
                                </div>

                                <div className='categoty_filter_item'>
                                    <input className='checkbox' type='checkbox' id='checkboxes' style={{ backgroundColor: "coral", color: "coral" }} value={"react js"} onChange={Add_check_filters} />
                                    react js
                                </div>

                                <div className='categoty_filter_item'>
                                    <input className='checkbox' type='checkbox' id='checkboxes' style={{ backgroundColor: "coral", color: "coral" }} value={"javascript"} onChange={Add_check_filters}  />
                                    javascript
                                </div>

                            </div>

                            {/* 2nd item */}
                            <div className='top_instructors_filter'>
                                <h1 className='top_instructos_title'>Top Instructors</h1>
                                <div className='categoty_filter_item' id='categoty_filter_item'>
                                    <input className='checkbox' type='checkbox' id='checkboxes' style={{ backgroundColor: "coral", color: "coral" }}  value={"Lalith kumar"} onClick={Add_instructors_filters}/>
                                    Lalith kumar
                                </div>

                                <div className='categoty_filter_item'>
                                    <input className='checkbox' type='checkbox' id='checkboxes' style={{ backgroundColor: "coral", color: "coral" }} value={"Amarnadh"} onClick={Add_instructors_filters} />
                                    Amarnadh
                                </div>

                                <div className='categoty_filter_item'>
                                    <input className='checkbox' type='checkbox' id='checkboxes' style={{ backgroundColor: "coral", color: "coral" }} value={"Ganesh"} onClick={Add_instructors_filters}/>
                                   Ganesh
                                </div>

                                <div className='categoty_filter_item'>
                                    <input className='checkbox' type='checkbox' id='checkboxes' style={{ backgroundColor: "coral", color: "coral" }} value={"Ashok kumar"} onClick={Add_instructors_filters}/>
                                   Ashok kumar
                                </div>

                                <div className='categoty_filter_item'>
                                    <input className='checkbox' type='checkbox' id='checkboxes' style={{ backgroundColor: "coral", color: "coral" }} value={"praneel"} onClick={Add_instructors_filters}/>
                                 Praneel (.)
                                </div>

                            </div>

                            {/* 3rd item */}
                            {/* <div className='license_filter'>
                                <h1 className='license_filter_title'>Licenses</h1>
                                <div className='categoty_filter_item'>
                                    <input className='checkbox' type='checkbox' id='checkboxes' style={{ backgroundColor: "coral", color: "coral" }} />
                                    Free
                                </div>

                                <div className='categoty_filter_item'>
                                    <input className='checkbox' type='checkbox' id='checkboxes' style={{ backgroundColor: "coral", color: "coral" }} />
                                    Premium
                                </div>
                            </div> */}


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
                                    max={200}
                                    color={"primary"}

                                />
                                <p style={{ fontSize: "19px" }}>Price: ${priceRange}</p>

                            </div>


                            {/* 5th item filter with rating */}
                            <div className='rating_filter'>
                                <h1 className='rating_filter_title'>Ratings</h1>
                                <div className='categoty_filter_item'>
                                    <input className='checkbox' type='checkbox' id='checkboxes' style={{ backgroundColor: "coral", color: "coral" }} name='rating' value={5} checked={rating==5?true:false} onChange={(e)=>setRating(e.target.value)} />
                                    🌟🌟🌟🌟🌟
                                </div>

                                <div className='categoty_filter_item'>
                                    <input className='checkbox' type='checkbox' id='checkboxes' style={{ backgroundColor: "coral", color: "coral" }} name='rating' value={4} checked={rating==4} onChange={(e)=>setRating(e.target.value)}/>
                                    🌟🌟🌟🌟 ✰
                                </div>

                                <div className='categoty_filter_item'>
                                    <input className='checkbox' type='checkbox' id='checkboxes' style={{ backgroundColor: "coral", color: "coral" }} name='rating' value={3} checked={rating==3} onChange={(e)=>setRating(e.target.value)}/>
                                    🌟🌟🌟 ✰ ✰
                                </div>

                                <div className='categoty_filter_item'>
                                    <input className='checkbox' type='checkbox' id='checkboxes' style={{ backgroundColor: "coral", color: "coral" }} name='rating' value={2}  checked={rating==2} onChange={(e)=>setRating(e.target.value)} />
                                    🌟🌟 ✰ ✰ ✰
                                </div>


                                <div className='categoty_filter_item'>
                                    <input className='checkbox' type='checkbox' id='checkboxes' style={{ backgroundColor: "coral", color: "coral" }} name='rating' value={1} checked={rating==1} onChange={(e)=>setRating(e.target.value)}/>
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

                                 {Data.length>0?(
                                    <>
                                    {
                                        Data.map((item,i)=>{
                                            return <Coursecard w={true}b={true} admin={false} id={item._id} course_duration={item.course_duration} course_name={item.course_name} course_lectures={item.course_lectures}course_thumnail={item.course_thumbnail} skill_level={item.skill_level} course_price={item.course_price} key={i} />
                                        })
                                    }
                                    </>
                                 ):<CircularProgress/>}

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
                   
                </section>

            </section>

            <Contactpage />


        </div>
    )
}

export default Course_list;