import React, { useEffect, useState } from 'react'
import Card from './Card';
const Newsapp = () => {

  const[search,setSearch]=useState('india')
  const[newsData,setNewsData]=useState([])
  const API_KEY="04cbd17c9fcc401fabf6adbd23322a3e";

  const getData= async()=>{
    const response=await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
    const jsonData=await response.json();
    console.log(jsonData.articles);
    setNewsData(jsonData.articles)
    
  }

  useEffect(()=>{
    getData()
  },[])

  const handleInput =(e)=>{
    console.log(e.target.value);
    setSearch(e.target.value)
  }

  const userInput=(e)=>{
    setSearch(e.target.value)
  }

  return (
    <div>
      <nav>
        <div>
          <h1>Trendy News</h1>
        </div>
        <ul>
          <a>All News</a>
          <a href="">Trending</a>
        </ul>
        <div className='searchBar'>
          <input type="text" name="" id="" placeholder='Search news' value={search} onChange={handleInput} />
          <button onClick={getData}>Search</button>
        </div>
      </nav>
      <div>
        <p className='head'>Stay Update with TrendyNews</p>
      </div>

      <div className='categoryBtn'>
        <button onClick={userInput} value={"Sports"}>Sports</button>
        <button onClick={userInput} value={"Politics"}>Politics</button>
        <button onClick={userInput} value={"Entertainment"}>Entertainment</button>
        <button onClick={userInput} value={"Health"}>Health</button>
        <button onClick={userInput} value={"Fitness"}>Fitness</button>
        
      </div>
      <div>
        <Card data={newsData}/>
      </div>
    </div>
  );
};

export default Newsapp