import React, { useState } from 'react'
import "../Styles/All_Instructors.css";
import Team_member_card from './Team_member_card';
import Navbar from './Navbar';
import FooterPage from './FooterPage';
import { useNavigate } from 'react-router-dom';

function All_Instructors() {
    const navigate=useNavigate();
    const [data, setdata] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    return (
        <div className='all_instructors'>
            <Navbar />
            <header className='all_instructors_header'>
                <h1 className='all_instructors_title'>
                    Instructors
                </h1>
                <span className='all_instructors_sub_title'>
                    Home/<span className='all_instructors_sub_sub_title'>
                        Instructors
                    </span>
                </span>
            </header>
            <section className='all_instructors_main'>
                <Team_member_card name={"Ashok Kumar"} onClick={()=>navigate("/instructors/about_instructor")} role={"Nxt wave learner"} />
                <Team_member_card name={"Ganesh"} role={"Gate Topper"} />
                <Team_member_card name={"Amarnadh"} role={"Asus Employee"} />
                <Team_member_card name={"Praneel"} role={"Human Resource Manager"} />
                <Team_member_card name={"Meghasyam"} role={"Teacher at IIT Delhi"} />
                <Team_member_card name={"Pavan shankar"} role={"Teacher of DSA"} />
                <Team_member_card name={"Shaleem"} role={"Electonics Engineer"} />
                <Team_member_card name={"Alia"} role={"Technical analyser"} />
               
            </section>
            <section className="pagination">
                {
           data&&data.map((item,index)=>{
            return <span className='paginate_button'>{index+1}</span>
           })
                }
            </section>
            <FooterPage />
        </div>
    )
}

export default All_Instructors