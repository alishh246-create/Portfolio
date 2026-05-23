function Projects() {
  const projects = [
    {
      title: 'Food Delivery App',
      tag: 'React',
      desc: 'A full-featured food ordering app with cart, filters, and restaurant listings.',
      link: 'https://alishh246-create.github.io/Delivery-App/',
      image: 'food.png',
    },
    {
      title: 'Weather App',
      tag: 'React · API',
      desc: 'Real-time weather forecast app with location search and temperature display.',
      link: 'https://alishh246-create.github.io/weather-app/',
      image: '/weather.png',
    },
    {
      title: 'Property Finder App',
      tag: 'React',
      desc: 'Browse, filter, and explore property listings with a modern interface.',
      link: 'https://alishh246-create.github.io/property-dealer-app/',
      image: '/property.png',
    },
  ]

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center px-8 md:px-24 py-20 bg-[#0d0505]">

      <div className="mb-14" data-aos="fade-up">
        <p className="text-[#F69D39] text-sm tracking-widest uppercase mb-2">My Work</p>
        <h2 className="text-4xl md:text-6xl font-extrabold text-[#FFF5E5]">Latest <span className="text-[#D92243]">Projects</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={index * 150} className="relative rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group h-80">
            
            {/* Background Image */}
            <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover"/>
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-300"></div>
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="text-[#F69D39] text-xs uppercase tracking-widest mb-2 block">{project.tag}</span>
              <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">{project.desc}</p>
              <a href={project.link} target="_blank" className="text-[#D92243] text-sm font-bold uppercase tracking-widest hover:text-[#F69D39] transition-all">
                View Project 
              </a>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Projects