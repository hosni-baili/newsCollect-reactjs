import React from 'react';
import axios from "axios";
import NewsList from '../components/NewsList';
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';


const Home = () => {
  
  const [noSourceSelected,setNoSourceSelected]=useState(true);
  const [isLoading,setIsLoading]=useState(false);
  const [news,setNews]=useState(null)
  const [urlSourceLink, setUrlSourceLink]=useState('');
  const [sourceName,setSourceName]=useState('')


  useEffect(()=>{
    console.log(urlSourceLink);
    if(urlSourceLink!==''){
      axios.get(' https://api.rss2json.com/v1/api.json?rss_url=' + urlSourceLink)
    .then(res=>{
      console.log(res.data.feed)
      console.log(res.data.items)
        // let x2js = new X2JS();
        // const result = x2js.xml2js(res.data);
        // //const json = JSON.stringify(result, null, 4);
        return res.data;
    })
    .then(data=>{
      console.log(sourceName);
        setNews(data);
        setIsLoading(false);
    })
    .catch(err=>{
        console.log(err.message)
    })
    }
  },[urlSourceLink])

  let handleSource = function (sourceLink) {
    if(sourceLink==="jawharaFm"){
      setIsLoading(true);
      setNews(null);
      setSourceName("JawharaFM");
      setNoSourceSelected(false);
      setUrlSourceLink("https://www.jawharafm.net/fr/rss/showRss/88/1/1");
    } else if(sourceLink==="shemFm"){
      setIsLoading(true);
      setNews(null);
      setSourceName("ShemsFM");
      setNoSourceSelected(false);
      setUrlSourceLink("https://www.shemsfm.net/fr/rss");
    } else{
      setIsLoading(true);
      setNews(null);
      setSourceName("France24");
      setNoSourceSelected(false);
      setUrlSourceLink("https://www.france24.com/fr/france/rss");
    }
  }

    return ( 
        <div className="home">
          <div className="sourceName">
          <h2 className="SourceName">Source name : <span style={{color: "red"}}>{sourceName}</span></h2>
          </div>
    <div className="sourcesbutton">
          <Button 
              style={{margin:"15px"}} 
              color="primary" variant="outlined" 
              onClick={()=>handleSource("jawharaFm")}>JawharaFm</Button>
          <Button 
              style={{margin:"15px"}} 
              color="primary" variant="outlined" 
              onClick={()=>handleSource("shemFm")}>ShemsFm</Button>
          <Button 
              style={{margin:"15px"}} 
              color="primary" variant="outlined" 
              onClick={()=>handleSource("France24")}>France24</Button>
          </div>
            <div>
            {noSourceSelected && <div className="loadingNews">Welcome Please select a source</div>}
            {isLoading && <div className="loadingNews">Loading News .....</div>}
                {news && <NewsList news={news} />}
            </div>
        </div>
     );
} 
export default Home;