import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import parse from 'html-react-parser'

const OneNewsDetails = () => {
    const location=useLocation();
    const [news,setNews]=useState(location.state?.data);

    useEffect(()=>{
        console.log(location.state?.data, " useLocation Hook");
        // setNews(location.state?.data);
        console.log(news);
    },[])

    const {title}=useParams()
    return ( 
        <div className="one-news-details">
            <div className="row">
                <div className="header-row">
                <h2> {title}</h2>
                </div>
                <hr style={{background: '#b2b7b2',height: '3px',}}/>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: '70%',alignitems: 'center',display: 'inline-flex'}}>
                            <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
                                <div>
                                <p style={{width: '100%', textAlign: 'center'}}>Publication date  -  {news.pubDate}</p>
                                </div>
                            <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
                        </div>
                <div className="row-body">
                    <div className="img-one-details">
                        <img src={news.thumbnail || news.enclosure.link} />
                    </div>
                    <div className="one-news-description">
                        <p>{parse(news.description)}</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default OneNewsDetails;