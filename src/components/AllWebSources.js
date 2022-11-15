import AllSources from "./AllSources";

const AllWebSources = () => {
    //const [sources,setSources]=useState(null);

    // useEffect(() => {
    //     console.log(data.filter((it)=>it.sourceType==='journal'));
    //     setSources(data.filter((it)=>it.sourceType==='journal'));
    //   }, [])

    //   console.log(sources);
    return ( 
        <div className="all-web-sources">
          <AllSources sourceType="journal"/>
        </div>
     );
}
 
export default AllWebSources;