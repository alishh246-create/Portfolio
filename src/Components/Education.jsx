import React from "react"

function Education() {
  const items = [
    {
      title: 'DAE — Computer Information Technology',
      year: 'Diploma of Associate Engineering',
      desc: 'Studied core computer science concepts, programming fundamentals, networking, and IT systems.',
    },
    {
      title: 'Frontend Web Development Internship',
      year: '6 Months · Ongoing',
      desc: 'Building real-world projects using HTML, CSS, Tailwind, Bootstrap, JavaScript and React.',
    },
  ]

  return (
    <section id="education" className="min-h-screen flex flex-col justify-center px-8 md:px-24 py-20 bg-[#1a0a0a]">

      <div className="mb-14" data-aos="fade-up">
        <p className="text-[#F69D39] text-sm tracking-widest uppercase mb-2">Background</p>
        <h2 className="text-4xl md:text-6xl font-extrabold text-[#FFF5E5]">Education & <span className="text-[#D92243]">Experience</span></h2>
      </div>

      <div className="flex flex-col gap-6">
        {items.map((item, index) => (
          <div key={index} className="flex gap-6 items-start" data-aos="fade-up" data-aos-delay={index * 200}>
            
            {/* Left - number */}
            <div className="w-14 h-14 rounded-full bg-[#D92243] flex items-center justify-center text-white font-extrabold text-xl shrink-0">
              {index + 1}
            </div>

            {/* Right - content */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex-1 hover:border-[#D92243] transition-all">
              <p className="text-[#F69D39] text-xs uppercase tracking-widest mb-2">{item.year}</p>
              <h3 className="text-[#FFF5E5] font-bold text-xl mb-3">{item.title}</h3>
              <p className="text-[#E0C375] text-sm leading-relaxed">{item.desc}</p>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Education