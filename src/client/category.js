import axios from "axios";
import { useEffect, useState } from "../lib"
const category = ({categories, onClick}) => {
    useEffect(()=>{
        const btns = document.querySelectorAll(".btn");
        for(let btn of btns){
            btn.addEventListener("click", function(){
                const idOr = this.dataset.id;
                onClick(idOr);
                // console.log(idOr);
            })
        }
    })
  return `<div>
  <button class="btn bg-[#F75023] mx-2 px-7 py-[3px] rounded-md text-[#ffff] text-[16px]" data-id="0">ALL</button>
  ${categories
    .map(
        (category) =>
            `<button class="btn bg-[#F75023] mx-2 px-7 py-[3px] rounded-md text-[#ffff] text-[16px]" data-id="${category.id}">${category.name}</button>`
    )
    .join("")}
  </div>`
  
}

export default category