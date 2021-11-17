import './App.css';
import React,{useState} from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Alert from './components/layout/Alert';
import About from "./components/pages/About"
import User from "./components/users/User"
import Search from './components/users/Search';
import GithubState from './components/context/github/GithubState';


const App = ()=> {
  
  const [info,setInfo]= useState({
    users:[],
    user:{},
    repos:[],
    loading:false,
    alert:null
  });
  const handleAlert=(data)=>{
    if (data ==="") {
      setInfo((prevItems)=>{
        return {...prevItems,loading:false,alert:{msg:"Please type some keyword to show some users",type:"light"}}
      });
    }
    setTimeout(()=>setInfo((prevItems)=>{
      return {...prevItems, loading:false,alert:null}
    }),3000);
  }
    return (
      <GithubState>
        <Router>
          <div className="App">
            <Navbar title="Github finder" icon="fab fa-github" />
            <Switch>
              <Route exact path="/" render= { ()=> (<div className="container">
                <Alert alertInfo={info.alert}/>
                <Search alertFunction={handleAlert}/>
                <Users />
                </div>)}
              />
              <Route exact path="/about" component={About}/>
              <Route exact path="/users/:username" component={User}/>
            </Switch>
          </div>
        </Router>
      </GithubState>
    );
}

export default App

