import axios from "axios";
import headerAdmin from "../../components/headerAdmin";
import { router, useEffect, useState } from "../lib"

const projectEditAdmin= ({id})=>{
    const [project, setProject] = useState({});
    useEffect(function(){
        axios.get(`https://s2qbne-8080.preview.csb.app/api/APIproject/${id}`).then(({data})=>setProject(data))
    },[])
    useEffect(function(){
        const form = document.querySelector("#form");
        const nameProject = document.querySelector("#name_project");
        const dateProject = document.querySelector("#date");
        // const image = document.querySelector("#image_project");
        const role = document.querySelector("#role");
        const preview = document.querySelector("#preview");
        const des = document.querySelector("#des");
        const category = document.querySelector("#category");
        form.addEventListener("submit", function(e){
            e.preventDefault();
            const formData = {
                name: nameProject.value, 
                date: dateProject.value,
                role: role.value,
                preview: preview.value,
                des: des.value,
                categoryId: category.value,
            };
            axios.put(`https://s2qbne-8080.preview.csb.app/api/APIproject/${id}`, formData)
            .then(()=> router.navigate("/admin/projectAdmin"))
            .catch(()=> alert("Edit to fail !"))
        })
    })
    return `
    ${headerAdmin()}
    <div class="max-w-6xl m-auto">
      <form action="" id="form">
          <h1 class="text-center text-[#f75023] font-bold">ADD PROJECT</h1>
          <div>
              <label for="" class="block text-[#ffff]">Name Project</label>
              <input id="name_project" "type="text" class="border w-full outline-none p-2" value="${project.name}">
          </div>
          
          <div class="">
              <label for="" class="block text-[#ffff]">Date</label>
              <input id="date" type="date" class="border w-full outline-none p-2" value="${project.date}">
          </div>
          <div class="">
              <label for="" class="block text-[#ffff]">Role</label>
              <input id="role" type="text" class="border w-full outline-none p-2" value="${project.role}">
          </div>
          <div class="">
              <label for="" class="block text-[#ffff]">Preview</label>
              <input id="preview" type="text" class="border w-full outline-none p-2" value="${project.preview}">
          </div>
          <div class="">
              <label for="" class="block text-[#ffff]">Description</label>
              <input id="des" type="text" class="border w-full outline-none p-2" value="${project.des}">
          </div>
          <div class="">
              <label for="" class="block text-[#ffff]">Category</label>
              <input id="category" type="text" class="border w-full outline-none p-2" value="${project.categoryId}">
          </div>
          <div class="">
              <input type="submit"
                  class="cursor-pointer border px-5 py-2 border border-[#f75023] hover:bg-[#f75023] text-[#f75023] hover:text-[#ffff] uppercase text-[12px] mt-[10px]">
          </div>
    </form>
  </div>
    `
}
export default projectEditAdmin