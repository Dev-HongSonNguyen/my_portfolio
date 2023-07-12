import axios from "axios";
import headerAdmin from "../../components/headerAdmin"
import { router, useEffect, useState } from "../lib"

const userEdit = ({id}) => {
    const [admin, setAdmin] = useState({});
    useEffect(()=>{
        axios.get(`https://s2qbne-8080.preview.csb.app/api/APIadmin/${id}`).then(({data})=>setAdmin(data))
    },[])
    useEffect(()=>{
        const form_edit = document.querySelector("#form-edit");
        const name = document.querySelector("#name");
        const email = document.querySelector("#email");
        const password = document.querySelector("#password");
        form_edit.addEventListener("submit", function(e){
            e.preventDefault();
            const newAcount = {
                name: name.value,
                email: email.value,
                password: password.value,
            }
            axios.put(`https://s2qbne-8080.preview.csb.app/api/APIadmin/${id}`, newAcount)
            .then(()=> router.navigate("/admin/userAdmin"))
            .catch(()=> alert("Edit to Fail !"))
        })
    })
  return `
  ${headerAdmin()}
  <div class="max-w-6xl m-auto">
        <form action="" id="form-edit">
            <h1 class="text-center text-[#f75023] font-bold pt-5">EDIT ACOUNT ADMIN</h1>
            <div>
                <label for="" class="block text-[#ffff]">Name</label>
                <input id="name" type="text" class="border w-full outline-none p-2" value="${admin.name}">
            </div>
            <div class="">
                <label for="" class="block text-[#ffff]">Email</label>
                <input id="email" type="text" class="border w-full outline-none p-2" value="${admin.email}">
            </div>
            <div class="">
                <label for="" class="block text-[#ffff]">Password</label>
                <input id="password" type=" text" class="border w-full outline-none p-2" value="${admin.password}">
            </div>
            <div class="">
                <input type="submit"
                    class="cursor-pointer border px-5 py-2 border border-[#f75023] hover:bg-[#f75023] text-[#f75023] hover:text-[#ffff] uppercase text-[12px] mt-[10px]">
            </div>
        </form>
    </div>
  `
  
}

export default userEdit