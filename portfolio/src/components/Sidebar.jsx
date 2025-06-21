export default function Sidebar() {
    return (
      <aside className="w-[300px] sticky top-0 h-screen flex flex-col justify-between px-8 py-12 border-r border-slate-800">
        <div>
          <h1 className="text-3xl font-bold">Jaden Castle</h1>
          <h2 className="text-slate-400 mt-1">Title</h2>
          <nav className="mt-12">
            <ul className="space-y-2 text-sm font-medium text-slate-500">
              <li className="text-white">ABOUT</li>
              <li>EXPERIENCE</li>
              <li>PROJECTS</li>
            </ul>
          </nav>
        </div>
        <div className="flex space-x-4 text-slate-500">
          {/* Replace these with your actual icons/links */}
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
      </aside>
    );
  }
  