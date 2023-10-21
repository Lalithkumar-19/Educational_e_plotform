import React,{useState} from 'react'
import "./Cart_Page_item.css"
import developerpic from "../assets/developerpic.jpg"


function Cart_Page_item() {
    const [quantValue, setQuantvalue] = useState(1);
    return (
        <div className='cart_page_item'>

            <div className='item_img_div'>
                <img src={developerpic}  width="100%" height={"100%"} style={{ borderRadius: "10px" }} alt="cart_prodcut_img" />
            </div>

            <div className='item_info'>
                <span className='item_name'>
                    HardCover
                </span>
                <span className='item_owner'>
                    M.Lalith kumar
                </span>
            </div>

            <div className='item_price'>
                <span className='price'>
                    $200.00
                </span>
            </div>
            <div className='item_quantity'>
                <span className='quantity_number'>
                    {quantValue}
                </span>
                <span className='quantity_changer'>
                    <span className='up' onClick={() => setQuantvalue(p => p + 1)}>^</span>
                    <span className='down' onClick={() => {
                        if (quantValue === 1) {
                            setQuantvalue(1);
                        }
                        else {
                            setQuantvalue(p => p - 1);
                        }


                    }}>˅</span>
                </span>
            </div>
            <div className='total_amount'>
                <span  style={{color:"coral"}}className='total_quantity_amount'>
                    $ {quantValue * 200}
                </span>
            </div>

        </div>

    )
}

export default Cart_Page_item