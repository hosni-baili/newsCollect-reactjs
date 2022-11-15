import AllSources from "./AllSources";
  
const AllRadioSources = () => {
    // const [sources,setSources]=useState(null);

    // useEffect(() => {
    //     console.log(data.filter((it)=>it.sourceType==='radio'));
    //     setSources(data.filter((it)=>it.sourceType==='radio'));
    //   }, [])

    //   console.log(sources);
    return ( 
        <div className="all-sources">
          <AllSources sourceType="radio"/>
        </div>
     );
}
 
export default AllRadioSources;