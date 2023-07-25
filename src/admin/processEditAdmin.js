import axios from "axios";
import headerAdmin from "../../components/headerAdmin";
import { router, useEffect, useState } from "../lib";

const processEditAdmin = ({ id }) => {
  const [process, setProcess] = useState({});
  useEffect(() => {
    axios
      .get(`https://s2qbne-8080.preview.csb.app/api/APIprocess/${id}`)
      .then(({ data }) => setProcess(data));
  }, []);
  useEffect(() => {
    const form = document.querySelector("#form");
    const name = document.querySelector("#name");
    const des = document.querySelector("#des");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const form = {
        name: name.value,
        description: des.value,
      };
      axios
        .put(`https://s2qbne-8080.preview.csb.app/api/APIprocess/${id}`, form)
        .then(() => alert("Edit Successfully !"))
        .then(() => router.navigate("/admin/processListAdmin"))
        .catch(() => alert("Edit to Fail !"));
    });
  });
  return `
  ${headerAdmin()}
    <div class="max-w-6xl m-auto">
      <form action="" id="form">
          <h1 class="text-center text-[#f75023] font-bold">ADD PROCESS</h1>
          <div>
              <label for="" class="block text-[#ffff]">Name</label>
              <input id="name" "type="text" class="border w-full outline-none p-2" value="${
                process.name
              }">
          </div>
          <div>
              <label for="" class="block text-[#ffff]">Description</label>
              <textarea id="des" "type="text" class="border w-full outline-none p-2">${
                process.description
              }</textarea>
          </div>
          <div class="">
              <input type="submit"
                  class="cursor-pointer border px-5 py-2 border border-[#f75023] hover:bg-[#f75023] text-[#f75023] hover:text-[#ffff] uppercase text-[12px] mt-[10px]">
          </div>
    </form>
  </div>
  `;
};

export default processEditAdmin;
