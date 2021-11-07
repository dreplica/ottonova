import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const ChatWidget = React.lazy(() => import("./Page"));
const MapWidget = React.lazy(() => import("./widgets/map"));
const RateWidget = React.lazy(() => import("./widgets/rate"));

function Index() {
  return (
    <Router>
      <React.Suspense fallback={() => "loading..."}>
          <Switch>
            <Route  exact path="/" component={ChatWidget} />
            <Route  path="signup" component={ChatWidget} />
            <Route  path="Register" component={ChatWidget} />
            <Route  path="Chat" component={ChatWidget} />
            <Route  path="*" component={()=><p>Error</p>} />
          </Switch>
      </React.Suspense>
    </Router>
  );
}

export default Index;
