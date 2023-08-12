import axios from "axios";
import { router, useEffect, useState } from "../lib";
import process from "./process";
import about from "./about";
import contact from "./contact";
import project from "./project";
import "../../public/css/animation.css";
const HomePage = () => {
    return `
    <div class="w-full bg-[#232529] py-[10px] fixed top-0 left-0 z-20">
        <div class="max-w-6xl m-auto md:flex justify-between items-center py-3 px-10 md:px-0">
            <!-- //logo -->
                <div class="">
                    <a href="#home">
                        <!-- <img class="w-[120px]" src="./img/logo-1.png" alt=""> -->
                        <h1 class="text-[#ffff] text-[18px] font-bold">DEV <span class="text-[#f75023]">HONG SON NGUYEN</span></h1>
                    </a>
                </div>
            <!-- //menu -->
                <div class="hidden md:block">
                    <ul class="flex items-center gap-[50px]">
                        <li><a class="text-[16px] text-[#f75023] font-bold tracking-[1px]" href="#home">Home</a></li>
                        <li><a class="text-[16px] text-[#ffff] hover:text-[#f75023] tra font-bold tracking-[1px]"
                                href="#about">About</a>
                        </li>
                        <li><a class="text-[16px] text-[#ffff] hover:text-[#f75023] tra font-bold tracking-[1px]"
                                href="#project">Project</a>
                        </li>
                        <li><a id="#contact"
                                class="text-[16px] text-[#ffff] hover:text-[#f75023] tra font-bold tracking-[1px]"
                                href="#contact">Contact</a>
                        </li>
                        <li><a id=""
                                class="text-[16px] text-[#ffff] hover:text-[#f75023] tra font-bold tracking-[1px]"
                                href="#skill">Skill</a>
                        </li>
                    </ul>
                </div>
        </div>
    </div>
        <!-- LOGIN -->
    <!-- PROCESS -->
    <div class="w-full bg-[#2b2d33] py-[100px] mt-[70px]" id="home">
        <div class="max-w-6xl m-auto md:flex justify-between items-center w-full px-10 md:px-0">
            <div class="md:w-[50%]">
                <div class="text-[40px] text-[#f75023] font-bold ">
                    <h3 class="">Hello, I'm</h3>
                </div>
                <div class="text-6xl text-[#ffff]">
                    <h3 class="animate-charcter">Hong Son Nguyen</h3>
                </div>
                <div class="mt-10">
                    <p class="text-[20px] text-[#ffff]">A
                        <span class="text-[#1cbe59]">Front-end Developer</span>
                        <span class="text-[#ffff]">From</span>
                        <span class="text-[#f75023]">VietNam</span>
                    </p>
                    <div class="text-[#ffff] py-5 text-[20px]">
                        <p>I'm programmer in VietNam, I am very passionate and dedicated to my work.</p>
                    </div>
                    <div class="flex items-center">
                        <div class="mr-[10px]">
                            <a class="bg-[#f75023] text-[#ffff] tra font-bold tracking-[1px] border px-10 py-2 border-[#f75023] hover:bg-[#2b2d33] rounded-md inline-block"
                                href="https://drive.google.com/file/d/1gIOs38muFP1DrZCHIoGzN027C6-RRqll/view?usp=share_link"><span>DOWNLOAD CV</span></a>
                        </div>
                        <div class="">
                            <ul class="flex items-center">
                                <li class="px-3"><a href="#" class="text-[#ffff]"><i
                                            class="fab fa-facebook-f hover:text-[#f75023]"></i></a>
                                </li>
                                <li class="px-3"><a href="#" class="text-[#ffff] hover:text-[#f75023]"><i
                                            class="fab fa-twitter"></i></a>
                                </li>
                                <li class="px-3"><a href="#" class="text-[#ffff] hover:text-[#f75023]"><i
                                            class="fab fa-telegram-plane"></i></a></li>
                                <li class="px-3"><a href="#" class="text-[#ffff] hover:text-[#f75023]"><i
                                            class="fab fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:w-[50%] pl-[150px] relative z-10">
                <img class="md:w-[70%] hidden md:block"
                    src="https://res.cloudinary.com/freelencer/image/upload/v1676456968/img-portfolio/img-1_cmf5v5.png"
                    alt="">
                <div class="absolute top-0">
                    <img class="w-[100px] hidden md:block"
                        src="https://res.cloudinary.com/freelencer/image/upload/v1676456961/img-portfolio/img-2_dkxgcs.webp"
                        alt="">
                </div>
                <div class="absolute right-[30px] top-[120px]">
                    <img class="w-[100px] hidden md:block"
                        src="https://res.cloudinary.com/freelencer/image/upload/v1676456963/img-portfolio/img-3_gsjhv3.png"
                        alt="">
                </div>
                <div class="absolute bottom-[-50px]">
                    <img class="w-[100px] hidden md:block"
                        src="https://res.cloudinary.com/freelencer/image/upload/v1676456964/img-portfolio/img-5_kdykym.png"
                        alt="">
                </div>
                <div class="absolute right-[70px] top-[400px]">
                    <img class="w-[100px] hidden md:block"
                        src="https://res.cloudinary.com/freelencer/image/upload/v1676456964/img-portfolio/img-4_rronle.png"
                        alt="">
                </div>
            </div>
        </div>
    </div>
    <!-- MARK -->
    ${process()}
    <!-- ABOUT ME -->
    ${about()}
    <!-- PROJECT -->
    ${project()}
    
    <!-- SKILL -->
    <div class="bg-[#2b2d33] w-full" style="border-bottom: 1px solid #f8f8ff">
        <div class="max-w-6xl m-auto pt-[50px] pb-[100px]" id="skill">
            <div class="px-[20px] md:px-[0px]">
                <h3 class="text-center text-[40px] text-[#ffff]">MY SKILLS</h3>
                <p class="text-center text-[#f75023] pb-[80px] text-[22px]">I Develop Skills Regularly to Keep Me
                    Update</p>
                <div class="grid grid-cols-2 md:grid-cols-4 px-[20px] md:px-[0px] gap-4">
                    <div class="flex justify-center">
                        <div class="">
                            <div class="bg-[#232529] w-[150px] p-10 rounded-[50%] hover:scale-110"
                                style="transition: all 0.5s ease-in-out">
                                <img class=" w-[150px] h-[70px]" src="https://res.cloudinary.com/dwzh9i6xf/image/upload/v1689227172/duanECMA_portforlio/html_ggvpo4.png" alt="">
                            </div>
                            <div class="flex justify-center">
                                <span class="text-[#ffff] text-[24px] pt-5">HTML</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div class="">
                            <div class="bg-[#232529] w-[150px] p-10 rounded-[50%] hover:scale-110"
                                style="transition: all 0.5s ease-in-out">
                                <img class=" w-[150px] h-[70px]" src="https://res.cloudinary.com/dwzh9i6xf/image/upload/v1689227468/duanECMA_portforlio/css_bubbz0.png" alt="">
                            </div>
                            <div class="flex justify-center">
                                <span class="text-[#ffff] text-[24px] pt-5">CSS</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div class="">
                            <div class="bg-[#232529] w-[150px] p-10 rounded-[50%] hover:scale-110"
                                style="transition: all 0.5s ease-in-out">
                                <img class=" w-[150px] h-[70px]" src="https://res.cloudinary.com/freelencer/image/upload/v1676456961/img-portfolio/img-2_dkxgcs.webp" alt="">
                            </div>
                            <div class="flex justify-center">
                                <span class="text-[#ffff] text-[24px] pt-5">JAVACRIPT</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div class="">
                            <div class="bg-[#232529] w-[150px] p-10 rounded-[50%] hover:scale-110"
                                style="transition: all 0.5s ease-in-out">
                                <img class=" w-[150px] h-[70px]" src="https://anhcoder03.vercel.app/images/react.png" alt="">
                            </div>
                            <div class="flex justify-center">
                                <span class="text-[#ffff] text-[24px] pt-5">REACTJS</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div class="">
                            <div class="bg-[#232529] w-[150px] p-10 rounded-[50%] hover:scale-110"
                                style="transition: all 0.5s ease-in-out">
                                <img class=" w-[150px] h-[70px]" src="https://anhcoder03.vercel.app/images/typescript.png" alt="">
                            </div>
                            <div class="flex justify-center">
                                <span class="text-[#ffff] text-[24px] pt-5">TYPESCRIPT</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div class="">
                            <div class="bg-[#232529] w-[150px] p-10 rounded-[50%] hover:scale-110"
                                style="transition: all 0.5s ease-in-out">
                                <img class=" w-[150px] h-[70px]" src="https://anhcoder03.vercel.app/images/nodejs.png" alt="">
                            </div>
                            <div class="flex justify-center">
                                <span class="text-[#ffff] text-[24px] pt-5">NODE JS</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div class="">
                            <div class="bg-[#232529] w-[150px] p-10 rounded-[50%] hover:scale-110"
                                style="transition: all 0.5s ease-in-out">
                                <img class=" w-[150px] h-[70px]" src="https://anhcoder03.vercel.app/images/boostrap.png" alt="">
                            </div>
                            <div class="flex justify-center">
                                <span class="text-[#ffff] text-[24px] pt-5">BOOTSTRAP</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div class="">
                            <div class="bg-[#232529] w-[150px] p-10 rounded-[50%] hover:scale-110"
                                style="transition: all 0.5s ease-in-out">
                                <img class=" w-[150px] h-[70px]" src="https://anhcoder03.vercel.app/images/tailwind.png" alt="">
                            </div>
                            <div class="flex justify-center">
                                <span class="text-[#ffff] text-[24px] pt-5">TAILWIND CSS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- CONTACT -->
    ${contact()}
    <!-- MAP -->
    <div class="bg-[#2b2d33] w-full pb-[100px]">
        <div class="pt-[100px] max-w-6xl m-auto">
            <!--<iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9333644911353!2d105.73999421484174!3d21.035352092929212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134548c1eecba2b%3A0x45bf0bfbb337613e!2zNjkgTmcuIDE0MyDEkC4gWHXDom4gUGjGsMahbmcsIFh1w6JuIFBoxrDGoW5nLCBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1676453222493!5m2!1svi!2s"
                width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade" class="w-full rounded-md"></iframe> -->
        </div>
    </div>
    <!-- FOOTER -->
    <div class="bg-[#232529]" style="border-top: 1px solid #ffff">
        <div class="py-7">
            <div class="">
                <ul class="flex items-center justify-center">
                    <li class="px-3"><a href="#" class="text-[#ffff]"><i
                                class="fab fa-facebook-f hover:text-[#f75023]"></i></a>
                    </li>
                    <li class="px-3"><a href="#" class="text-[#ffff] hover:text-[#f75023]"><i
                                class="fab fa-twitter"></i></a>
                    </li>
                    <li class="px-3"><a href="#" class="text-[#ffff] hover:text-[#f75023]"><i
                                class="fab fa-telegram-plane"></i></a></li>
                    <li class="px-3"><a href="#" class="text-[#ffff] hover:text-[#f75023]"><i
                                class="fab fa-instagram"></i></a>
                    </li>
                </ul>
            </div>
            <div class="text-center pt-5">
                <a href="/admin/projectAdmin"><span class="text-[#ffff]">© 2023 Hong Son Nguyen. All Rights Reserved</span></a>
            </div>
        </div>
    </div>
    `;
};
export default HomePage;
