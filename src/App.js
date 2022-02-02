import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import Home from './ConnorsGroup.Client.React/features/app/users/components/Home';
import UsersList from './ConnorsGroup.Client.React/features/app/users/components/UsersList';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App () {
  return (
      <Router>
       <div className="App">
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <div className="collapse navbar-collapse" id="navbarNav">
             <ul className="navbar-nav">
               <li className="nav-item ">
                  <NavLink exact to="/Home"> Home </NavLink>
               </li>
               <li className="nav-item ">
                  <NavLink exact to="/UsersList"> UsersList </NavLink>
               </li>
             </ul>
           </div>
         </nav>
        

       <Switch>
         <Route exact path='/Home' component={Home}></Route> 
         <Route exact path='/UsersList' component={UsersList}></Route> 
       </Switch>
       </div>
       </Router>    
  )
}
export default App;