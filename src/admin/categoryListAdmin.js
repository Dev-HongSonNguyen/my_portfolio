import axios from "axios";
import headerAdmin from "../../components/headerAdmin";
import { useEffect, useState } from "../lib";

const categoryListAdmin = () => {
  const [category, setCategory] = useState([]);
  useEffect(()=>{
    axios.get("https://s2qbne-8080.preview.csb.app/api/categories").then(({data})=> setCategory(data))
  },[])
  useEffect(()=>{
    const btn_delete = document.querySelectorAll("#btn_delete");
    for(let btn of btn_delete){
        btn.addEventListener("click", function(){
            const id = this.dataset.id;
            axios.delete(`https://s2qbne-8080.preview.csb.app/api/categories/${id}`)
            .then(()=>{
                const newCate = category.filter((item)=> item.id != id)
                setCategory(newCate)
            })
        })
    }
  })
  return `
  ${headerAdmin()}
  <div class="max-w-6xl m-auto my-5">
  <h1 class="text-center text-[#f75023] font-bold">CATEGORY</h1>
  <a class="text-[#ffff] bg-[#f75023] px-5 py-1 mb-2 inline-block text-[14px]" href="/admin/categoryAddAdmin">ADD</a>
  <table class="w-full border">
      <thead class="border">
          <th class="border text-[#ffff]">STT</th>
          <th class="border text-[#ffff]">NAME</th>
          <th class="border text-[#ffff]">ACTION</th>
      </thead>
      ${category.map((item, index)=>{
        return `
        <tbody>
              <tr class="text-center">
                  <td class="border text-[#ffff]">${index + 1}</td>
                  <td class="border text-[#ffff]">${item.name}</td>
                  <td class="border text-[#ffff]">
                      <button data-id="${item.id}" class="bg-red-600 p-5 py-2 text-[#ffff] btn_delete" id="btn_delete">DELETE</button>
                      <a href=/admin/categoryEditAdmin/${item.id}" class="bg-blue-900 p-5 py-[11px] text-[#ffff]">SETTING</a>
                  </td>
              </tr>
        </tbody>
        `
      }).join("")}
  </table>
</div>
  `
}
export default categoryListAdmin