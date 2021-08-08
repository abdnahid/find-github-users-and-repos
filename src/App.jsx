import './App.css';
import React,{Component} from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Alert from './components/layout/Alert';
import About from "./components/pages/About"
import axios from 'axios';
import User from "./components/users/User"
import Search from './components/users/Search';

const clientId = process.env.REACT_APP_CLIENT_ID;
const clientSecret=process.env.REACT_APP_CLIENT_SECRET;



class App extends Component {
  state={
    users: [],
    user:{},
    repos:[],
    loading:false,
    alert:null
  };
  handleSearch= async searchValue=>{
    this.setState({loading:true});
    const res= await axios.get("https://api.github.com/search/users?q="+searchValue+"&client_id="+clientId+"&client_secret="+clientSecret);
    this.setState({users:res.data.items, loading:false});
  }
  handleClear= ()=>{
    this.setState({users:[],loading:false})
  }
  handleAlert=(data)=>{
    if (data ==="") {
      this.setState({loading:false,alert:{msg:"Please type some keyword to show some users",type:"light"}})
    }
    setTimeout(()=>this.setState({loading:false,alert:null}),3000);
    console.log(this.state);
  }
  getUsers=async (username)=>{
    this.setState({loading:true});
    const res= await axios.get(`https://api.github.com/users/${username}?client_id=${clientId}&client_secret=${clientSecret}`);
    const repos = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort="updated"&client_id=${clientId}&client_secret=${clientSecret}`);
    this.setState({user:res.data, loading:false, repos: repos.data});
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar title="Github finder" icon="fab fa-github" />
          <Switch>
            <Route exact path="/" render= { ()=> (<div className="container">
              <Alert alertInfo={this.state.alert}/>
              <Search searchFunction={this.handleSearch} clearFunction={this.handleClear} alertFunction={this.handleAlert} clearShow={this.state.users.length>0?true:false}/>
              <Users loading={this.state.loading} userList={this.state.users} />
              </div>)}
            />
            <Route exact path="/about" component={About}/>
            <Route exact path="/users/:username" render={(props)=>(<div className="container">
              <User {...props} userInfo={this.state.user} userFunction={this.getUsers} loading={this.state.loading} userRepos={this.state.repos}/>
            </div>)}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App

