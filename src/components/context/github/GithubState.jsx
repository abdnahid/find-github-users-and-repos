import React from "react";
import { useReducer } from "react";
import GithubContext from "./GithubContext";
import {SEARCH_USERS,SET_USER,SET_LOADING,SET_ALERT,GET_REPOS,CLEAR_USERS} from "../type";
import GithubReducer from "./GithubReducer";
import axios from "axios";

const clientId = process.env.REACT_APP_CLIENT_ID;
const clientSecret=process.env.REACT_APP_CLIENT_SECRET;

const GithubState=props=>{
    const initialState = {
        users:[],
        user:{},
        repos:[],
        loading:false,
        alert:null
    }
    
    const [state,dispatch]=useReducer(GithubReducer,initialState)

    //search users
    const handleSearch= async searchValue=>{
        setLoading();
        const res= await axios.get("https://api.github.com/search/users?q="+searchValue+"&client_id="+clientId+"&client_secret="+clientSecret);
        dispatch({type:SEARCH_USERS,payload:res.data.items});
    }

    //clear users
    const handleClear= ()=>{
        setLoading();
        dispatch({type:CLEAR_USERS})
    }

    //set Loading
    const setLoading = ()=> dispatch({type: SET_LOADING})

    //search single user
    
    const getUsers=async (username)=>{
        setLoading();
        const res= await axios.get(`https://api.github.com/users/${username}?client_id=${clientId}&client_secret=${clientSecret}`);
        dispatch({type:SET_USER,payload:res.data});
    }

    //get repos
    
    const getRepos=async (username)=>{
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort="updated"&client_id=${clientId}&client_secret=${clientSecret}`);
        dispatch({type:GET_REPOS,payload:res.data});
    }
    return (<GithubContext.Provider value={{users:state.users,user:state.user,repos:state.repos,loading:state.loading,alert:state.alert,handleSearch,handleClear,getUsers,getRepos}}>
            {props.children}
        </GithubContext.Provider>
    )
}
export default GithubState;

