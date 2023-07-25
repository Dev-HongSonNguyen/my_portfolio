import axios from "axios";
import { router, useEffect, useState } from "../lib";

const aboutEditAdmin = ({ id }) => {
  const [about, setAbout] = useState({});
  useEffect(() => {
    axios
      .get(`https://s2qbne-8080.csb.app/api/APIabout/${id}`)
      .then(({ data }) => setAbout(data));
  }, []);
  useEffect(() => {
    const form = document.querySelector("#form");
    const about = document.querySelector("#about");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const formAbout = {
        about: about.value,
      };
      axios
        .put(`https://s2qbne-8080.csb.app/api/APIabout/${id}`, formAbout)
        .then(() => router.navigate("/admin/aboutAdmin"))
        .catch(() => alert("Edit to Fail !"));
    });
  }, []);
  return `<div>
  <div class="max-w-6xl m-auto">
      <form action="" id="form">
          <h1 class="text-center text-[#f75023] font-bold">EDIT ABOUT ME</h1>
          <div>
              <label for="" class="block text-[#ffff]">About me</label>
              <textarea id="about" type="text" class="border w-full outline-none p-2 h-[100px]">${about.about}</textarea>
          </div>
          <div class="">
              <input type="submit"
                  class="cursor-pointer border px-5 py-2 border border-[#f75023] hover:bg-[#f75023] text-[#f75023] hover:text-[#ffff] uppercase text-[12px] mt-[10px]">
          </div>
    </form>
  </div>
  </div>`;
};
export default aboutEditAdmin;
