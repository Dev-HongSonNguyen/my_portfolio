import axios from "axios";
import headerAdmin from "../../components/headerAdmin"
import { useEffect, useState } from "../lib"
const aboutListAdmin = () => {
    const[aboutMe, setAboutMe] = useState([]);
    useEffect(()=>{
        axios.get("https://s2qbne-8080.preview.csb.app/api/APIabout").then(({data})=> setAboutMe(data))
    },[])
    useEffect(()=>{
        const btn_delete = document.querySelectorAll(".btn_delete");
        for(let btn of btn_delete){
            btn.addEventListener("click", function(){
                const idOr = this.dataset.id;
                axios.delete(`https://s2qbne-8080.preview.csb.app/api/APIabout/${idOr}`).then(()=>{
                    const newAbout = aboutMe.filter((item)=>item.id != idOr)
                    setAboutMe(newAbout);
                })
            })
        }
    })
  return `
  ${headerAdmin()}
  <div class="max-w-6xl m-auto my-5">
  <h1 class="text-center text-[#f75023] font-bold">ABOUT ME</h1>
  <a class="text-[#ffff] bg-[#f75023] px-5 py-1 mb-2 inline-block text-[14px]" href="/admin/addAboutAdmin">ADD</a>
  <table class="w-full border">
  <thead class="border">
      <th class="border text-[#ffff]">ABOUT ME</th>
      <th class="border text-[#ffff]">ACTION</th>
  </thead>
  ${aboutMe.map(function(item){
    return `
    <tbody>
    <tr class="text-center">
        <td class="border text-[#ffff] w-[70%] text-justify p-4">${item.about}</td>
        <td class="border text-[#ffff]">
            <button data-id=${item.id} class="bg-red-600 p-5 py-2 text-[#ffff] btn_delete">DELETE</button>
            <a href="/admin/editAboutAdmin/${item.id}" class="bg-blue-900 p-5 py-[11px] text-[#ffff]">SETTING</a>
        </td>
    </tr>
</tbody>
    `
  })}
    </table>
    </div>`
  
}

export default aboutListAdmin