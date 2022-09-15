import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';


function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

const quoteAPI = async() =>{
  let quotelist = [];
  try{
    const data = await axios.get("https://api.quotable.io/random");
    quotelist = data.data;
    console.log(quotelist);
  }
  catch(err){
    console.log(err);
  }
  try{
    setQuote(quotelist.content);
    setAuthor(quotelist.author);

  }
  catch(err){
    console.log(err);
  }
}

useEffect(() => {
quoteAPI();
},[]);
  return (
    <div className="App">
    <header className="App-header">
       <div className ='quote-wrapper'>
        <h2>Quote of the Day</h2>
        <small id = 'quote-tags'>Famous-Quotes</small>
        <blockquote id = 'quote-text'>{quote}</blockquote>
        <cite id = 'quote-author'>{author}</cite>
        <button onClick={quoteAPI} type = 'button' id = 'gen-quote-btn'>Get new Quote</button>
   
 
       </div>
    </header>
  </div>
  );
}

export default App;
