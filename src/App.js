
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{createContext,useState} from 'react';
import Navigation from './components/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';
import Works from './components/Works';
import Register from './components/Register';
import AddEvent from './components/AddEvent';
import SelectedWorks from './components/SelectedWorks';
import VolunteerList from './components/VolunteerList';
import Success from './components/Success';
import PrivateRoute from './components/PrivateRoute';
import Admin from './components/Admin';
import AddedEvent from './components/AddedEvent';
import Newuser from './components/Newuser';
export const UserContext = React.createContext();


function App() {
  const [user,setUser]=useState({
    name:"",
    mail:""
  });

  return (
    <>
    
    <UserContext.Provider value={[user,setUser]}>
      <Router>
      
      <Navigation/>
        <Switch>


        <Route path="/login">
          <Login/>
        </Route>


        <Route path="/volunteerlist">
          <VolunteerList/>
        </Route>


        <Route path="/success">
          <Success/>
        </Route>


        <Route path="/admin">
          <Admin/>
        </Route>



        <Route path="/newuser">
          <Newuser/>
        </Route>


        


        <PrivateRoute path="/register/:id">
            <Register/>
        </PrivateRoute>


        <PrivateRoute path="/register">
            <Register/>
        </PrivateRoute>




        <Route path="/addevent">
          <AddEvent/>
        </Route>


        <Route path="/addedevent">
          <AddedEvent/>
        </Route>


        <Route path="/selectedworks">
          <SelectedWorks/>
        </Route>

        <Route path="/">
          <Works/>
        </Route>
        
        </Switch>
      </Router>
    </UserContext.Provider>
    </>
  );
}

export default App;
