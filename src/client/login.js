const login = () => {
    return `
    <div class="" id="modal-container">
      <div class="" id="modal">
          <button id="btn_close">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6 text-[#f75023] absolute right-[10px] top-[10px]">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
          </button>
          <!-- <h1 class="text-center">LOGIN</h1> -->
          <form action="" class="text-center px-[40px] pt-[85px]">
              <input class="w-full border outline-none p-5 my-2 text-[10px] bg-[#2b2d33] text-[#ffff]"
                  type="email" placeholder="Email" required>
              <input class="w-full border outline-none p-5 my-2 text-[10px] bg-[#2b2d33] text-[#ffff]"
                  type="password" placeholder="Password" required>
              <button class="bg-[#f75023] text-[#ffff] px-5 py-2 text-[12px] mt-2">LOGIN</button>
          </form>
      </div>
      </div>
    `
  }
  export default login