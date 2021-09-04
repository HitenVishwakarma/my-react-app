import React, {useState} from 'react';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Greeting from './Greeting';
const LoginControl = () => {

    const [isLogin, setIsLogin] = useState(false);

    const handleLoginClick = () => {
        setIsLogin(true);
    }
    const handleLogoutClick = () => {
        setIsLogin(false);
    }

    return (
        <div>
            <Greeting isLoggedIn = {isLogin}/>
             {isLogin &&  <LoginButton onClick = {handleLoginClick} />}
             {isLogin && <LogoutButton onClick = {handleLogoutClick}/>}
          </div>
      );

  
    
};
export default LoginControl;
