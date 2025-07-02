import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

export default function Sidebar() {
  const [copied, setCopied] = useState(false);
  const email = "jadencastle303@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <aside className="w-[35vw] sticky top-0 h-screen flex flex-col justify-between items-center px-20 py-20 border-r border-green-950">
      <div className="space-y-3">
        <h1 className="text-5xl font-bold text-zinc-100">Jaden Castle</h1>
        <h2 className="text-2xl font-semibold	text-stone-50">
          User Experience Designer & Developer
        </h2>
        <p className="space-y-2 font-medium	text-stone-300">
          I design and build inclusive experiences that prioritize people,
          precision, and purpose.
        </p>
        <nav className="mt-12">
          <ul className="space-y-5 text-m font-medium text-[#9dd8ae]">
            <li>
              <a 
                href="#about"
                className="text-[#9dd8ae] transition-colors duration-300 hover:text-white"
                >
                  ABOUT
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-[#9dd8ae] transition-colors duration-300 hover:text-white"
              >
                PROJECTS
              </a>
            </li>
            <li>
              <a href='/CastleResume.pdf'
              download='CastleResume.pdf'
              className="text-[#9dd8ae] transition-colors duration-300 hover:text-white"
              >
              RESUME
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex flex-col items-center space-y-2">
        {copied && (
          <div className="text-xs bg-[#4e644d] text-white px-2 py-1 rounded">
            Email copied!
          </div>
        )}

        <div className="flex space-x-6 text-[#9dd8ae] text-3xl">
        <a
            href="https://www.linkedin.com/in/jadencastle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-transform duration-300 transform hover:scale-[1.3 hover:text-white"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/jadencastle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-transform duration-300 transform hover:scale-[1.3] hover:text-white"
          >
            <FaGithub />
          </a>
          <div
            onClick={handleCopy}
            className="cursor-pointer transition-transform duration-300 transform hover:scale-[1.3] hover:text-white"
            aria-label="Copy Email"
            
          >
            <FaEnvelope />
          </div>
        </div>
      </div>
    </aside>
  );
}
