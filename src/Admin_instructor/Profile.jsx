import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./profile.css";


const Profile = () => {
    const params = useParams();
    const [user, setUser] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [skills, setSkills] = useState([{ name: "React js", value: 80 }, { name: "Node js", value: 80 }, { name: "Express js", value: 80 }]);
    const [formData, setFormData] = useState({});
    const [skill, setSkill] = useState(false);
    const [add_newSkill, setNew_skill] = useState({ name: "", value: "" });


    const fetchUserData = async () => {
        try {
            const response = await axios.get(`/api/user/${params.id}`);
            setUser(response.data);
            setFormData(response.data);
        } catch (error) {
            console.error("Error fetching user data", error);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, [params.id]);

    const handleUpdateUser = async () => {
        try {
            const response = await axios.put(`/api/user/${params.id}`, formData);
            setUser(response.data);
            setIsEditing(false);
        } catch (error) {
            console.error("Error updating user data", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="user_profile">
            <h2>User Profile</h2>
            <div className="user_details">
                <img className="user_dp" src="http://localhost:5173/src/assets/developerpic.jpg" alt="profile_pic" />

                <div className="input_divs">


                    <div className="input_item">
                        <label> Your Name</label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <span className="field_values">Lalith kumar</span>
                        )}

                    </div>

                    <div className="input_item">
                        <label> Profession or Work</label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <span>Fullstack Developer</span>
                        )}

                    </div>

                    <div className="input_item">
                        <label>About Yourself</label>
                        {isEditing ? (
                            <textarea
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad perferendis distinctio dolores iste harum similique iusto esse. Veniam perferendis nemo porro quidem repellat placeat dignissimos, earum, quae omnis quo eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nesciunt? Dicta ut cupiditate cumque quisquam pariatur quibusdam nostrum laboriosam rem earum, aspernatur deleniti asperiores. Ullam unde hic necessitatibus nisi dolorem et exercitationem qui adipisci, dolor repellat facilis facere fuga consectetur voluptas deleniti totam enim architecto magni asperiores! Ducimus, at unde?</span>
                        )}

                    </div>

                    <div className="input_item">
                        <label>Your Address</label>
                        {isEditing ? (
                            <textarea
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <span> Mr John Smith. 132, My Street, Bigtown BG23 4YZ</span>
                        )}

                    </div>

                    <div className="input_item">
                        <label> Your Email</label>
                        {isEditing ? (
                            <input
                                type="email"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <span>lalithdev123@gmail.com</span>
                        )}

                    </div>

                    <div className="input_item">
                        <label> Phone Number</label>
                        {isEditing ? (
                            <input
                                type="number"
                                name="phoneNumber"
                                value={formData.address}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <span>9573247732</span>
                        )}

                    </div>


                    <div className="input_item">
                        <label> Website Url</label>
                        {isEditing ? (
                            <input
                                type="number"
                                name="phoneNumber"
                                value={formData.address}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <span>www.lalithkumar.com</span>
                        )}

                    </div>


                    <div className="input_item">
                        <label>Years of Exprerinece</label>
                        {isEditing ? (
                            <input
                                type="number"
                                name="experience"
                                value={formData.address}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <span>12</span>
                        )}

                    </div>


                    <div className="input_item">
                        <label> Linkedin </label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="linkedin"
                                value={formData.address}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <span>www.linkedin/lalithkumar.com</span>
                        )}

                    </div>
                    <div className="input_item">
                        <label> Facebook </label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="facebook"
                                value={formData.address}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <span>www.fb.com/lalithkumar_005</span>
                        )}

                    </div>

                    <div className="input_item">
                        <label> Twitter </label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="phoneNumber"
                                value={formData.address}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <span>www.twitter/lalithkumar</span>
                        )}

                    </div>
                    <hr />
                    <h1 style={{ textAlign: "start", marginLeft: "0px", color: "#dc143" }}>Skills Section</h1>

                    <div className="input_item " id="skills_input">
                        <label> Skills you have</label>
                        {isEditing ? (
                            <>
                                {skills ? (
                                    <>
                                        {skills.map((item, index) => {
                                            return (<div id="skills_showing" >
                                                <div id="skill_shower_input"><input type="text" name={item} placeholder="skill name" /> <input placeholder="percentage" type="number" min={30} max={100} /></div>
                                            </div>
                                            )
                                        })}
                                        {
                                            skill ? (
                                                <>
                                                    <div id="skills_showing" >
                                                        <div id="skill_shower_input"><input type="text" name="new_skill" placeholder="skill name" /> <input placeholder="percentage" type="number" min={30} max={100} /></div>
                                                    </div>
                                                </>
                                            ) : ""

                                        }
                                        <button id="button" onClick={() => setSkill((prev) => !prev)} >{skill ? "Save" : "Add new skill"}</button>

                                    </>
                                ) : ""}
                            </>
                        ) : (
                            <>
                                {skills ? (
                                    <>
                                        {skills.map((item, index) => {
                                            return (<div id="skills_showing" >
                                                <span key={index}>{item.name} having know  {item.value}%</span>
                                            </div>
                                            )
                                        })}
                                    </>
                                ) : ""}
                            </>)
                        }
                    </div>


                    <button id="button"
                        onClick={() => setIsEditing((prev)=>!prev)}
                    >
                        {isEditing ? "Save" : "Edit"}
                    </button>

                </div>
            </div>



        </div>
    );
};

export default Profile;
