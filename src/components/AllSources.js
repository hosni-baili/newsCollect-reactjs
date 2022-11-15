import { Link } from "react-router-dom";
import SourcesDataService from "../test/source-service";
import Pagination from "@material-ui/lab/Pagination";
import { useEffect, useState } from "react";
import {
    Card,
    Row,
    Col,
  } from "react-bootstrap";

const AllSources = (props) => {

  const [sources, setSources]=useState([]);
  const [sourceType, setSourceType]=useState(props.sourceType);
  const [searchTitle, setSearchTitle]=useState("");
  const [page, setPage]=useState(1);
  const [count, setCount]=useState(0);
  const [pageSize, setPageSize]=useState(3);
  const [pageSizes, setPageSizes]=useState([3, 6, 9])
  const [totalItems, setTotalItems]=useState(0);

  console.log(props)
  useEffect(()=>{
      retrieveSources();
  },[searchTitle,pageSize,page])

  const onChangeSearchName=(e)=>{
      const searchTit = e.target.value;
      console.log(searchTit);
      setSearchTitle(searchTit);
      console.log(searchTitle);
  }

  const getRequestParams=(sourceType, searchTitle, page, pageSize)=>{
      let params = {};
  
      if (sourceType) {
        params["type"] = sourceType;
      }

      if (searchTitle) {
        params["name"] = searchTitle;
      }
  
      if (page) {
        params["page"] = page - 1;
      }
  
      if (pageSize) {
        params["size"] = pageSize;
      }
  
      return params;
    }
  
  const retrieveSources=()=>{
     // const { searchTitle, page, pageSize } = this.state;
      const params = getRequestParams(sourceType, searchTitle, page, pageSize);
      console.log(params)

      SourcesDataService.getAll(params)
        .then((response) => {
          const { sources, totalPages } = response.data;
  
          setSources(sources)
          setCount(totalPages)
          setTotalItems(response.data.totalItems)
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
  }

  const refreshList=()=>{
      retrieveSources();
  }

  const handlePageChange=(event, value)=>{
        setPage(value);
  }

  const handlePageSizeChange=(event)=>{
        setPageSize(event.target.value);
        setPage(1);
        //retrieveSources()
  }

    return ( 
      <div className="list row">
      <div className="col-md-8">
      <h4 style={{marginTop:"3%",marginBottom:"3%"}}>Sources List - {totalItems} - Sources</h4>

        <div className="input-group mb-3">


          <div style={{marginBottom:"2%"}} className="input-group-append">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchTitle}
            onChange={onChangeSearchName}
          />
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={retrieveSources}
            >
              Search
            </button>
          </div>
          {"Items per Page: "}
          <select style={{marginBottom:"1%"}} onChange={handlePageSizeChange} value={pageSize}>
            {pageSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="col-md-6">

        <div className="mt-3">

          <Pagination
            className="my-3"
            count={count}
            page={page}
            siblingCount={1}
            boundaryCount={1}
            variant="outlined"
            shape="rounded"
            onChange={handlePageChange}
          />
        </div>

        <Card.Body className="all-icons">
            <Row>
              {sources && sources.map((it)=><Col className="font-icon-list" lg="2" md="3" sm="4" xs="6" key={it.id}>
              <Link to={`/newslist/`+it.sourceName+`/`+it.newsCategory}>
                <div className="font-icon-detail" style={{ 
                        backgroundImage: `url(${it.sourceIcon})`,backgroundRepeat:"no-repeat",backgroundSize:"contain"  
                        }}>
                  {/* <p>nc-air-baloon</p> */}
                </div>
                <h6>{it.newsCategory}</h6>
              </Link>
              </Col>)}
            </Row>
          </Card.Body>
    </div>
  </div>
     );
}
 
export default AllSources