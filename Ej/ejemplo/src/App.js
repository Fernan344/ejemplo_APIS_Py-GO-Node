import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Principal from "./Pages/Principal";
import Pagina from "./Pages/Pagina";

function App() {
  return(
    <BrowserRouter>
        <Route path="/index" component={Principal} />
        <Route path="/pagina1" component={Pagina} />
        <Route path="/" render={() => <Redirect to="/index" />} exact={true} />
    </BrowserRouter> 
  ); 
}

export default App;