import axios from "axios";
import headerAdmin from "../../components/headerAdmin";
import { useEffect, useState } from "../lib";

const processListAdmin = () => {
  const [process, setProcess] = useState([]);
  useEffect(() => {
    axios
      .get("https://s2qbne-8080.preview.csb.app/api/APIprocess")
      .then(({ data }) => setProcess(data));
  }, []);
  useEffect(() => {
    const btn_delete = document.querySelectorAll(".btn_delete");
    for (let btn of btn_delete) {
      btn.addEventListener("click", function () {
        const id = this.dataset.id;
        axios
          .delete(`https://s2qbne-8080.preview.csb.app/api/APIprocess/${id}`)
          .then(() => {
            const newProcess = process.filter((item) => item.id != id);
            setProcess(newProcess);
          });
      });
    }
  }, []);
  return `
    ${headerAdmin()}
    <div class="max-w-6xl m-auto my-5">
    <h1 class="text-center text-[#f75023] font-bold">MY PROCESS</h1>
    <a class="text-[#ffff] bg-[#f75023] px-5 py-1 mb-2 inline-block text-[14px]" href="/admin/processAddAdmin">ADD</a>
    <table class="w-full border">
        <thead class="border">
            <th class="border text-[#ffff]">STT</th>
            <th class="border text-[#ffff]">NAME</th>
            <th class="border w-[50%] text-[#ffff]">DESCRIPTION</th>
            <th class="border text-[#ffff]">ACTION</th>
        </thead>
        ${process
          .map((item, index) => {
            return `
            <tbody>
                <tr class="text-center">
                    <td class="border px-2 text-[#ffff]">${index + 1}</td>
                    <td class="border px-2 text-[#ffff]">${item.name}</td>
                    <td class="border px-2 text-[#ffff] text-justify">${
                      item.description
                    }</td>
                    <td class="border px-2 text-[#ffff]">
                        <button data-id="${
                          item.id
                        }" class="bg-red-600 p-5 py-2 text-[#ffff] btn_delete">DELETE</button>
                        <a href="/admin/processEditAdmin/${
                          item.id
                        }" class="bg-blue-900 p-5 py-[11px] text-[#ffff]">SETTING</a>
                    </td>
                </tr>
            </tbody>
            `;
          })
          .join("")}
    </table>
</div>
  `;
};

export default processListAdmin;
