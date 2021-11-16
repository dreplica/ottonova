import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { getUserDetails } from "../../auth/register";
import { AppContext } from "../../context/app-state";

interface iProps extends RouteProps {
  component: React.ComponentType;
}

function ProtectedRoutes({ component: Component, ...rest }: iProps) {
  const { setUsername } = React.useContext(AppContext);
  const token = localStorage.getItem("token");
  React.useEffect(() => {
      getUserDetails(token as string)
        .then((res) => {
          setUsername(res);
        })
        .catch((err) => {
          alert("You are not logged in");
        });
    
  }, []);

  return (
    <Route
      {...rest}
      render={() => {
        return token ? <Component /> : <Redirect to="/signup" />;
      }}
    />
  );
}

export default ProtectedRoutes;
