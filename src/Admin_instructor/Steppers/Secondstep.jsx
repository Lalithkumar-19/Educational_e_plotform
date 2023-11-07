import React from 'react';
import './secondstep.css';
import { useState } from 'react';
import { Player } from 'react-tuby';
import 'react-tuby/css/main.css';
import Course_videos from '../../Multiuse_Pages/Course_videos';

function Secondstep() {
    const [course_video, setCourse_video] = useState({
        title: '',
        videos: [],
    });

    const handle_course_video = (ev) => {
        setCourse_video((prev) => ({
            ...prev, // Preserve the existing properties
            title: ev.target.value, // Update the title property
        }));
    };

    const handleVideoFile = (ev) => {
        const selectedFiles = Array.from(ev.target.files); // Convert the FileList to an array

        setCourse_video((prev) => ({
            ...prev, // Preserve the existing properties
            videos: [...prev.videos, ...selectedFiles], // Append the selected files to the videos array
        }));
    };

    const save_videos = () => {
        if (course_video.title !== '' && course_video.videos.length > 0) {
            setCourse_video({ title: '', videos: [] });
        }
    };



    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('title', title);

        selectedFiles.forEach((file, index) => {
            formData.append(`video-${index}`, file);
        });

        await fetch('/api/upload-video', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // Handle the response from the server (e.g., display a success message)
            })
            .catch((error) => {
                console.error(error);
                // Handle errors
            });
    };

    console.log('main course videos ', course_video);

    return (
        <div className="second_step">
            <h2> Add Course Videos</h2>
            <div className="second_step_inner">
                <label>Section Title</label>
                <input
                    type="text"
                    maxLength={80}
                    placeholder="Title"
                    value={course_video.title}
                    onChange={handle_course_video}
                    required

                />
                <br />
                <div className="videos_input_div" >
                    <label>Videos for this Title</label>
                    <input
                        type="file"
                        accept="video/*"
                        id="input-file-videos"
                        onChange={handleVideoFile}
                        required
                        disabled={course_video.title !== '' ? false : true}
                        style={{ cursor: course_video.title !== '' ? 'default' : 'not-allowed' }}
                    />
                    <span style={{ color: 'red' }}>Upload videos corresponding to this title in sequence</span>
                    <span style={{ color: 'red' }}>You can add some videos under this title before saving this section</span>
                    <button className="save_button" id="button" type="button" onClick={save_videos}>
                        Save
                    </button>
                </div>
            </div>

            <div className="course_preview">


                {!!course_video.videos ? (
                    <>

                        {course_video.title ? <p className="title">
                            <h2>Section  Preview :</h2>
                            {course_video.title}</p> : ''}

                        {course_video.videos.map((item, index) => {
                            if (item !== (undefined || null)) {
                                const url = URL.createObjectURL(item);
                                return (
                                    <div key={index}>
                                        <p>{item.name}</p>
                                        <Player src={url} dimensions={{ width: '70%', height: '300px' }} />
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </>
                ) : (
                    ''
                )}
            </div>
            <h2 className='saved_sections'>Saved Sections</h2>
            <Course_videos admin={true} />
        </div>
    );
}

export default Secondstep;
