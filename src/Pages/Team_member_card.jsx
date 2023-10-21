import React from 'react'
import "../Styles/teamcard.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Team_member_card({name,role}) {
    return (

        <div class="container">

            <div class="inner_container">
                <div class="our-team">
                    <div class="picture">
                        <img class="img-fluid" src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg" />
                    </div>
                    <div class="team-content">
                        <h3 class="name">{name}</h3>
                        <h4 class="title">{role}</h4>
                    </div>
                    <ul class="social">
                        <li> <LinkedInIcon/></li>
                        <li><FacebookIcon/></li>
                        <li><InstagramIcon/></li>
                        <li><TwitterIcon/></li>
                    </ul>
                </div>
            </div>




        </div>
    )
}

export default Team_member_card