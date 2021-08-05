import React,{useState} from 'react'

const Search = (props) => {
    const [input,setInput]=useState({name:""});
    const handleChange = (event) => setInput({[event.target.name]:event.target.value});
    const handleSubmit= (event)=>{
        event.preventDefault();
        props.searchFunction(input.name);
        props.alertFunction(input.name);
        setInput({name:""});
    }
    const handleClear = ()=>{
        props.clearFunction()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={handleChange} value={input.name} placeholder="Enter the username to search"/>
                <button type="submit" className="btn btn-dark btn-block">Search Now!</button>
            </form>
            {props.clearShow && <button type="submit" className="btn btn-primary btn-block" onClick={handleClear}>Clear</button>}
        </div>
    )
}

export default Search
