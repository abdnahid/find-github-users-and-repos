import {SEARCH_USERS,SET_USER,SET_LOADING,SET_ALERT,GET_REPOS,CLEAR_USERS} from "../type";

export default (state,action)=>{
    switch (action.type) {
        case SET_LOADING:
            return {...state,loading:true}
        case SEARCH_USERS:
            return {...state, users:action.payload,loading:false};
        case CLEAR_USERS:
            return {...state,users:[],loading:false}
        case SET_USER:
            return {...state,user:action.payload,loading:false};
        case GET_REPOS:
            return {...state,repos:action.payload,loading:false};
        case SET_ALERT:
            return {...state,alert:action.payload,loading:false};
        default:
            return state;
    }
}