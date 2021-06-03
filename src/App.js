import  React from 'react'
import './App.css';
import Topnav from'./Topnav';

import Program1 from './Program1';
import Program2 from "./Program2";
import Program3 from './Program3';
import Program4 from './Program4';
import Program5 from './Program5';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import Navforpro from "./Navforpro"

function App() {
  return (
    <Router> 
      
    <div className="App">
    
    <Switch>


    <Route path="/Program5">
      
   
       <Program5/>
     
       </Route>



    <Route path="/Program4">
      
   
       <Program4/>
     
       </Route>


    <Route path="/Program3">
      
 
       <Program3/>
     
       </Route>

      <Route path="/Program2">
      
     <Navforpro/>
      <Program2/>
    
      </Route>
<Route path="/Program1">
      
      <Navforpro/>
      <Program1/>
      </Route>

        <Route path="/">
       
       
      <Topnav />
     
      </Route>
      </Switch>
    </div>
    
    </Router>
  );
}

export default App;
