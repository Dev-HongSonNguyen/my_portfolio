const about = () => {
  return `
  <div class="w-full bg-[#2b2d33]">
  <div class="max-w-6xl m-auto grid grid-cols-2 gap-4 py-[70px]" id="about">
      <div class="relative">
          <img class="w-[500px]"
              src="https://res.cloudinary.com/freelencer/image/upload/v1676456962/img-portfolio/image2_xafstp.png"
              alt="">
          <div class="absolute top-0 left-[-50px]">
              <img src="https://res.cloudinary.com/freelencer/image/upload/v1676456960/img-portfolio/img-6_o74yok.png"
                  alt="">
          </div>
          <div class="absolute bottom-0 right-[50px]">
              <img src="https://res.cloudinary.com/freelencer/image/upload/v1676456961/img-portfolio/img-8_xk0f1p.png"
                  alt="">
          </div>
      </div>
      <div class="pt-[100px] relative">
          <h2 class="text-[#f75023] text-[30px]">What about me ?</h2>
          <p class="text-[16px] text-[#ffff] leading-[30px] py-5 text-justify">Hello! <span
                  class="text-[#1cbe59]">I'm a front-end developer</span>.
              I am
              currently a
              4th-semester
              student at FPT
              Polytechnic. I am
              very passionate and dedicated to my field of study. During my time at school, I have acquired skills
              and background knowledge in programming languages ​​& frameworks <span class="text-[#f75023]">
                  [ Html, Css, Javascript, Tailwind
                  CSS, React JS, Node JS, Bootstrap ]
              </span>. I am a responsible person at work and love new things. Thank
              you for reading !
          </p>
          <a class="bg-[#f75023] text-[#ffff] tra font-bold tracking-[1px] border px-10 py-2 border-[#f75023] hover:bg-[#2b2d33] rounded-md inline-block"
              href="#contact"><span>Contact Me</span></a>
          <div class="absolute top-[100px] right-[-150px] hidden md:block">
              <img src="https://res.cloudinary.com/freelencer/image/upload/v1676456960/img-portfolio/img-7_k32cbc.png"
                  alt="">
          </div>
      </div>
  </div>
</div>
  `
}
export default about