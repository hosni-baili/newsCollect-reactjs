import News from "./News";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from '../fakeData/data.json';
import axios from "axios";

const NewsList = (props) => {
    const {source}=useParams()
    const {category}=useParams()
    const [url,setUrl]=useState('');
    const [news,setNews]=useState([]);
    const [isLoading,setIsLoading]=useState(false);

    useEffect(()=>{
        data
            .filter((it)=>(it.sourceName===source)&&(it.newsCategory===category))
            .map((it)=>setUrl(it.sourceLink))
    },[])

    useEffect(()=>{
        if(url!==''){
          axios.get(' https://api.rss2json.com/v1/api.json?rss_url=' + url)
        .then(res=>{
          console.log(res.data.feed)
          console.log(res.data.items)
            // let x2js = new X2JS();
            // const result = x2js.xml2js(res.data);
            // //const json = JSON.stringify(result, null, 4);
            return res.data.items;
        })
        .then(data=>{
            setNews(data);
            setIsLoading(false);
        })
        .catch(err=>{
            console.log(err.message)
        })
        }
      },[url])
    

// console.log(props.news.feed.url)
//     useEffect(()=>{
//         setNews(props.news.items);
//         setSourceType(props.news.feed.title);
//         setLastBuildDate(props.news.pubDate);
//     },[news])   

    return (
        <div>
            <h5>newsList - {source}</h5>
            {/* <h2 className="SourceName">Source name : <span style={{color: "red"}}>jawharafm</span></h2> */}
            <h3 className="SourceType">Type : <span style={{color: "blue"}}>{category}</span></h3>
            {/* <h3 className="lastBuildDate">Last Update :<span style={{color: "blue"}}>{lastBuildDate}</span></h3> */}
            {news && news.map(item =>(<News oneNews={item} source={source} category={category} key={item.title}/>)) }
        </div>
        
    );
}
 
export default NewsList
