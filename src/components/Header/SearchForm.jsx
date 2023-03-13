import React, { useState } from 'react'
import "./Header.scss"

import { BsSearch } from "react-icons/bs";
import { useMealContext } from '../../context/mealContext';
import { useNavigate } from 'react-router-dom';
import { startFetchMealsBySearch } from '../../actions/mealActions';

export default function SearchForm() {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [errMSg, setErrrMSg] = useState("")
  const {dispatch, meals } = useMealContext();

  const navigate = useNavigate();

  const handleSearchTerm = (e) => {
    // console.log(e.target.value)
    e.preventDefault();
    if(e.target.value.replace(/[^\w\s]/gi, "").length !== 0){
      setSearchTerm(e.target.value);
      setErrrMSg("")
    } else {
      setErrrMSg("Invalid search term...");
    }
  }

  const handleSearchResult = (e) => {
    e.preventDefault();
    navigate("/")
    startFetchMealsBySearch(dispatch, searchTerm);
  }

  return (
    <form className='search-form flex align-center' onSubmit={(e)=> handleSearchResult(e)}>
      <input onChange={(e) => handleSearchTerm(e)} type="text" className='form-control-input text-dark-gray fs-15' placeholder='Search recipes here ...' />
      <button type = "submit" className='form-submit-btn text-white text-uppercase fs-14'>
        <BsSearch className='btn-icon' size = {20} />
      </button>
    </form>
  )
}
