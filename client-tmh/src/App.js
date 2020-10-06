import React from 'react';
// import './styles/app.css';
import { BrowserRouter as Router, Route, Switch,  } from "react-router-dom";
// import {StoreProvider} from './utils/GlobalState'
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'

import UserLogin from './components/UserLogIn/UserLogin';
import UserSingUp from './components/UserSingUp/UserSingUp';
import UserLandingPage from './components/UserLandingPage/UserLandingPage'

const store = configureStore();


const App= ()=> {
  return (
    <Router>
      <Provider store={store}>
        
          <Switch>
            {/* <Route path="/userDashboard" component={UserDashboard} /> */}
            {/* <Route path="/adminDashboard" component={AdminDashboard} /> */}
            <Route path="/" exact component={UserLogin} />
            <Route path="/signup" component={UserSingUp}/>
            <Route path="/home" component={UserLandingPage}/>
          </Switch>
      
      </Provider>
    </Router>
  );
}

export default App;
