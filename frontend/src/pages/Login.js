import React from "react";
import LoginForm from '../components/auth/LoginForm'
import logo from '../static/img/logo2.png';
import bg from '../static/img/slideshow-1.jpg';

const Login = ({login}) => {
    return ( 
        <>
            <div className="sidebar sidebar--left">
              <div className="sidebar-logo">
                 <img className="sidebar-logo__img" src={logo} alt="trello"/>
              </div>
              {login ? <LoginForm/> : null }
            </div>
            <div className="slideshow" id="slideshow-container">
                <div id="slideshow">
                    <img className="slideshow__img" src={bg}/>
                </div>
                <div className="splash-text">
                    <h1 className="splash-text__h1">Plan your tasks</h1>
                    <p> Plan out your tasks and vacations using trello</p>
                </div>
            </div>
        </>
    );
};

Login.defaultProps = {
    login: true
};

export default Login;