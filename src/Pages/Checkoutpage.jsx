import React, { useState } from 'react'
import Navbar from './Navbar';
import "../Styles/Checkoutpage.css";
import Contactpage from './FooterPage';
import Feautured_courses from './Feautured_courses';
import { useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';


function Checkoutpage() {
    const cartitems = useSelector((state) => state.cart);
    var totalProductsPrice = cartitems?.reduce(function (previousVal, currentVal) {
        return previousVal + currentVal.price;
    }, 0);
   console.log(cartitems)
      const stripePromise = loadStripe("pk_test_51NytQZSCR13VXk2t4xS5scD4w4R3pGSOYJnkvFd21myYOBWy8Iurot26oRpg03sam9shpg9jePFNk1CQ50LoZvSS00cDpJcctn");
    
      const handlecheckout = async () => {
        const lineItems = cartitems.map((item) => {
          return {
            price_data: {
              currency: "inr",
              unit_amount: item.price * 100,
    
              product_data: {
                name: item.itemname
              },
    
            },
            quantity:item.quantity||2
          }
        })
        
        const{data}=await axios.post('http://localhost:5000/checkout',{lineItems});
        console.log(data);
        const stripe=await stripePromise;
        await stripe.redirectToCheckout({sessionId:data.id});
     
      }
    
      
    
    
    return (
        <div className='checkout_page'>
            <Navbar />
            <header className='checkout_page_header'>
                <h1 className="checkout_page_header_title">Checkout</h1>
                <span className='checkout_page_header_sub_title'>
                    Home/Yourcart/ <span className='checkout_page_header_sub_sub_title'>Checkout</span>
                </span>
            </header>
            <section className='checkout_page_main'>
                <div className='checkout_page_main_left'>
                    <h1 className="checkout_page_main_left_form_title">Personal Details</h1>
                    <form className='checkout_page_address_form'>
                        <label className='form_label'>Your name </label>
                        <input className='your_name checkout_form_input' placeholder='Name' />

                        <label className='form_label'>Last name </label>
                        <input className='your_name checkout_form_input' placeholder='Last Name' />

                        <label className='form_label'>Mobile number </label>
                        <input className='your_name checkout_form_input' placeholder='Mobile Number' />

                        <label className='form_label'>Select State </label>
                        <input className='your_name checkout_form_input' placeholder='Select state' />

                        <label className='form_label'>Email address </label>
                        <input className='your_name checkout_form_input' type='email' placeholder='Email' />

                        <div className='country_nd_postal_code_boxes'>
                            <span className='box1'>
                                <label className='form_label'>Select Country </label>
                                <input className='your_name checkout_form_input' placeholder='Select a country' />
                            </span>
                            <span className='box2'>
                                <label className='form_label'>Postal Code </label>
                                <input className='your_name checkout_form_input' placeholder='PIN Code' />
                            </span>

                        </div>
                        <label className='form_label'>Address </label>
                        <input className='your_name checkout_form_input' placeholder='Address' />
                    </form>
                </div>
                <div className='checkout_page_main_right'>
                    <section className='final_checkout_details'>
                        <h1 className='final_checkout_details_title'>
                            Your Orders
                        </h1>
                        <div className='final_checkout_details_items'>
                            {
                                cartitems?.map((item, index) => {
                                    return (
                                        <>
                                            <span className='item' key={index}>
                                                <span className='item_name'>{item.itemname}</span>
                                                <span className='item_price'>${item.price}</span>
                                            </span>

                                        </>
                                    )
                                })
                            }

                            {/* <span className='item'>
                                <span className='item_name'>Watermelon Plant</span>
                                <span className='item_price'>$200</span>

                            </span> */}

                            {/* <span className='item'>
                                <span className='item_name'>Watermelon Plant</span>
                                <span className='item_price'>$200</span>

                            </span>

                            <span className='item'>
                                <span className='item_name'>Watermelon Plant</span>
                                <span className='item_price'>$200</span>

                            </span>

                            <span className='item'>
                                <span className='item_name'>Watermelon Plant</span>
                                <span className='item_price'>$200</span>

                            </span> */}
                        </div >

                        <div className='subtotal_price'>
                            <span className='subtotal_price_item item'>
                                <span className='title'>Sub total</span>
                                <span className='price'>${totalProductsPrice}</span>
                            </span>
                            <span className='door_step_delivery item'>
                                <span className='title'>Door Step Delivery</span>
                                <span className='price'>Free</span>
                            </span>

                            <span className='order_total item'>
                                <span className='title'>Order total</span>
                                <span className='price'>${totalProductsPrice}</span>
                            </span>
                        </div>
                        <button className='proceed_to_checkout' id="button" onClick={handlecheckout} >Proceed to Checkout</button>
                    </section>

                </div>
            </section>
            <section className='realted_products'>
                <Feautured_courses heading={"Related Courses"} desc={"Discover top courses from below"} titleBoolean={false} />
            </section>
            <Contactpage />


        </div>
    )
}

export default Checkoutpage