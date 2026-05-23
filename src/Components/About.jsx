import React from 'react'

function About() {
  return (
    <section id="about" className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center px-8 md:px-24 py-20 bg-[#110808]">
      
      {/* Left Side - Text */}
<div className="flex flex-col" data-aos="fade-right">
          <p className="text-[#F69D39] text-sm tracking-widest uppercase mb-2">About Me</p>
        <h2 className="text-4xl md:text-6xl font-extrabold text-[#FFF5E5] mb-6">Who I <span className="text-[#D92243]">Am</span></h2>
        <p className="text-[#E0C375] text-base leading-relaxed mb-4">
          I'm a passionate <span className="text-[#FFF5E5] font-semibold">Frontend Web Developer</span> with a strong eye for design and a love for building interactive, user-friendly interfaces.
        </p>
        <p className="text-[#E0C375] text-base leading-relaxed mb-4">
          Currently doing my <span className="text-[#FFF5E5] font-semibold">6-month internship</span> in web development, working on real-world projects.
        </p>
        <p className="text-[#E0C375] text-base leading-relaxed">
          I enjoy turning ideas into web applications using modern technologies like React, Tailwind CSS, and more.
        </p>
      </div>

      {/* Right Side - Info Cards */}
<div className="flex flex-col gap-4 mt-10 md:mt-0" data-aos="fade-left">
        {[
          {  title: 'Education', desc: 'DAE — Computer Information Technology' },
          {  title: 'Experience', desc: '6 Months Frontend Internship' },
          {  title: 'Location', desc: 'Bahawalpur, Pakistan' },
          {  title: 'Focus', desc: 'React · UI Design · Web Apps' },
        ].map((card, index) => (
          <div key={index} className="flex items-center gap-4 bg-[#1a0a0a] border border-[#D92243] rounded-xl px-5 py-4 hover:border-[#F69D39] transition-all">
            <span className="text-3xl">{card.icon}</span>
            <div>
              <h4 className="text-[#F69D39] text-xs uppercase tracking-widest mb-1">{card.title}</h4>
              <p className="text-[#FFF5E5] text-sm">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default About