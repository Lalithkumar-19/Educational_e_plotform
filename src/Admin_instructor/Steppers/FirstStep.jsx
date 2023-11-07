import React, { useState } from 'react'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'
import "./firststep.css";

function FirstStep() {

    const [inputText, setInputText] = useState('');
    const [requirements, setRequirements] = useState([]);
    const [Inputgain, setInputgain] = useState('');
    const [Gains, setGains] = useState([]);
    //tags input libarray hooks

    const [tags, setTags] = useState([]);
    const handletags = (tags) => {
        setTags(tags)
    }


    const handleAddRequirements = () => {
        if (inputText.trim() !== '') {
            setRequirements([...requirements, inputText]);
            setInputText('');
        }
    };
    const handleCourseGains = () => {
        if (Inputgain.trim() !== '') {
            setGains([...Gains, Inputgain]);
            setInputgain('');
        }
    }

    return (
        <div className='first_step'>
            <form className="first_step_form">
                <div className='form_item'>
                    <label htmlFor="courseTitle">Course Title:</label>
                    <input type="text" id="courseTitle" required name="courseTitle" />
                </div>
                <div className='form_item'>
                    <label htmlFor="courseDescription">Course Description:</label>
                    <textarea id="courseDescription" required maxLength={500} name="courseDescription" />
                </div>
                {/* 
// course requirements */}
                <div className='form_item'>
                    <textarea
                        maxLength={100}
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Enter a Requirement"
                        required
                    />
                    <button type='button' id='button' onClick={handleAddRequirements}>Add Requirements</button>
                    <ul>
                        {requirements.map((sentence, index) => (
                            <li key={index}>{sentence}</li>
                        ))}
                    </ul>
                </div>


                <div className='form_item'>
                    <textarea
                        value={Inputgain}
                        maxLength={100}
                        onChange={(e) => setInputgain(e.target.value)}
                        placeholder="Enter a Course Gain"
                        required
                    />
                    <button type='button' id='button' onClick={handleCourseGains}>Add Course Gain</button>
                    <ul>
                        {Gains.map((sentence, index) => (
                            <li key={index}>{sentence}</li>
                        ))}
                    </ul>
                </div>


                <div className='form_item'>
                    <label>Category of Course</label>
                    <input placeholder='Enter the category of course' required type='text' maxLength={30} />
                </div>

                <div className='form_item'>
                    <label>Course Duration</label>
                    <div>
                        <input placeholder='Enter the course duration' required type='number' min={3} />
                        <select required>
                            <option selected >Weeks</option>
                            <option selected >Years</option>

                        </select>
                    </div>
                </div>
                <div className='form_item'>
                    <label>Select a Language</label>
                    <select placeholder='Select a Language' required>
                        <option disabled >Select Course Language</option>
                        <option>English</option>
                        <option>Telugu</option>
                    </select>
                </div>
                <div className='form_item'>
                    <label>DO you offer Certificate</label>
                    <select placeholder='Certificate' required>
                        <option disabled ></option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>
                <div className='form_item'>
                    <label>Deadline for course</label>
                    <input placeholder='Deadline' type='date' required />
                </div>

                <div className='form_item'>
                    <label>Price of course</label>
                    <input placeholder='Enter the price of course' type="number" />
                </div>

                <div className='form_item'>
                    <label>Discounted(final_price)</label>
                    <input placeholder='Enter the discounted price' type='number' required />
                </div>
                <div className='form_item'>
                    <TagsInput value={tags} onChange={handletags} maxTags={5} onlyUnique={true} />
                </div>
                <button type='reset' id="button">Reset</button>
            </form>

        </div>
    )
}

export default FirstStep