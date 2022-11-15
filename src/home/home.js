import React from 'react';
import axios from "axios";
import NewsList from '../components/NewsList';
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';


const Home = () => {

    return ( 
        <div className="home">
          <div className="home-image">
          <img src="/images/anypli-img.png" />
          </div>
          <div className="home-body">
            <h1 style={{color:"red"}}>welcome to our application</h1>
          </div>
        {/* <div className="sourcesbutton">
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
          </div> */}
        </div>
     );
} 
export default Home;