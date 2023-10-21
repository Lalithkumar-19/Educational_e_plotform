import React from 'react'
import "./Comment_Temp.css";
import { ReplyRounded, ThumbUpAltOutlined } from '@mui/icons-material';
import dev_pic from "../assets/developerpic.jpg"
function Comment_Temp({img,name,posted_date,commented_text}) {
    return (
        <div className='comment_temp'>
            <section className='commenter_info'>
                <div className='commenter_info_profile'>
                    <img src={dev_pic||img} width={"100%"} style={{ objectFit: "cover", borderRadius: "100%" }} height={"100%"} alt="commenter_profile" />

                </div>
                <div className='commenter_info_details'>
                    <span className='commneter_info_details_name' style={{ fontSize: "15px", fontWeight: "700" }}>
                        {name}
                    </span>
                    <span className='commenter_info_details_posted_date' style={{ fontSize: "12px", opacity: "0.7" }}>
                      {posted_date}
                      {/* May 25,2022 at 11.45 am  */}
                    </span>
                </div>
            </section>
            <section className='commented_text'>
                <p style={{textAlign:"justify"}}>{commented_text}</p>
                {/* <p>Lorem ipsum dolor sit amet accusantium, nesciunt accusamus adipisci! Mollitia quos, nostrum commodi alias neque iste eum eius veniam optio sunt quis omnis, praesentium eaque? Recusandae veniam, excepturi nulla doloremque, illum ipsum ex ad beatae harum, quisquam totam exercitationem? Earum accusamus, facilis architecto ad iste quasi repellendus, minus alias consectetur nihil voluptatibus provident pariatur quam! Sed, eum recusandae? Nesciunt, modi ullam! Blanditiis veritatis laborum a laboriosam beatae vitae, iure dolorem, voluptatibus architecto, sunt facilis! Laboriosam veritatis esse eius alias architecto magnam, reiciendis ullam vitae? Culpa consectetur tempora soluta vero similique quod reiciendis. Odit perferendis amet ab magni inventore aliquam perspiciatis vel nemo iusto voluptatem?</p> */}
            </section>
            <section className='comment_reactions'>
                <span className='like_button' style={{ display: "flex", alignItems: "center", opacity: "0.8" }}><ThumbUpAltOutlined /><span style={{ textAlign: "center", alignItems: "center", opacity: "0.8", marginLeft: "8px" }}>Like</span></span>
                <span className='reply_button' style={{ display: "flex", alignItems: "center", opacity: "0.8" }}><ReplyRounded /><span style={{ textAlign: "center", alignItems: "center", opacity: "0.8", marginLeft: "8px" }}>Reply</span></span>

            </section>
        </div>
    )
}

export default Comment_Temp