import { Redirect, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const {isAuthenticated, user} =  useAuth0();
  console.log(isAuthenticated, user, localStorage.getItem("isAuthenticated"))
  
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        localStorage.getItem("isAuthenticated") === "true" ? <Component {...props} /> : <Redirect to="/sign_up" />
      }
    />
  );
}

export default ProtectedRoute;