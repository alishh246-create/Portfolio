import { useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
<nav className="fixed top-0 left-0 right-0 w-full z-50 bg-[#1a0a0a] px-8 md:px-24 py-5">
        <div className="flex justify-between items-center">
        <a href="#home" className="text-[#D92243] font-extrabold text-2xl tracking-wider">A.</a>
        {/* Desktop Links */}
<ul className="md:hidden flex flex-col gap-4 list-none pt-4 pb-2 bg-[#1a0a0a]">
            <li><a href="#home" className="text-[#FFF5E5] font-bold text-sm uppercase tracking-widest hover:text-[#D92243] transition-all">Home</a></li>
          <li><a href="#about" className="text-[#FFF5E5] font-bold text-sm uppercase tracking-widest hover:text-[#D92243] transition-all">About</a></li>
          <li><a href="#skills" className="text-[#FFF5E5] font-bold text-sm uppercase tracking-widest hover:text-[#D92243] transition-all">Skills</a></li>
          <li><a href="#projects" className="text-[#FFF5E5] font-bold text-sm uppercase tracking-widest hover:text-[#D92243] transition-all">Projects</a></li>
          <li><a href="#education" className="text-[#FFF5E5] font-bold text-sm uppercase tracking-widest hover:text-[#D92243] transition-all">Education</a></li>
        </ul>
        {/* Hamburger Button */}
        <button
          className="md:hidden text-[#FFF5E5] text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
</div>
{/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 list-none pt-4 pb-2">
          <li><a href="#home" onClick={() => setIsOpen(false)} className="text-[#FFF5E5] text-sm uppercase tracking-widest hover:text-[#D92243] transition-all">Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)} className="text-[#FFF5E5] text-sm uppercase tracking-widest hover:text-[#D92243] transition-all">About</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)} className="text-[#FFF5E5] text-sm uppercase tracking-widest hover:text-[#D92243] transition-all">Skills</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)} className="text-[#FFF5E5] text-sm uppercase tracking-widest hover:text-[#D92243] transition-all">Projects</a></li>
          <li><a href="#education" onClick={() => setIsOpen(false)} className="text-[#FFF5E5] text-sm uppercase tracking-widest hover:text-[#D92243] transition-all">Education</a></li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar