import AllSources from "./AllSources";

const AllTvSources = () => {
    //const [sources,setSources]=useState(null);

    // useEffect(() => {
    //     console.log(data.filter((it)=>it.sourceType==='tv'));
    //     setSources(data.filter((it)=>it.sourceType==='tv'));
    //   }, [])

    return ( 
        <div className="all-sources">
            <AllSources sourceType="tv"/>
        </div>     
        );
}
 
export default AllTvSources;
