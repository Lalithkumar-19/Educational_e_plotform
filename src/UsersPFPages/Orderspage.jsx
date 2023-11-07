import React from 'react';
import Navbar from '../Pages/Navbar';
import Contactpage from '../Pages/FooterPage';
import "./orderspage.css";

function OrdersPage() {
    // Sample data for orders
    const orders = [
        { id: 1, product: 'Robust Python', total: 50, status: 'Processing' },
        { id: 2, product: 'Cpp dsa', total: 75, status: 'Shipped' },
        { id: 3, product: 'core java', total: 30, status: 'Delivered' },
    ];

    return (
        <div className='orders_container'>
            <Navbar />
            <header className="orders_header">
                <h2 className='header_top'>Home/<span style={{ color: "coral" }}>my orders</span></h2>
            </header>
            <div className='all_orders'>
                
                <table >
                    <tr>
                        <th>Product</th>
                        <th>Total</th>
                        <th>Status</th>

                    </tr>
                    {
                        orders && orders.map(item=>{
                            return(
                                <>
                                 <tr>
                                    <td>{item.product}</td>
                                    <td>{item.total}</td>
                                    <td style={{ color: "red", fontSize: "18px" }}>{item.status}</td>
                                </tr>
                                </>
                            )
                        })
                    }
                </table>
            </div>
            


            <Contactpage />
        </div>
    );
}

export default OrdersPage;
