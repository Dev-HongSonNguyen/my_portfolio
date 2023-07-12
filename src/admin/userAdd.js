import axios from "axios";
import headerAdmin from "../../components/headerAdmin"
import { router, useEffect } from "../lib"

const userAdd = () => {
    useEffect(()=>{
        const form_add = document.querySelector("#form-add");
        const name = document.querySelector("#name");
        const email = document.querySelector("#email");
        const password = document.querySelector("#password");
        form_add.addEventListener("submit", function(e){
            e.preventDefault();
            const newAcount = {
                name: name.value,
                email: email.value,
                password: password.value,
            }
            axios.post(`https://s2qbne-8080.preview.csb.app/api/APIadmin`, newAcount)
            .then(()=> router.navigate("/admin/userAdmin"))
            .catch(()=> alert("Edit to Fail !"))
        })
    })
  return `
  ${headerAdmin()}
  <div class="max-w-6xl m-auto my-5">
  <h1 class="text-center text-[#f75023] font-bold">ADD ACOUNT ADMIN</h1>
  <form action="" id="form-add">
        <div>
            <label for="" class="block text-[#ffff]">Name</label>
            <input id="name" type="text" class="border w-full outline-none p-2" value="">
        </div>
        <div class="">
            <label for="" class="block text-[#ffff]">Email</label>
            <input id="email" type="text" class="border w-full outline-none p-2" value="">
        </div>
        <div class="">
            <label for="" class="block text-[#ffff]">Password</label>
            <input id="password" type=" text" class="border w-full outline-none p-2" value="">
        </div>
        <div class="">
            <input type="submit"
                class="cursor-pointer border px-5 py-2 border border-[#f75023] hover:bg-[#f75023] text-[#f75023] hover:text-[#ffff] uppercase text-[12px] mt-[10px]">
        </div>
    </form>
  </div>
  `
}
export default userAdd