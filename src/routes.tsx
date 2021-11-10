import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoutes from "./components/protected-routes";

const ChatWidget = React.lazy(() => import("./Page/chat")) as React.ComponentType
const Auth = React.lazy(() => import("./Page/auth")) as React.ComponentType

function Index() {
  return (
    <Router>
      <React.Suspense fallback={<p>loading...</p>}>
        <Switch>
          <Route exact path="/signup" component={Auth} />
          <ProtectedRoutes  path="/chat" component={ChatWidget} />       
          <ProtectedRoutes exact path="/" component={ChatWidget} />        
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default Index;
