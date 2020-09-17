import React from 'react';
import './styles/app.css';
import { BrowserRouter as Router, Route, Switch,  } from "react-router-dom";
import {StoreProvider} from './utils/GlobalState'
import UserLogin from './components/UserLogIn/UserLogin';
import UserSingUp from './components/UserSingUp/UserSingUp';
import UserLandingPage from './components/UserLandingPage/UserLandingPage'


const App= ()=> {
  return (
    <Router>
      <StoreProvider>
        <div className="App">
          <p className="text-red-300">Welcome to Track My Healing</p>
          <Switch>
            {/* <Route path="/userDashboard" component={UserDashboard} /> */}
            {/* <Route path="/adminDashboard" component={AdminDashboard} /> */}
            <Route path="/" exact component={UserLogin} />
            <Route path="/signup" component={UserSingUp}/>
            <Route path="/home" component={UserLandingPage}/>
          </Switch>

    
        </div>
      </StoreProvider>
    </Router>
  );
}

export default App;
