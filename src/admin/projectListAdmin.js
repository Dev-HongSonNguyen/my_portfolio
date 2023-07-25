import axios from "axios";
import headerAdmin from "../../components/headerAdmin";
import { useEffect, useState } from "../lib";

const projectListAdmin = () => {
  const [projects, setProject] = useState([]);
  useEffect(() => {
    axios
      .get("https://s2qbne-8080.csb.app/api/APIproject")
      .then(({ data }) => setProject(data));
  }, []);
  console.log(projects);
  useEffect(() => {
    const btn_delete = document.querySelectorAll(".btn_delete");
    for (let btn of btn_delete) {
      btn.addEventListener("click", function () {
        const idOr = this.dataset.id;
        axios
          .delete(`https://s2qbne-8080.csb.app/api/APIproject/${idOr}`)
          .then(() => {
            const newProject = projects.filter((item) => item.id != idOr);
            setProject(newProject);
          });
      });
    }
  }, []);
  return `
    ${headerAdmin()}
    <div class="max-w-6xl m-auto my-5">
    <h1 class="text-center text-[#f75023] font-bold">MY PROJECT</h1>
    <a class="text-[#ffff] bg-[#f75023] px-5 py-1 mb-2 inline-block text-[14px]" href="/admin/projectAddAdmin">ADD</a>
    <table class="w-full border text-[10px]">
        <thead class="border">
            <th class="border text-[#ffff]">STT</th>
            <th class="border text-[#ffff]">NAME PROJECT</th>
            <th class="border text-[#ffff]">IMAGE</th>
            <th class="border text-[#ffff]">DATE</th>
            <th class="border text-[#ffff]">ROLE</th>
            <th class="border w-[10%] text-[#ffff]">SOURCE</th>
            <th class="border w-[20%] text-[#ffff]">DESCRIPTION</th>
            <th class="border w-[10%] text-[#ffff] text-center">CATEGORY</th>
            <th class="border text-[#ffff]">ACTION</th>
        </thead>
        ${projects
          .map(function (item, index) {
            return `
            <tbody>
                <tr class="text-center">
                    <td class="border px-2 text-[#ffff]">${index + 1}</td>
                    <td class="border px-2 text-[#ffff]">${item.name}</td>
                    <td class="border"px-2 ><img class="w-[100px] m-auto my-5" src="" alt="">
                    <img src=${item.image} alt="">
                    </td>
                    <td class="border px-2 text-[#ffff]">${item.date}</td>
                    <td class="border px-2 text-[#ffff]">${item.role}</td>
                    <td class="border px-2 text-[#ffff]">${item.source}</td>
                    <td class="border px-2 text-[#ffff] text-justify">${
                      item.des
                    }</td>
                    <td class="border px-2 text-[#ffff] text-justify">${
                      item.categoryId
                    }</td>
                    <td class="border px-2 text-[#ffff]">
                        <button data-id=${
                          item.id
                        } class="bg-red-600 p-5 py-2 text-[#ffff] btn_delete">DELETE</button>
                        <a href="/admin/projectEditAdmin/${
                          item.id
                        }" class="bg-blue-900 p-5 py-[11px] text-[#ffff]">SETTING</a>
                    </td>
                </tr>
        </tbody>
            `;
          })
          .join("")}
    </table>
</div>`;
};
export default projectListAdmin;
