import axios from "axios";
import headerAdmin from "../../components/headerAdmin";
import { router, useEffect } from "../lib";

const aboutAddAdmin = () => {
  useEffect(() => {
    const form = document.querySelector("#form");
    const about = document.querySelector("#about");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const formAboutMe = {
        about: about.value,
      };
      axios
        .post("https://s2qbne-8080.csb.app/api/APIabout", formAboutMe)
        .then(() => router.navigate("/admin/aboutAdmin"))
        .catch(() => alert("Add About Me to Fail !"));
    });
  }, []);
  return `<div>
  ${headerAdmin()}
  <div class="max-w-6xl m-auto">
      <form action="" id="form">
          <h1 class="text-center text-[#f75023] font-bold">ADD ABOUT ME</h1>
          <div>
              <label for="" class="block text-[#ffff]">About me</label>
              <input id="about" "type="text" class="border w-full outline-none p-2">
          </div>
          <div class="">
              <input type="submit"
                  class="cursor-pointer border px-5 py-2 border border-[#f75023] hover:bg-[#f75023] text-[#f75023] hover:text-[#ffff] uppercase text-[12px] mt-[10px]">
          </div>
    </form>
  </div>
  </div>`;
};

export default aboutAddAdmin;
