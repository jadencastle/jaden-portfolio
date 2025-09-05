import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from './components/Sidebar';
import About from './components/About';
import Projects from './components/Projects';
import CaseStudy from './components/CaseStudy';
import Footer from "./components/footer";

function Layout() {
  const location = useLocation();
  const hideSidebar = location.pathname.startsWith("/projects/");
  const isCaseStudy = location.pathname.startsWith("/projects/");

  return (
      <div
        className={`flex flex-col lg:flex-row min-h-screen ${
          isCaseStudy ? "bg-white text-gray-900" : "bg-green-950 text-white"
        }`}
      >
      {!hideSidebar && <Sidebar />}
      <div className="flex flex-col flex-1">
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
      <Footer />
    </div>
  </div>
  );
}

export default function App() {
  return (
    <Router basename="/">
      <Layout />
    </Router>
  );
}
