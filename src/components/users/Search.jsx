import React,{useState,useContext} from 'react'
import GithubContext from '../context/github/GithubContext';

const Search = ({alertFunction}) => {
    const githubContext=useContext(GithubContext);
    const [input,setInput]=useState("");
    const handleChange = (event) => setInput(event.target.value);
    const handleSubmit= (event)=>{
        event.preventDefault();
        githubContext.handleSearch(input);
        alertFunction(input);
        setInput("");
    }
    const clearUsers = ()=>{
        githubContext.handleClear();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={handleChange} value={input} placeholder="Enter the username to search"/>
                <button type="submit" className="btn btn-dark btn-block">Search Now!</button>
            </form>
            {githubContext.users.length>0 && <button type="submit" className="btn btn-primary btn-block" onClick={clearUsers}>Clear</button>}
        </div>
    )
}

export default Search
