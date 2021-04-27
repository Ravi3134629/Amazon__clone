//import logo from './logo.svg';
import React,{useEffect,useState} from "react";
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Checkout from "./Checkout.js";
import Login from "./Login.js";
import Payment from "./Payment.js";
//import 'firebase/firestore';
//import 'firebase/auth';
//import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from "./firebase.js";
import { useStateValue } from './StateProvider';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
const promise=loadStripe('pk_test_51Ijo6QSB9cFhWzXdvv28WTkKjABbrZrzpyfVyBcuNlG57luMlm2xazX6nNoqWqSLkTELuwCjF0yrEWtzDX5PU74j00evg61FQM');

function App() {
  const [{},dispatch]=useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log(authUser);
      if(authUser){
        dispatch({
          type:"SET_USER",
          user:authUser
        })
      }
      else{
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })
  },[])
  return (
<Router>
<div>

      <Switch>
        <Route exact path="/">
          <Header/>
          <Home/>
        </Route>
        
        <Route path="/login">
      <Login/>    
        </Route>
      <Route path="/checkout">
      <Header/>
        <Checkout/>
        </Route>
       <Route>
         <Route path="/payment">
           <Header />
           <Elements stripe={promise}>
           <Payment />
           </Elements>
           
           
         </Route>
         
       </Route>
        <Route path="/">
      
      
      </Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
