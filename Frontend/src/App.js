
import Dashboard from './containers/dashboard/Dashboard';
import { Fragment } from 'react';
import './App.scss';
import Navigation from './containers/navigation/Navigation';

function App() {

  return (
    <Fragment>
     <Navigation></Navigation>
       <div className="App">
          <Dashboard />
       </div>
    </Fragment>
  );
}

export default App;
