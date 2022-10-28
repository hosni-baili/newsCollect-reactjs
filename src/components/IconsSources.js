import { useEffect, useState } from "react";
import {
    Badge,
    Button,
    Card,
    Navbar,
    Nav,
    Container,
    Row,
    Col,
  } from "react-bootstrap";
import { Link } from "react-router-dom";
  import data from '../fakeData/data.json'
  
const IconsSources = (props) => {
    const [sources,setSources]=useState(null);
    const [category,setCategory]=useState('');

    useEffect(() => {
      console.log(props.category)
        setSources(data.filter((it)=>it.newsCategory===props.category.charAt(0).toUpperCase() + props.category.slice(1)));
        setCategory(props.category.charAt(0).toUpperCase() + props.category.slice(1));
      }, [props.category])
      console.log(category.charAt(0).toUpperCase()+ category.slice(1))
      data.filter((it)=>it.newsCategory===props.category.charAt(0).toUpperCase() + props.category.slice(1)).map((it)=>console.log(it))
      console.log(sources)

          return ( 
        <div className="icons-list">
                {/* <div className="card">
                    <div className="card-header">
                        <h4>icons list header</h4>
                        <div className="all-icon-card-body">
                            <h4>all icons body</h4>
                        </div>
                    </div>
                </div> */}
            <Card>
              <Card.Header>
                <Card.Title as="h4">best sources</Card.Title>
                <p className="card-category">
                  top sources in {category}
                </p>
              </Card.Header>
              <Card.Body className="all-icons">
                <Row>
                  {sources && sources.map((it)=><Col className="font-icon-list" lg="2" md="3" sm="4" xs="6" key={it.sourceLink}>
                  <Link to={`/newslist/`+it.sourceName+`/`+it.newsCategory}>
                    <div className="font-icon-detail" style={{ 
                            backgroundImage: `url(${it.sourceLink})`,backgroundRepeat:"no-repeat",backgroundSize:"contain"  
                            }}>
                      {/* <p>nc-air-baloon</p> */}
                    </div>
                  </Link>
                  </Col>)}
                </Row>
              </Card.Body>
            </Card>
        </div>
     );
}
 
export default IconsSources;