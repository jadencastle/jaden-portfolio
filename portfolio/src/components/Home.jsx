import Sidebar from './Sidebar';
import About from './About';
import Projects from './Projects';

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Sidebar />
      <main className="flex-1 px-6 py-12 space-y-16">
        <About />
        <Projects />
      </main>
    </div>
  );
}
