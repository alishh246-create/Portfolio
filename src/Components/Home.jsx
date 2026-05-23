import React from "react"

function Home() {
  return (
    <section id="home" className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center px-8 md:px-24 bg-[#1a0a0a]">
      
      {/* Left Side - Text */}
      <div className="flex flex-col text-center md:text-left order-2 md:order-1 py-10 md:py-0" data-aos ="fade-right" >
        <p className="text-[#F69D39] text-lg md:text-2xl tracking-widest uppercase mb-4">Hi! This is Alisha Hameed</p>
        <h1 className="text-5xl md:text-8xl font-extrabold leading-none text-[#FFF5E5]">
          Frontend<br />
          <span className="text-[#D92243]">Developer</span>
        </h1>
        <p className="text-[#E0C375] text-base md:text-lg mt-6 mb-10 leading-relaxed">
          I craft responsive web experiences with clean code and creative design.
        </p>
        <a
          href="/cv.pdf"
          target="_blank"
          className="bg-[#D92243] text-[#FFF5E5] font-bold px-8 py-4 rounded-full w-fit mx-auto md:mx-0 hover:bg-[#F69D39] hover:text-[#1a0a0a] transition-all duration-300 tracking-wider"
        >
          Resume
        </a>
      </div>

      {/* Image */}
      <div className="flex justify-center items-center order-1 md:order-2 pt-24 md:pt-0" data-aos="fade-left">
        <img
          src="/myPic.jpeg"
          alt="Alisha Hameed"
          className="w-60 h-60 md:w-80 md:h-80 rounded-full object-cover border-4 border-[#D92243]"
        />
      </div>

    </section>
  )
}

export default Home