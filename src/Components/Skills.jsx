function Skills() {
  const skills = [
    'HTML',
    'CSS', 
    'Tailwind CSS',
    'Bootstrap',
    'JavaScript',
    'React',
  ]
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center px-8 md:px-24 py-20 bg-[#1a0a0a]">
      
      <div className="mb-14" data-aos="fade-up">
        <p className="text-[#F69D39] text-sm tracking-widest uppercase mb-2">What I Know</p>
        <h2 className="text-4xl md:text-6xl font-extrabold text-[#FFF5E5]">My <span className="text-[#D92243]">Skills</span></h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
<div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="bg-white/5 border border-white/10 rounded-2xl p-8 flex items-center justify-center hover:border-[#D92243] hover:scale-105 transition-all duration-300">
            <h3 className="text-[#FFF5E5] font-bold text-xl text-center">{skill}</h3>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Skills