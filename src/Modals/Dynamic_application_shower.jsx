import * as React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./Modal.css";
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState } from 'react';


export default function Dynamic_application_shower() {
    const params=useParams();
    const [open, setOpen] = React.useState(true);
    const [information,setInformation]=useState({
        name:"lalith",
        email: "lalithkumar",
        number: 9876543210,
    });

    useEffect(async()=>{
        await axios.get(`url_endpoint/${params.id?.id}`,{withCredentials:true}).then((info)=>{
               setInformation(info);
               console.log("application details are fetched");
        }).catch(err=>console.log("error occured while fetching"))
    },[])
    return (
        <div className='modal'>
            <div id='button' style={{width:"100%",height:"100vh",background:"coral"}}></div>

            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                id='modal_main_div'
            >
                <div id='modal_inner_main'>
                    <h1 style={{ textAlign: "center" }}>Instructor Aplication </h1>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ borderRadius: "10px", fontSize: "20px", fontWeight: 800, color: "coral" }}>
                        personal details
                    </Typography>
                    <div id="modal-modal-description" sx={{ mt: 2 }}>
                        <label className='modal_label'>Full Name </label>
                        {params.id}
                        <input className='modal_input' placeholder=' Name' value={information.name} type='text' disabled />
                        <label className='modal_label'>Last Name</label>
                        <input className='modal_input' placeholder=' Name' type='text' value={information.lastname?.lastname} disabled/>
                        <label className='modal_label' >Phone number</label>
                        <input className='modal_input' placeholder=' Number' type='text'  value={information.number}disabled/>
                        <label className='modal_label'>Your Address</label>
                        <input className='modal_input' placeholder=' Address' type='text' value={information.address} disabled />
                        <label className='modal_label'>Date of birth</label>
                        <input className='modal_input' placeholder=' Name' type='date'  value={information.date}disabled />

                        <label className='modal_label'>Gender</label>
                        <div className='gender_inputs_div'>
                            <input className='modal_input_radio' placeholder=' Name' type='radio' name='gender' style={{ accentColor: "coral", border: "none", cursor: "pointer" }}  disabled/><span>Male</span>
                            <input className='modal_input_radio' placeholder=' Name' type='radio' name='gender' style={{ accentColor: "coral", border: "none", cursor: "pointer" }} disabled /><span>Female</span>
                        </div>
                        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ borderRadius: "10px", fontSize: "20px", fontWeight: 800, color: "coral" }}>
                                Education
                            </Typography>

                        <label className='modal_label'>College or university name</label>
                        <input className='modal_input' placeholder=' Name' type='text' disabled />
                        <label className='modal_label'>Year of passing</label>
                        <input className='modal_input' placeholder=' passing yaer' type='text'disabled />
                        <label className='modal_label'>Board of University</label>
                        <input className='modal_input' placeholder=' University' type='text'disabled />
                        <label className='modal_label'>College or University address</label>
                        <textarea id='modal_text_area' placeholder=' Address' disabled/>

                    </div>
                </div>
            </Modal>
        </div>
    );
}
