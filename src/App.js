import React from "react";

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


import {

    Home,
    About,
    Cart,
    Checkout,
    Product,
    SingleProduct,
    Error

} from './pages';


import {Footer} from './components';

function App(){

    return(
       <Router>
         
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>

              <Route exact path="/products">

                  <Product />

              </Route>

              <Route exact path="/about">
               
                <About />

              </Route>

              <Route exact path="/cart">
                   
                   <Cart />

              </Route>

              <Route exact path="/product/:id" children={<SingleProduct />} />

              <Route exact path="/checkout">
                 <Checkout />
              </Route>

           <Route path="*">

               <Error />

           </Route>

          </Switch>

          <Footer />

       </Router>

    )
}

export default App;

