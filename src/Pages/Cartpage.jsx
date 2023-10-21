import React from 'react'
import "../Styles/Cartpage.css";
import Navbar from './Navbar';
import Cart_Page_item from '../Multiuse_Pages/Cart_Page_item';
import Contactpage from './FooterPage';
import { useNavigate } from 'react-router-dom';
function Cartpage() {
const navigate=useNavigate();



    return (
        <div className='cart_page'>
            <Navbar />
            <header className='cart_page_header'>
                <h1 className='cart_main_title'>Cart Page</h1>
                <span className='cart_sub_title'>
                    Home/<span className='cart_sub_sub_title'>Cart Page</span>
                </span>

            </header>
            <section className='cart_page_main'>

                <Cart_Page_item />
                <Cart_Page_item />
                <Cart_Page_item />

            </section>
            <footer className='cart_page_footer'>
                <section className='coupon_apply_div'>
                    <input className='coupon_input' type='text' placeholder=' Enter Coupon Code' />
                    <button className='apply_coupon_button' id='button'>Apply Coupon</button>

                </section>
                <section className='cart_totals'>
                    <h1 className='cart_totals_head_title'>Cart Totals</h1>
                    <div className='subtotal'>
                        <span className='header_title'>
                            Subtotal
                        </span>
                        <span className='total_price'>
                            $ 270.00
                        </span>
                    </div>

                   
                    <div className='shipping'>
                        <span className='header_title'>
                            Shipping
                        </span>
                        <span className='shipping_info'>
                            Free
                        </span>
                    </div>


                    <div className='grandtotal'>
                        <span className='header_title'>
                            Total
                        </span>
                        <span className='total_price'>
                            $ 270.00
                        </span>
                    </div>
                    <button className='proceed_button' id='button' onClick={()=>navigate("/yourcart/checkout")}>
                        Proceed to Checkout
                    </button>

                </section>
            </footer>


            <Contactpage />

        </div>
    )
}

export default Cartpage