import axios from "axios";
import headerAdmin from "../../components/headerAdmin"
import { useEffect, useState } from "../lib"

const userListAdmin = ()=>{
    const[user, setUser] = useState([]);
    useEffect(()=>{
        axios.get("https://s2qbne-8080.preview.csb.app/api/APIusers").then(({data})=>setUser(data))
    },[])
    useEffect(()=>{
        const btn_delete = document.querySelectorAll("#btn_delete");
            for(let btn of btn_delete){
                btn.addEventListener("click", function(){
                    const idOr = this.dataset.id;
                    axios.delete(`https://s2qbne-8080.preview.csb.app/api/APIusers/${idOr}`)
                    .then(()=>{
                        const newUser = user.filter((item)=> item.id != idOr);
                        setUser(newUser);
                    })
                })
            }
    })
    return`
    ${headerAdmin()}
    <div class="max-w-6xl m-auto my-5">
    <h1 class="text-center text-[#f75023] font-bold">MY USER</h1>
    <table class="w-full border">
        <thead class="border">
            <th class="border text-[#ffff]">STT</th>
            <th class="border text-[#ffff]">NAME</th>
            <th class="border text-[#ffff]">EMAIL</th>
            <th class="border text-[#ffff]">PHONE</th>
            <th class="border text-[#ffff]">SUBJECT</th>
            <th class="border text-[#ffff]">NOTE</th>
            <th class="border text-[#ffff]">ACTION</th>
        </thead>
        ${user.map(function(item, index){
            return `
            <tbody>
                <tr class="text-center">
                    <td class="border text-[#ffff]">${index + 1}</td>
                    <td class="border text-[#ffff]">${item.name}</td>
                    <td class="border text-[#ffff]">${item.email}</td>
                    <td class="border text-[#ffff]">${item.phone}</td>
                    <td class="border text-[#ffff]">${item.subject}</td>
                    <td class="border text-[#ffff]">${item.note}</td>
                    <td class="border text-[#ffff]">
                        <button data-id=${item.id} class="bg-red-600 p-5 py-2 text-[#ffff] btn_delete" id="btn_delete">DELETE</button>
                    </td>
                </tr>
        </tbody>
            `
        }).join("")}
    </table>
</div>
    `
}
export default userListAdmin