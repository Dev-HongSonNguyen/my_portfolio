import axios from "axios";
import { useEffect, useState } from "../lib";

const projectItem = ({ item }) => {
  console.log("item", item);
  const [category, setCategory] = useState({});
  useEffect(() => {
    axios
      .get(`https://s2qbne-8080.csb.app/api/categories/${item.categoryId}`)
      .then(({ data }) => setCategory(data));
  }, [item]);
  console.log("item", item);
  console.log(category);
  return `
  <div class="item py-5">
        <div class="rounded-xl overflow-hidden">
            <a href="/project/detailProject/${item.id}" id="btn_show_project">
                <img class="w-full rounded-md"
                    src="${item.image}"
                    alt="">
            </a>
        </div>
        <div class="py-3">
            <div id="btn_show_project">
                <h2 class="text-[#ffff]">${item.name}</h2>
            </div>
            <div class="flex items-center py-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" class="w-[14px] text-[#f75023]">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                </svg>
                <span class="text-[#ffff] text-[10px] pl-[10px] pt-[2px]">${item.date}</span>
            </div>
            <ul class="">
                <li class="">
                    <span class="px-3 py-[5px] hover:bg-[#f75023] border border-[#F75023] rounded-md text-[#ffff] text-[12px]"
                        >${category.name}</span>
                </li>
            </ul>
        </div>
        <div class="flex">
        <div>
            <a href=${item.demo}
                class="text-[10px] text-[#ffff] font-bold tracking-[1px] border px-10 py-2 border-[#f75023] hover:bg-[#f75023] hover:text-[#ffff] rounded-md inline-block mr-[10px]">Demo</a>
        </div>
        <div>
            <a href=${item.source}
                class="text-[10px] text-[#ffff] font-bold tracking-[1px] border px-10 py-2 border-[#f75023] hover:bg-[#f75023] hover:text-[#ffff] rounded-md inline-block">View
                source code git </a>
        </div></div>
        <!-- model-->
</div>
  `;
};

export default projectItem;
