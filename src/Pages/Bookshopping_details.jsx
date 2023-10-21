import React, { useEffect, useState } from 'react';
import "../Styles/Bookshopping_details.css";
import Contactpage from './FooterPage';
import Navbar from './Navbar';
import Reviewpage from '../Multiuse_Pages/Reviewpage';
import Bookcard from '../Multiuse_Pages/Bookcard';
import bookpic from "../assets/dld.jpeg";
import developerpic from "../assets/developerpic.jpg";
import coursespic from "../assets/courses.jpg";
import { FavoriteBorder, PaymentOutlined, ShoppingCart } from '@mui/icons-material';
import ShareIcon from '@mui/icons-material/Share';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

function Bookshopping_details() {
    const [Screen_small, setScreen_small] = useState(false);
    useEffect(() => {
        if (window.innerWidth <= 600) {
            setScreen_small(true);
        }
        else {
            setScreen_small(false);
        }
    }, [])

    const [pics] = useState([bookpic, developerpic, coursespic]);
    const [Currbackdrop, setCurr_backdrop] = useState(0);
    const [BookQuantity, setBookQuantity] = useState(1);




    function book_description() {
        return <p style={{ textAlign: "justify", lineHeight: "25px", marginTop: "12px", paddingRight: "19px" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores odit iste consectetur tempora! Nemo voluptatum ea qui ab quidem unde saepe vero! Praesentium impedit expedita alias nihil ducimus ipsam in, adipisci asperiores sequi esse distinctio assumenda maiores aliquam minus omnis voluptate laborum laboriosam pariatur cupiditate minima harum ab odio? Voluptate!</p>
    }

    function Additional_information_about_book() {
        return (

            <>
                <p style={{ textAlign: "justify", lineHeight: "25px", marginTop: "12px", paddingRight: "19px" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores odit iste consectetur tempora! Nemo voluptatum ea qui ab quidem unde saepe vero! Praesentium impedit expedita alias nihil ducimus ipsam in, adipisci asperiores sequi esse distinctio assumenda maiores aliquam minus omnis voluptate laborum laboriosam pariatur cupiditate minima harum ab odio? Voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt veniam sapiente optio suscipit, deleniti libero amet nesciunt a consectetur assumenda ipsum quas. Consequuntur maiores facilis vero adipisci. Sapiente, quae. Quod, culpa! Nobis aperiam amet quis nisi qui dolore pariatur ut blanditiis. Dignissimos corrupti nemo debitis labore, corporis id quos recusandae officia explicabo eveniet quam quia culpa sint iure perferendis repudiandae consequatur, inventore quidem dolores magnam obcaecati assumenda, quas asperiores. Soluta, praesentium esse. Beatae perspiciatis quaerat nostrum necessitatibus odio. Repellat nulla ut quaerat molestias ipsa. Fuga quaerat exercitationem accusamus incidunt quae?</p>
            </>
        )
    }

    const [Active1, setActive1] = useState(true);
    const [Active2, setActive2] = useState(false);
    const [Active3, setActive3] = useState(false);

    const [page, setPage] = useState(0);

    function Info_toggler() {
        switch (page) {
            case 1:
                return book_description();
            case 2:
                return Additional_information_about_book();
            case 3:
                return <Reviewpage />
            default:
                return book_description();
        }


    };

    function ChangeBgColor() {
        switch (page) {
            case 1:
                setActive1(true);
                setActive2(false);
                setActive3(false);
                break;
            case 2:
                setActive1(false);
                setActive2(true);
                setActive3(false);
                break;
            case 3:
                setActive1(false);
                setActive2(false);
                setActive3(true);
                break;
        }

    }


    useEffect(() => {

        ChangeBgColor();
    }, [page])


    return (
        <div className='bookshopping_details'>
            <Navbar />

            <section className='bookshopping_details_header_part'>
                <h1 style={{ marginLeft: "0px", marginBottom: "3px" }}>Book Shop Detailes</h1>
                <span >Home/<span style={{ color: "coral" }}>Book Shop</span></span>
            </section>

            <section className='bookshopping_details_main_section'>
                <div className='bookshopping_details_main_section_left'>
                    <div className='book_pic'>
                        <img src={pics[Currbackdrop]} width={"100%"} height={"100%"} style={{ margin: '0px', borderRadius: "10px" }} alt='book_backdrop' />
                    </div>
                    <div className='bookshop_all_pics'>

                        {
                            pics ? (
                                pics.map((item, index) => {
                                    return (
                                        <>
                                            <span className='bookshop_pic'  >
                                                <img src={item} key={index} onClick={() => setCurr_backdrop(index)} width={"100%"} height={"100%"} style={{ margin: '0px', borderRadius: "10px", cursor: "pointer" }} alt='book_backdrop' />
                                            </span>
                                        </>
                                    )
                                })
                            ) : ""
                        }
                    </div>
                    {
                        !Screen_small ? (
                            <>
                                <div className='bookshop_transition_buttons'>
                                    <button id='bookshop_details_button' className='button' style={{ backgroundColor: Active1 ? "coral" : "transparent" }} onClick={() => { setPage(1) }} >Description</button>
                                    <button id='bookshop_details_button' className='button' style={{ backgroundColor: Active2 ? "coral" : "transparent" }} onClick={() => { setPage(2) }}>Additional Information</button>
                                    <button id='bookshop_details_button' className='button' style={{ backgroundColor: Active3 ? "coral" : "transparent" }} onClick={() => { setPage(3) }} >Reviews</button>

                                </div>

                                {/* toggler content  */}
                                <div className='selected_details'>
                                    {Info_toggler()}
                                </div>





                            </>
                        ) : ""
                    }


                </div>
                <div className='bookshopping_details_main_section_right'>
                    <h1 className='book_title'>Psychology Money</h1>
                    <span className='book_author'>By Lalith kumar</span>
                    <div className='book_ratings'>
                        <span className='book_ratings_main_stars'>
                            ⭐⭐⭐⭐⭐ (5) Reviews
                        </span>

                    </div>
                    <div className='book_price'>
                        <span className='actual_price'>
                            $65.00
                        </span>
                        <span className='discounted_price'>
                            $50.00
                        </span>
                        <span className='no_of_stocks'>
                            (70 in stack)
                        </span>
                    </div>
                    <p className='about_book'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vero explicabo molestiae accusamus excepturi maiores vitae quas enim inventore quaerat.
                    </p>
                    <div className='book_action_buttons'>
                        <div className='number_of_books'>
                            <span className='decrease' onClick={() => {
                                if (BookQuantity === 1) {
                                    setBookQuantity(1);
                                }
                                else {
                                    setBookQuantity(p => p - 1);
                                }
                            }}>
                                -
                            </span>
                            <span className='number_of_pieces'>
                                {BookQuantity}
                            </span>
                            <span className='increase' onClick={() => setBookQuantity(p => p + 1)}>
                                +
                            </span>
                        </div>
                        <button className='add_to_cart'>
                            <span className='shopping_icon'>
                                <ShoppingCart />
                            </span> Add to Cart
                        </button>
                    </div>
                    <div className='lower_buttons'>
                        <span className='add_to_wish'>
                            <span className='wish_icon'>
                                <FavoriteBorder />
                            </span>
                            Add To Wishlist
                        </span>

                        <span className='share_button'>
                            <span className='share_icon'>
                                <ShareIcon />
                            </span>
                            Share
                        </span>
                    </div>
                    <div className='delivery_details'>
                        <div className='free_delivery'>
                            <LocalShippingOutlinedIcon fontSize='large' style={{ color: "coral" }} />
                            <span className='free_delivery_header'>
                                <span className='top_title'>
                                    Free Delivery
                                </span>
                                <span className='sub_title'>
                                    Orders over $900
                                </span>
                            </span>
                        </div>

                        <div className='free_delivery'>
                            <PaymentOutlined fontSize='large' style={{ color: "coral" }} />
                            <span className='free_delivery_header'>
                                <span className='top_title'>
                                    Secure Payment
                                </span>
                                <span className='sub_title'>
                                    100% Secure Payments
                                </span>
                            </span>
                        </div>

                    </div>
                    <div className='book_tags'>
                        <span className='tags_title'>Tags:</span>
                        <p>
                            web design,Ui design,Ux design,Graphic design
                        </p>
                    </div>
                    {
                        Screen_small ? (
                            <>
                                <div className='bookshop_transition_buttons'>
                                    <button id='bookshop_details_button' className='button' style={{ backgroundColor: Active1 ? "coral" : "transparent" }} onClick={() => { setPage(1) }} >Description</button>
                                    <button id='bookshop_details_button' className='button' style={{ backgroundColor: Active2 ? "coral" : "transparent" }} onClick={() => { setPage(2) }}>Additional Information</button>
                                    <button id='bookshop_details_button' className='button' style={{ backgroundColor: Active3 ? "coral" : "transparent" }} onClick={() => { setPage(3) }} >Reviews</button>

                                </div>

                                {/* toggler content  */}
                                <div className='selected_details'>
                                    {Info_toggler()}
                                </div>





                            </>
                        ) : ""
                    }


                </div>


            </section>



            <section className='related_products'>
                <h1 style={{ marginLeft: "0px", textAlign: "center" }} className='related_produts_heading'>
                    Related Products
                </h1>
                <div className='related_products_main'>
                    <Bookcard aboutbook={"Robust Web Architecture with Node, HTML5, and Modern JS Libraries"} acualcost={120} discountcost={(Math.floor(Math.random() * 1000))} name={"Secrets to unlock"} key={() => { return Math.floor(Math.random * 1000) }} />
                    <Bookcard aboutbook={"Robust Web Architecture with Node, HTML5, and Modern JS Libraries"} acualcost={120} discountcost={(Math.floor(Math.random() * 1000))} name={"Secrets to unlock"} key={() => { return Math.floor(Math.random * 1000) }} />
                    <Bookcard aboutbook={"Robust Web Architecture with Node, HTML5, and Modern JS Libraries"} acualcost={120} discountcost={(Math.floor(Math.random() * 1000))} name={"Secrets to unlock"} key={() => { return Math.floor(Math.random * 1000) }} />
                    <Bookcard aboutbook={"Robust Web Architecture with Node, HTML5, and Modern JS Libraries"} acualcost={120} discountcost={(Math.floor(Math.random() * 1000))} name={"Secrets to unlock"} key={() => { return Math.floor(Math.random * 1000) }} />



                </div>


            </section>

            <Contactpage />
        </div>
    )
}

export default Bookshopping_details