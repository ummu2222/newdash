import React from 'react';
import {Switch, Route} from "react-router-dom";
import Loader from "./components/screens/Loader";
import './App.css';
import StudentDashboard from './components/screens/StudentDashboard';
import TeacherDashboard from './components/screens/TeacherDashboard';
import TeacherReport from './components/screens/TeacherReport';

const App = () => {
  return (
    <Switch> 
      <Route exact path="/" > <StudentDashboard /> </Route>
      <Route path="/TeacherDashboard" > <TeacherDashboard /> </Route>
      <Route path="/TeacherReport" >  <TeacherReport /> </Route>

      <Route path="/loader" > <Loader /> </Route>
      
    </Switch>
  );
}

export default App;
