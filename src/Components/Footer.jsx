import React from "react"

function Footer() {
  return (
    <footer className="bg-[#0d0505] border-t border-white/10 px-8 md:px-24 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        
        <a href="#home" className="text-[#D92243] font-extrabold text-2xl tracking-wider">A.</a>
        
        <p className="text-[#E0C375] text-sm text-center">
          Designed & Built with by <span className="text-[#FFF5E5] font-semibold">Alisha Hameed</span>
        </p>

      </div>
    </footer>
  )
}

export default Footer