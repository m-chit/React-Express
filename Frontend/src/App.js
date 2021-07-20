import Dashboard from "./containers/dashboard/Dashboard";
import { Fragment } from "react";
import "./App.scss";
import Navigation from "./containers/navigation/Navigation";

const App = () => {
  return (
    <Fragment>
      <div className="App">
        <Navigation></Navigation>
        <Dashboard />
      </div>
    </Fragment>
  );
};

export default App;
