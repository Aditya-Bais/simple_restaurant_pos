import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import App from './components/App';
import './routes.css';
function Routes() {

    return (
      
      <div className="forms"  >
        <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/pos/register" component={Register} />
      <Route path="/pos/ver/main" component={App} />
      </Switch>
    </div>
    
    );
  }
  
  export default Routes;
  