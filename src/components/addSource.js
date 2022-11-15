import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import SourcesDataService from "../test/source-service";

const AddSource = () => {
    const [sourceName,setName]=useState('');
    const [sourceType,setType]=useState('tv');
    const [sourceLink,setLink]=useState('');
    const [sourceLanguage,setLanguage]=useState('');
    const [newsCategory,setCategory]=useState('politique');
    const [sourceIcon,setIcon]=useState('');
    const [isPending,setIsPending]=useState(false);
    const [isError, setIsError] = useState(false);
    const [source]=useState(null)
    const navigate=useNavigate();
      
    
    const addSources=()=>{
       // const { searchTitle, page, pageSize } = this.state;
       const source={sourceName,sourceType,sourceLink,sourceLanguage,newsCategory,sourceIcon};

        axios({
            method: 'post',
            url: 'api/source',
            headers: {}, 
            data: source
          })
          .then((response) => {
            const { message } = response.data;
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });;
  
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        addSources()
    }

    return ( 
        <div className="addSource">
            <h2>Add new source</h2>
            <form onSubmit={handleSubmit}>
                <label>Source Name</label>
                <input 
                    type="text"
                    required
                    value={sourceName}
                    onChange={(e)=>setName(e.target.value)}
                />
                <label>Source Type</label>
                <select value={sourceType}
                    onChange={(e)=>setType(e.target.value)}>
                    <option value="tv">T.V</option>
                    <option value="radio">Radio</option>
                    <option value="journal">Newspaper</option>
                </select>
                <label>Source Link</label>
                <input 
                    type="text"
                    required
                    value={sourceLink}
                    onChange={(e)=>setLink(e.target.value)}
                />
                <label>Source Language</label>
                <input 
                    type="text"
                    required
                    value={sourceLanguage}
                    onChange={(e)=>setLanguage(e.target.value)}
                />
                <label>News Category</label>
                <select value={newsCategory}
                    onChange={(e)=>setCategory(e.target.value)}>
                    <option value="politique">Politique</option>
                    <option value="sport">Sport</option>
                    <option value="economie">Economy</option>
                    <option value="culture">Culture</option>
                    <option value="hitech et sciences">Hitech et Sciences</option>
                    <option value="tunisie">Tunisie</option>
                    <option value="internationale">International</option>
                    <option value="divers">Divers</option>
                </select>
                <label>Source Icon</label>
                <input 
                    type="text"
                    required
                    value={sourceIcon}
                    onChange={(e)=>setIcon(e.target.value)}
                />
                {!isPending && <button>Add Source</button>}
                {isPending && <button disabled>Adding Source...</button>}
            </form>
        </div>
     );
}
 
export default AddSource;