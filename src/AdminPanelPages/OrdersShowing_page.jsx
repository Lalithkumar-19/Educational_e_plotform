import React from 'react'
// import "./OrdersShowing_page.css";
import "../UsersPFPages/orderspage.css"
function OrdersShowing_page() {
    const orders = [
        { id: 1, product: 'Robust Python', total: 50, status: 'Processing', payment: "Cod", phone: 973456765678, address: "Gurukula kandriga ,chithoor -517643Gurukula kandriga ,chithoor -517643Gurukula kandriga ,chithoor -517643Gurukula kandriga ,chithoor -517643  " },
        { id: 2, product: 'Cpp dsa', total: 75, status: 'Shipped', payment: "Upi", phone: 973456765678, address: "Gurukula kandriga ,chithoor -517643" },
        { id: 3, product: 'core java', total: 30, status: 'Delivered', payment: "cod", phone: 973456765678, address: "Gurukula kandriga ,chithoor -517643" },
    ];

    return (
        <div className='orders_container'>
            <header className="orders_header">
                <h2 className='header_top'>Orders <span style={{ color: "coral" }}>Page</span></h2>
            </header>
            <div className='all_orders'>

                <table style={{ overflow: "scroll" }} >
                    <tr>
                        <th>Product</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Payment</th>
                        <th>Address</th>
                        <th>Delivered?</th>
                        <th>Phone Number</th>

                    </tr>
                    {
                        orders && orders.map((item, index) => {
                            return (
                                <>
                                    <tr key={index}>
                                        <td>{item.product}</td>
                                        <td>{item.total}</td>
                                        <td style={{ color: "red", fontSize: "18px" }}>{item.status} </td>
                                        <td>{item.payment}</td>
                                        <td>{item.address}</td>
                                        <td><select>
                                            <option>Processing</option>
                                            <option>confirmed</option>
                                            <option>Near to you</option>
                                            <option>Delivered</option>
                                        </select>
                                        </td>
                                        <td>{item.phone}</td>


                                    </tr>
                                </>
                            )
                        })
                    }
                </table>
            </div>



        </div>
    );
}

export default OrdersShowing_page;