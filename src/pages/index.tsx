import * as React from "react";
import {  
  Switch,
  Route 
} from "react-router-dom";

// PAGES 
import MainPage from './MainPage'

const Main = () => {
    return (
        <Switch>
             <Route path="/" component={MainPage}/>
         </Switch>
        )

} 

export default Main   