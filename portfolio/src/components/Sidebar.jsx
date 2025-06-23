export default function Sidebar() {
    return (
      <aside className="w-[35vw] sticky top-0 h-screen flex flex-col justify-between items-center px-20 py-20 border-r border-[#394c38]">
        <div className="space-y-3">
          <h1 className="text-5xl font-bold">Jaden Castle</h1>
          <h2 className="text-2xl font-semibold text-[#e5efe4]">User Experience Designer & Developer</h2>
          <p className="space-y-2 font-medium text-[#7f9c7c]">I design and build inclusive experiences that prioritize people, precision, and purpose.</p>
          <nav className="mt-12">
            <ul className="space-y-5 text-sm font-medium text-[#7f9c7c]">
              <li className="text-white">ABOUT</li>
              <li>PROJECTS</li>
            </ul>
          </nav>
        </div>
        <div className="flex space-x-4 text-[#7f9c7c]">
          {/* Replace these with your actual icons/links */}
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
      </aside>
    );
  }
  