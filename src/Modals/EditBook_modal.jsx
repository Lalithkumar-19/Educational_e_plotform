import * as React from 'react';
import Modal from '@mui/material/Modal';
import "./Modal.css";
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Button, TextField } from '@mui/material';


export default function EditBook_modal() {
    const params = useParams();
    const [open, setOpen] = React.useState(true);
    const handleClose = () => setOpen(false);
    const [updatedBookData, setBookData] = useState({
        BookName: '',
        BookDesc: '',
        BookAdditional_info: '',
        actual_price: '',
        final_price: '',
        stock: '',
        tags: [],
        images: [],
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookData({
            ...updatedBookData,
            [name]: value,
        });
    };
    const handleUpdate = () => {

    }
    console.log(updatedBookData);
    useEffect(async () => {
        await axios.get(`url_endpoint/${params.id?.id}`, { withCredentials: true }).then((info) => {
            setInformation(info);
            console.log("application details are fetched");
        }).catch(err => console.log("error occured while fetching"))
    }, [])

    return (
        <div className='modal'>
            <div id='button' style={{ width: "100%", height: "10px", background: "transparent" }} onClick={() => setOpen(true)}> Edit Book</div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                id='modal_main_div'
            >
                <div id='modal_inner_main' >
                    <h2>Update Book Data</h2>
                    <div id="modal-modal-description" sx={{ mt: 2 }}>
                        <TextField
                            name="BookName"
                            label="Book Name"
                            value={updatedBookData.BookName}
                            onChange={handleChange}
                        />
                        <TextField
                            name="BookDesc"
                            label="Book Description"
                            value={updatedBookData.BookDesc}
                            onChange={handleChange}
                        />
                        <TextField
                            name="BookAdditional_info"
                            label="Additional Information"
                            value={updatedBookData.BookAdditional_info}
                            onChange={handleChange}
                        />
                        <TextField
                            name="actual_price"
                            label="Actual Price"
                            value={updatedBookData.actual_price}
                            onChange={handleChange}
                        />
                        <TextField
                            name="final_price"
                            label="Final Price"
                            value={updatedBookData.final_price}
                            onChange={handleChange}
                        />
                        <TextField
                            name="stock"
                            label="Number of Items in Stock"
                            value={updatedBookData.stock}
                            onChange={handleChange}
                        />
                        {/* Add fields for tags and images as needed */}
                        <Button onClick={handleUpdate} variant="contained" color="primary" sx={{ marginBottom: "20px" }}>
                            Update
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
