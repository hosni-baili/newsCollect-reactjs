import { useState, useEffect } from 'react'
import parse from 'html-react-parser'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, Outlet } from 'react-router-dom'

const News = (props) => {
  
  const [imgUrl, setImgUrl] = useState('')
  const [description, setDescription] = useState('')
  const [isMoreDetails, setIsMoreDetails] = useState(false)
  const [link, setLink] = useState('')
  const [thisNews, setThisNews] = useState(null)

  useEffect(() => {
    setImgUrl(props.oneNews);
    setThisNews(props.oneNews);
    setImgUrl(props.oneNews.thumbnail);
    setLink(props.oneNews.link);
  }, [])

  let handleMoreDetail = function (str) {
    setIsMoreDetails(true);
    setDescription(str);
  }

//   let parser = new DOMParser();
//   let doc = parser.parseFromString(description, 'text/html');
//   console.log(doc.body);

  let handleReduceDetail = function (str) {
    setIsMoreDetails(false)
    setDescription(null)
  }

  let handleLink = function (lien) {
    console.log(lien);
  }

  return (
    <div className="itemNews">
    <Card sx={{ maxWidth: 836 }}>
      <CardMedia
        component="img"
        height="400"
        image={imgUrl}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <span style={{textDecoration: "underline"}}>{props.oneNews.title}</span>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {description && parse(description)}
        </Typography>
      </CardContent>
      <div className="actionButtons">
        <CardActions>
            <div className="pubDate"><h4>Publication Date   :</h4><span>{props.oneNews.pubDate}</span></div>
        {isMoreDetails && <Button color="warning" variant="outlined" onClick={()=>handleReduceDetail(null)}>Reduce</Button>}
        {/* {!isMoreDetails && <Button variant="outlined" onClick={()=>handleMoreDetail(props.oneNews.description)}>More details...</Button>} */}
        {link &&<Link to={`/showDetails/${props.oneNews.title}`} state={{ data: props.oneNews }} style={{ margin: 24}} >
            <Button variant="outlined">More details...</Button>
          </Link>}
        </CardActions>
      </div>
    </Card>
    </div>
    
    //  <div className="NewsItem">
    //     <div className="image">
    //     <img src={props.oneNews.productImageUrl} />
    //     </div>
    //     <div className="middle aligned content">
    //     <div className="newsTitle">{props.oneNews.title}</div>
    //     <div className="description">
    //         <p>{description && parse(description) }</p>
    //     </div>
    //     <div className="extra">
    //         <span>Submitted by:</span>
    //         <img className="avatar-image" src={props.oneNews.submitterAvatarUrl} />
    //     </div>
    //     </div>
    //     {isMoreDetails && <button onClick={()=>handleReduceDetail(null)}>Reduce</button>}
    //     {!isMoreDetails && <button onClick={()=>handleMoreDetail(props.oneNews.description)}>More details...</button>}
    //     </div>
  )
}

export default News
