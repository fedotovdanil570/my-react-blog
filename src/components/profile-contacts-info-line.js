import React from 'react';
import instagramLogo from '../img/instagram.png'
import vkLogo from '../img/vk.png'
import facebookLogo from '../img/facebook.png'

const ContactsInfoLine = props => {
    return(
        <li>
            <div>
                <i className="fa fa-envelope"></i><a href={'mailto:' + props.email}> {props.email}</a>
                <div>
                    <a href={props.socials[0].link} target="_blank" rel="noopener noreferrer"> 
                        <img src={facebookLogo} alt="Facebook" width="30" height="30"></img>
                    </a>
                    <span>&nbsp;&nbsp;&nbsp;</span>
                    <a href={props.socials[1].link} target="_blank" rel="noopener noreferrer"> 
                        <img src={vkLogo} alt="VK" width="30" height="30"></img>
                    </a>
                    <span>&nbsp;&nbsp;&nbsp;</span>
                    <a href={props.socials[2].link} target="_blank" rel="noopener noreferrer"> 
                        <img src={instagramLogo} alt="Instagram" width="30" height="30"></img>
                    </a>
                </div>
            </div>
        </li>
    )
};

export default ContactsInfoLine;

