import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from './components/Sidebar';
import About from './components/About';
import Projects from './components/Projects';
import CaseStudy from './components/CaseStudy';

function Layout() {
  const location = useLocation();
  const hideSidebar = location.pathname.startsWith("/projects/");

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-green-950 text-white">
      {!hideSidebar && <Sidebar />}
      <main className="flex-1 px-8 py-12 overflow-y-auto">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <About />
                <Projects />
              </>
            }
          />
          <Route path="/projects/:slug" element={<CaseStudy />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
