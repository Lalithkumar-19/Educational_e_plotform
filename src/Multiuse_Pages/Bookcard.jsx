import React from 'react'
import "../Multiuse_Pages/Bookcard.css";
import Book2 from "../assets/Book2.jpg";
import { useDispatch } from 'react-redux';
import { Toaster, toast } from 'react-hot-toast';


function Bookcard({ name, acualcost, discountcost, aboutbook }) {
    const dispatch = useDispatch();
    const addtocart = (name, price,) => {
        dispatch({ type: "ADD_TO_BASKET", payload: { itemname: name, price: price } });
        toast.success("Item added Successfully");
        console.log("add to cart called")
    }
    return (
        <div className='bookcard'>
            <Toaster
                position="bottom-right"
                reverseOrder={true}
            />
            <section className='bookcard_top'>
                <img src={Book2} width={"100%"} className='book_pic' height={"100%"} style={{ borderRadius: "13px" }} alt='book_pic' />
                <span className='book_offer'>
                    20% off
                </span>
            </section>
            <section className='book_details'>
                <p className='book_name'>{name}</p>
                <p className='about_book'>{aboutbook}</p>
                <div className='book_cost'>
                    <span className='full_cost'>${acualcost}</span>
                    <span className='actual_cost'>${discountcost}</span>
                </div>
                <div className='book_buttons'>
                    <button className='add_to_card' onClick={() => addtocart(name, discountcost)} >Add to Card</button>
                    <span className='review_stars'>
                        ⭐ ⭐ ⭐ ⭐ ⭐
                    </span>
                </div>

            </section>

        </div>
    )
}

export default Bookcard