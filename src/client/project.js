import axios from "axios";
import { useEffect, useState } from "../lib";
import category from "./category";
import projectList from "./projectList";

const project = () => {
    const [project, setProject] = useState([]);
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        axios.get("https://s2qbne-8080.preview.csb.app/api/categories").then(({data})=>setCategories(data))
    },[])
    useEffect(()=>{
        axios.get("https://s2qbne-8080.preview.csb.app/api/APIproject").then(({data})=>setProject(data))
    },[])
    const onHandleClick = (idOr) => {
        if(idOr != 0){
            axios.get(`https://s2qbne-8080.preview.csb.app/api/categories/${idOr}?_embed=APIproject`)
            .then(({data})=>setProject(data.APIproject));
        }else{
            axios.get(`https://s2qbne-8080.preview.csb.app/api/APIproject`)
            .then(({data})=>setProject(data));
        }
    };
  return `
  <div id="project" class="w-full bg-[#232529]">
  <div class="max-w-6xl m-auto py-[50px]">
      <div class="text-center">
          <p class="text-[22px] text-[#f75023]">Project</p>
          <h4 class="text-[40px] text-[#ffff]">My Amazing Works</h4>
      </div>
      <div class="">
          <div class="">
              <ul class="flex items-center justify-center py-[20px]">
                  <li class="">
                    ${category({categories, onClick: onHandleClick})}
                  </li>
                  
              </ul>
          </div>
          <div class="grid grid-cols-3 gap-4 py-[30px]">
          ${projectList({project})}
          </div>
      </div>
  </div>
</div>

  `
  
}

export default project