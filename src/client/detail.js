import axios from "axios";
import { useEffect, useState } from "../lib";

const detail = ({ id }) => {
  const [detail, setDetail] = useState({});
  useEffect(function () {
    axios
      .get(`https://s2qbne-8080.csb.app/api/APIproject/${id}`)
      .then(({ data }) => setDetail(data));
  }, []);
  console.log(detail);
  return `
  <div class="w-full bg-[#232529] py-[10px] z-20" id="backtop">
        <a href="/" class="text-[#ffff] absolute bg-[#f75023] left-[10px] top-[10px] p-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
        </a>
        <div class="max-w-6xl m-auto flex justify-between items-center py-3" id="detail">
            <div id="model_project_container">
                <div id="model_project" class="">
                    <div class="grid grid-cols-2 bg-[#2b2d33] p-5">
                        <div class="">
                            <div class="slide_project px-[15px] py-3">
                                <h1 style="border-bottom: 3px solid #f75023;"
                                    class="text-[#f75023] text-[24px] py-2 tracking-wider">IMAGE PROJECT
                                </h1>
                                <img src="${detail.image}" alt="" class="w-full pt-5">
                            </div>
                        </div>
                        <div class="px-[25px] py-3">
                            <h1 style="border-bottom: 3px solid #f75023;"
                                class="text-[#f75023] text-[24px] py-2 tracking-wider">CONTENT PROJECT</h1>
                            <div class="des_project pt-5">
                                <p class="text-[#ffff] text-[12px] text-justify">${detail.des}</p>
                                <ul class="pt-5 leading-5">
                                    <li class="text-[#ffff] text-[12px]">
                                        Name:
                                        <span class="text-[#f75023] text-[12px]">${detail.name}</span>
                                    </li>
                                    <li class="text-[#ffff] text-[12px]">
                                        Date:
                                        <span class="text-[#f75023] text-[12px]">${detail.date}</span>
                                    </li>
                                    <li class="text-[#ffff] text-[12px]">
                                        Role:
                                        <span class="text-[#f75023] text-[12px]">${detail.role}</span>
                                    </li>
                                    <li class="text-[#ffff] text-[12px]">
                                        Source code:
                                        <a href="${detail.source}"
                                            class="text-[#f75023] text-[12px]">${detail.source}</a>
                                    </li>
                                    <li class="text-[#ffff] text-[12px]">
                                        <a href="${detail.demo}"
                                            class="text-[#f75023] text-[12px]">Demo</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `;
};
export default detail;
