import axios from "axios";
import headerAdmin from "../../components/headerAdmin"
import { useEffect, useState } from "../lib"

const categoryEditAdmin = () => {
    
  return`
  ${headerAdmin()}
  <div class="max-w-6xl m-auto">
      <form action="" id="form">
          <h1 class="text-center text-[#f75023] font-bold">EDIT CATEGORY</h1>
          <div>
              <label for="" class="block text-[#ffff]">Name Project</label>
              <input id="name_cate" "type="text" class="border w-full outline-none p-2">
          </div>
          <div class="">
              <input type="submit"
                  class="cursor-pointer border px-5 py-2 border border-[#f75023] hover:bg-[#f75023] text-[#f75023] hover:text-[#ffff] uppercase text-[12px] mt-[10px]">
          </div>
    </form>
  </div>
  `
  
}

export default categoryEditAdmin