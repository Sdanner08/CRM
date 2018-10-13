import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar/navbar';
import Classes from './pages/Classes/Classes';
import Students from './pages/Students/Students'
import Dashboard from './pages/Dashboard/Dashboard';
import Payment from './pages/Payment/Payment';
import ClassDetails from './pages/Classes/ClassDetails'



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            {/* <Route exact path="/" component={Dashboard} /> */}
            <Route exact path="/classes" component={Classes} />
            <Route exact path="/classes/:id" component={ClassDetails} />
            <Route exact path="/students" component={Students} />
            <Route exact path="/payment" component={Payment} />
            <Route exact path="/" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
