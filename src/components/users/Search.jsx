import React,{useState} from 'react'

const Search = ({searchFunction,alertFunction,clearFunction,clearShow}) => {
    const [input,setInput]=useState("");
    const handleChange = (event) => setInput(event.target.value);
    const handleSubmit= (event)=>{
        event.preventDefault();
        searchFunction(input);
        alertFunction(input);
        setInput("");
    }
    const handleClear = ()=>{
        clearFunction()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={handleChange} value={input} placeholder="Enter the username to search"/>
                <button type="submit" className="btn btn-dark btn-block">Search Now!</button>
            </form>
            {clearShow && <button type="submit" className="btn btn-primary btn-block" onClick={handleClear}>Clear</button>}
        </div>
    )
}

export default Search
