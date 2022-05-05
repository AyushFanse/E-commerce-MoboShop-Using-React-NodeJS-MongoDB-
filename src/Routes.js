<<<<<<< HEAD
import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";

//-------------------------------* PAGES *-------------------------------//
import Login from './Pages/Auth/LoginComponent.jsx';
import Signup from './Pages/Auth/Sign-upComponent.jsx';
import Home from './Pages/Home/HomeComponent.jsx';
import Cart from './Pages/Cart/CartComponent.jsx';
import Profile from './Pages/Profile/ProfileComponent.jsx';
import EditUser from './Pages/Profile/EditUser.jsx';
import Error from './Pages/Error/Error.jsx';



const Routes = () => {

    const DataBase = 'https://e-commerce-mobo-website.herokuapp.com';

    return(
        <BrowserRouter>
            <Switch>               
                <Route exact path='/'><Home DataBase={DataBase} /></Route>
                <Route exact path="/login"><Login DataBase={DataBase} /></Route>
                <Route exact path="/signup"><Signup DataBase={DataBase} /></Route> 
                <Route exact path='/cart' ><Cart DataBase={DataBase} /></Route>    
                <Route exact path='/profile' ><Profile DataBase={DataBase} /></Route>
                <Route exact path='/profile/:userId' ><EditUser DataBase={DataBase} /></Route>
                <Route exact path='*' ><Error /></Route>
            </Switch>
        </BrowserRouter>
    )
}

=======
import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";

//-------------------------------* PAGES *-------------------------------//
import Login from './Pages/Auth/LoginComponent.jsx';
import Signup from './Pages/Auth/Sign-upComponent.jsx';
import Home from './Pages/Home/HomeComponent.jsx';
import Cart from './Pages/Cart/CartComponent.jsx';
import Profile from './Pages/Profile/ProfileComponent.jsx';
import EditUser from './Pages/Profile/EditUser.jsx';
import Error from './Pages/Error/Error.jsx';



const Routes = () => {

    const DataBase = 'https://e-commerce-mobo-website.herokuapp.com';

    return(
        <BrowserRouter>
            <Switch>               
                <Route exact path='/'><Home DataBase={DataBase} /></Route>
                <Route exact path="/login"><Login DataBase={DataBase} /></Route>
                <Route exact path="/signup"><Signup DataBase={DataBase} /></Route> 
                <Route exact path='/cart' ><Cart DataBase={DataBase} /></Route>    
                <Route exact path='/profile' ><Profile DataBase={DataBase} /></Route>
                <Route exact path='/profile/:userId' ><EditUser DataBase={DataBase} /></Route>
                <Route exact path='*' ><Error /></Route>
            </Switch>
        </BrowserRouter>
    )
}

>>>>>>> 92347de19b2dffdddb9377a24bd634ef5d0f91a2
export default Routes;