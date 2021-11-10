import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

interface iProps extends RouteProps {
  component:React.ComponentType
}

function ProtectedRoutes({ component, ...rest }: iProps){
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      alert("You are logged in");
      setIsLoggedIn(true);
    }
  }, []);
 
  return !isLoggedIn ?  <Redirect to="/" /> :<Route component={component} {...rest} />;
}

export default ProtectedRoutes;
