import React from 'react';

const UserGreeting = () => {
    return <h2>Welcome Back !</h2>;
  };
  const GuestGreeting = () => {
    return <h2>Please Sign Up !</h2>;
  };

  const Greeting = (props) => {
 
   const isLogin = props.isLoggedIn;

  if (isLogin) {
    return <UserGreeting />;
  } 
  else {
    return <GuestGreeting />;
  }


  

};
export default Greeting;
