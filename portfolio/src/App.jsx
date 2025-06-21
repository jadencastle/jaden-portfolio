import Sidebar from './components/Sidebar';
import About from './components/About';
import Projects from './components/Projects';

export default function App() {
  return (
    <div className="flex min-h-screen bg-[#0a192f] text-white">
      <Sidebar />
      <main className="flex-1 px-8 py-12 overflow-y-auto">
        <About />
        <Projects />
      </main>
    </div>
  );
}
