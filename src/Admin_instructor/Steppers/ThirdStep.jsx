import React from 'react'
import "./thirdstep.css";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
function ThirdStep() {
    const [noticeboard, setNoticeboard] = useState("");
    const [assignments, setAssignments] = useState("");
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', "image"],
            ['clean']
        ],
    }

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ];
    return (
        <div className='third_step' >
            <form >
                <label>Notice Board</label>
                <ReactQuill theme='snow' value={noticeboard} formats={formats} modules={modules} onChange={setNoticeboard} style={{ textAlign: "start", width: "100%" }} />
                <label>Assignments</label>
                <ReactQuill theme='snow' value={assignments} formats={formats} modules={modules} onChange={setAssignments} style={{ textAlign: "start", width: "100%" }} />

            </form>
            <button className='create_course' id='button'>Create Course</button>
        </div>
    )
}

export default ThirdStep;