import React from 'react';
import AuthorizationIcon from './authorization-icon'

class AuthorizationForm extends React.Component{
    
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        console.log('Button is clicked');
    }

    render(){
        return(
            <div className="header-item">
                <input placeholder='Username'></input>
                <button onClick={this.handleSubmit}>Sign in</button>
                <AuthorizationIcon/>
            </div>
        );
    }
}

export default AuthorizationForm;