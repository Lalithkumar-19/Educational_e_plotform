import * as React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./Modal.css";
import { CancelRounded } from '@mui/icons-material';


export default function Instructor_Modal() {
    console.log("wf",application_id.id);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='modal'>
            <button id='button' onClick={handleOpen}>Apply Instructor</button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                id='modal_main_div'
            >
                <div id='modal_inner_main'>
                    <h1 style={{ textAlign: "center" }}>Apply Instructor</h1>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ borderRadius: "10px", fontSize: "20px", fontWeight: 800, color: "coral" }}>
                        personal details
                    </Typography>
                    <div id="modal-modal-description" sx={{ mt: 2 }}>
                        <label className='modal_label'>Full Name </label>
                        <input className='modal_input' placeholder=' Name' type='text' />
                        <label className='modal_label'>Last Name</label>
                        <input className='modal_input' placeholder=' Name' type='text' />
                        <label className='modal_label' >Phone number</label>
                        <input className='modal_input' placeholder=' Number' type='text' />
                        <label className='modal_label'>Your Address</label>
                        <input className='modal_input' placeholder=' Address' type='text' />
                        <label className='modal_label'>Date of birth</label>
                        <input className='modal_input' placeholder=' Name' type='date' />

                        <label className='modal_label'>Gender</label>
                        <div className='gender_inputs_div'>
                            <input className='modal_input_radio' placeholder=' Name' type='radio' name='gender' style={{ accentColor: "coral", border: "none", cursor: "pointer" }} /><span>Male</span>
                            <input className='modal_input_radio' placeholder=' Name' type='radio' name='gender' style={{ accentColor: "coral", border: "none", cursor: "pointer" }} /><span>Female</span>
                        </div>
                        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ borderRadius: "10px", fontSize: "20px", fontWeight: 800, color: "coral" }}>
                                Education
                            </Typography>

                        <label className='modal_label'>College or university name</label>
                        <input className='modal_input' placeholder=' Name' type='text' />
                        <label className='modal_label'>Year of passing</label>
                        <input className='modal_input' placeholder=' passing yaer' type='text' />
                        <label className='modal_label'>Board of University</label>
                        <input className='modal_input' placeholder=' University' type='text' />
                        <label className='modal_label'>College or University address</label>
                        <textarea id='modal_text_area' placeholder=' Address'/>

                        <button id='button' className='modal_submit_button'>Submit</button>
                       <span className='cancle_button' onClick={handleClose}><CancelRounded fontSize='large'/></span>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
