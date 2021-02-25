import React from 'react';
import {Route,Switch} from 'react-router-dom';
import HomePage from './pages/home-page/homepage.component';
import LoginPage from './pages/login-page/loginpage.component';
import Header from './components/header/header.component';


import './App.css';

function App(){
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={LoginPage}/>
                <Route exact path="/" component={HomePage}/>
            </Switch>
        </div>
    );
}

export default App;
