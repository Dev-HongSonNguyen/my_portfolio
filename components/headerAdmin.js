const headerAdmin = ()=>{
    return`
    <div class="w-full bg-[#2b2d33] py-[10px]" id="backtop">
        <div class="max-w-6xl m-auto flex justify-between items-center py-3">
            <!-- //logo -->
            <div class="">
                <a href="">
                    <!-- <img class="w-[120px]" src="./img/logo-1.png" alt=""> -->
                    <h1 class="text-[#ffff] text-[18px]">DEV <span class="text-[#f75023]">HONG SON NGUYEN</span></h1>
                </a>
            </div>
            <!-- //menu -->
            <div class="">
                <ul class="flex items-center gap-[50px]">
                    <li><a class="text-[16px] text-[#f75023] tra font-bold tracking-[1px]" href="/admin/projectAdmin">Project</a>
                    </li>
                    <li><a data-navigo class="text-[16px] text-[#ffff] hover:text-[#f75023] tra font-bold tracking-[1px]"
                            href="/admin/userListAdmin">Users</a>
                    </li>
                    <li><a id=""
                            class="text-[16px] text-[#ffff] hover:text-[#f75023] tra font-bold tracking-[1px]"
                            href="/admin/categoryListAdmin">Category</a>
                    </li>
                    <li><a id=""
                            class="text-[16px] text-[#ffff] hover:text-[#f75023] tra font-bold tracking-[1px]"
                            href="/admin/aboutAdmin">About</a>
                    </li>
                    <li><a id=""
                            class="text-[16px] text-[#ffff] hover:text-[#f75023] tra font-bold tracking-[1px]"
                            href="/admin/processListAdmin">Process</a>
                    </li>
                    <li><a id=""
                            class="text-[16px] text-[#ffff] hover:text-[#f75023] tra font-bold tracking-[1px]"
                            href="/admin/userAdmin">Acount Admin</a>
                    </li>
                    <li><a href="/"
                            class="text-[16px] text-[#f75023] tra font-bold tracking-[1px] border px-10 py-2 border-[#f75023] hover:bg-[#f75023] hover:text-[#ffff] rounded-md">VIEW
                            CLIENT</a>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
    `
}
export default headerAdmin