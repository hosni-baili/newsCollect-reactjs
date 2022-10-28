import { useEffect } from "react";
import { useParams } from "react-router-dom";
import IconsSources from "./IconsSources";

const ShowByCategory = () => {

    const {cat}=useParams()

    return ( 
        <div className="show-by-category">
                        <h4> show source by category   -  {cat}</h4>
            <IconsSources category={cat}/>
        </div>
     );
}
 
export default ShowByCategory;