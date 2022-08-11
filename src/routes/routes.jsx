import React from "react";
import Home from "../page/home.jsx"
import { BrowserRouter, Route } from "react-router-dom";

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component = { Home } path= {`/${pokemon}`} />
        </BrowserRouter>
    )
}

export default Routes