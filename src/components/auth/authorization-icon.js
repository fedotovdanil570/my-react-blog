import React from 'react';
import userIcon from '../icons/user-icon.svg'
import userIconPng from '../img/user-icon.png'

const AuthorizationIcon = props =>{

return(
    <div className="user-icon">
        <object type="image/svg+xml" data={userIcon} width="20px" height="20px" alig>
            <img src={userIconPng} alt='UserIcon' />   
        </object>
    </div>
)

};

export default AuthorizationIcon;