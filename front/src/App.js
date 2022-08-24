import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//import Dashboard from "./components/admin/Dashboard";
//import Profile from "./components/admin/Profile";
import MasterLayout from "./layouts/admin/MasterLayout";

function App() {
  return (
    <div className="App">

<Router>
    <Routes>

   <Route exact path="/admin" name="Admin" render={(props) => <MasterLayout {...props}/> } />
  
  
    </Routes>
  </Router>
     
    </div>
  );
}

export default App;


/*

 <Route exact path="/admin/dashboard" element={<Dashboard/>}/>
   <Route exact path="/admin/profile" element={<Profile/>}/>
   */