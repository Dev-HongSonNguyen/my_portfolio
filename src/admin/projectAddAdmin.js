import axios from "axios";
import headerAdmin from "../../components/headerAdmin";
import { router, useEffect, useState } from "../lib";

const projectAddAdmin = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get("https://s2qbne-8080.preview.csb.app/api/categories")
      .then(({ data }) => setCategory(data));
  }, []);
  useEffect(function () {
    const form = document.querySelector("#form");
    const nameProject = document.querySelector("#name_project");
    const dateProject = document.querySelector("#date");
    const image = document.querySelector("#image_project");
    const role = document.querySelector("#role");
    const des = document.querySelector("#des");
    const category = document.querySelector("#category");
    const source = document.querySelector("#source");
    const demo = document.querySelector("#demo");
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const urls = await uploadFiles(image.files);

      const projectAdd = {
        name: nameProject.value,
        date: dateProject.value,
        image: image.value,
        role: role.value,
        des: des.value,
        source: source.value,
        demo: demo.value,
        categoryId: Number(category.value),
      };
      axios
        .post("https://s2qbne-8080.preview.csb.app/api/APIproject", projectAdd)
        .then(() => alert("Thêm thành công !"))
        .then(() => router.navigate("/admin/projectAdmin"))
        .catch(() => alert("Add to Fail !"));
    });
  },[]);

  const uploadFiles = async (files) => {
    if (files) {
      const cloud_name = "dwzh9i6xf";
      const preset_name = "duanECMA";
      const folder_name = "duanECMA_portforlio";
      const urls = [];
      const api = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

      const formData = new FormData();

      formData.append("upload_preset", preset_name);
      formData.append("folder", folder_name);

      for (const file of files) {
        formData.append("file", file);
        const response = await axios.post(api, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        urls.push(response.data.secure_url);
      }
      return urls;
    }
  };
  return `
    ${headerAdmin()}
    <div class="max-w-6xl m-auto">
      <form action="" id="form">
          <h1 class="text-center text-[#f75023] font-bold">ADD PROJECT</h1>
          <div>
              <label for="" class="block text-[#ffff]">Name Project</label>
              <input id="name_project" "type="text" class="border w-full outline-none p-2">
          </div>
          <div>
              <label for="" class="block text-[#ffff]">Image</label>
              <input id="image_project" type="text" class="border w-full outline-none p-2" multiple>
          </div>
          <div class="">
              <label for="" class="block text-[#ffff]">Date</label>
              <input id="date" type="date" class="border w-full outline-none p-2">
          </div>
          <div class="">
              <label for="" class="block text-[#ffff]">Role</label>
              <input id="role" type="text" class="border w-full outline-none p-2">
          </div>
          <div class="">
              <label for="" class="block text-[#ffff]">Category</label>
              <select name="" id="category" class="w-[200px]">
              ${category
                .map((item) => {
                  return `
                <option id="category" value="${item.id}">${item.name}</option>
                `;
                })
                .join("")}
              </select>
          </div>
          <div class="">
              <label for="" class="block text-[#ffff]">Source code</label>
              <input id="source" type="text" class="border w-full outline-none p-2">
          </div>
          <div class="">
              <label for="" class="block text-[#ffff]">Link Demo</label>
              <input id="demo" type="text" class="border w-full outline-none p-2">
          </div>
          <div class="">
              <label for="" class="block text-[#ffff]">Description</label>
              <input id="des" type="text" class="border w-full outline-none p-2">
          </div>
          <div class="">
              <input type="submit"
                  class="cursor-pointer border px-5 py-2 border border-[#f75023] hover:bg-[#f75023] text-[#f75023] hover:text-[#ffff] uppercase text-[12px] mt-[10px]">
          </div>
    </form>
  </div>
  `;
};
export default projectAddAdmin;
