import axios from "axios";
import { useEffect, useState } from "../src/lib";

const category = () => {
    const [category, setCategory] = useState([]);
        useEffect(()=>{
        axios.get("https://s2qbne-8080.preview.csb.app/api/categories").then(({data})=> setCategory(data))
    },[])
    return `
        
    `
}

export default category