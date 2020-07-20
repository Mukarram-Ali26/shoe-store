import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
   } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';

import Product from './Components/Product';
import ProductItem from './Components/ProductItem';
import NavBar from './Components/NavBar';

function RouteC() {
    return (
        <div >
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/About" component={About} />
                    <Route exact path="/Product" component={Product} />
                    <Route path="/Product/:id" component={ProductItem} />
                    <Route path="*" components={()=><h2>404 not found</h2>} />
                </Switch>
            </Router>
        </div>
    );
}

export default RouteC;
