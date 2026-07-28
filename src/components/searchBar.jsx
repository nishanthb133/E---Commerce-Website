import React from "react"
import { useNavigate,useSearchParams } from "react-router-dom"

function SearchBar(){
    const [searchParams,setSearchParams]=useSearchParams();
    const navigate =useNavigate();
    const query = searchParams.get('search') ||'';
    const handleInputChange=(e)=>{
     const value=e.target.value;
     if (window.location.pathname!=='/productpage'){
        navigate (`/productpage?searc=${encodeURIComponent(value)}`)

        }else {
            if (value){
                setSearchParams({ search: value});
            }else{
                setSearchParams({})
            }
        }
     };
    return(
        <div className="search-container">
       <input type="text" value={query} placeholder="search...." onChange={handleInputChange}/>
       <button type="button"> Search</button>
       </div>
    )
}

export default SearchBar;