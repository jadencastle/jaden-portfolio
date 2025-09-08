import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import projectData from "../data/projects.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/swiper.css";


const Card = ({ children }) => (
  <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 sm:p-10 space-y-6">
    {children}
  </div>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-2xl sm:text-3xl font-bold text-[#2f4e3b] mb-6">{children}</h2>
);

const SubTitle = ({ children }) => (
  <h3 className="text-lg sm:text-xl font-semibold text-[#2f4e3b] mb-3">{children}</h3>
);

export default function CaseStudy() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projectData.find(
    (p) => p.slug.toLowerCase() === slug.toLowerCase()
  );
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.documentElement.style.backgroundColor = "white";
    document.body.style.backgroundColor = "white";

    return () => {
      document.documentElement.style.backgroundColor = "";
      document.body.style.backgroundColor = "";
    };
  }, []);

  if (!project) return <div className="text-gray-900 p-4">Project not found.</div>;

  return (
    <div className="min-h-screen w-full bg-white">
      <section className="max-w-7xl mx-auto px-4 py-12 text-gray-900 space-y-20">
        <button
          onClick={() => navigate(-1)}
          className="fixed top-4 left-4 z-40 flex items-center gap-2 bg-[#132d1f] hover:bg-[#1e3b2b] text-[#9dd8ae] hover:text-white px-4 py-2 rounded-full shadow-lg transition-colors duration-300 border border-[#2f4e3b]"
        >
          <FaArrowLeft />
          <span className="hidden sm:inline">Back to Projects</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          <div className="flex flex-col justify-center space-y-4 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {project.hero.title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-700">{project.hero.subtitle}</p>
            <div className="text-base sm:text-lg space-y-2 text-gray-600">
              <p>
                <span className="font-semibold text-[#2f4e3b]">Role:</span>{" "}
                {project.hero.role}
              </p>
              <p>
                <span className="font-semibold text-[#2f4e3b]">Scope:</span>{" "}
                {project.hero.scope}
              </p>
              <p>
                <span className="font-semibold text-[#2f4e3b]">Tools:</span>{" "}
                {project.hero.tools}
              </p>
            </div>
          </div>
          <div className="flex">
            <img
              src={project.hero.img}
              alt={project.hero.title}
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
        </div>

        <section>
          <SectionTitle>Final Designs</SectionTitle>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            className="rounded-xl shadow-lg"
          >
            {Object.values(project.carousel).map((src, i) => (
              <SwiperSlide key={i}>
                <img
                  src={src}
                  alt={`Screenshot ${i + 1}`}
                  className="rounded-xl shadow w-full object-cover aspect-[2048/925]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <Card>
          <SectionTitle>Project Overview</SectionTitle>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            {project.overview.description}
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            {project.overview.description2}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8">
            <div>
              <SubTitle>Challenge</SubTitle>
              <p className="text-gray-700">{project.overview.challenge}</p>
            </div>
            <div>
              <SubTitle>Goal</SubTitle>
              <p className="text-gray-700">{project.overview.goal}</p>
            </div>
          </div>
        </Card>

        <section>
          <SectionTitle>Research</SectionTitle>
          {Object.values(project.research.methods).map((method, idx) => (
            <div key={idx} className="mb-10 space-y-4 ">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#2f4e3b] mb-4">
                {method.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {Object.values(method).map((stat, i) => {
                  if (typeof stat !== "object") return null;
                  return (
                    <div key={i} className="space-y-3">
                      <p className="font-semibold text-lg text-gray-900">
                        💡 {stat.findings}
                      </p>
                      <blockquote className="italic text-base text-gray-500 border-l-2 border-gray-200 pl-3">
                        {stat.evidence}
                      </blockquote>
                      <p className="text-base leading-relaxed text-gray-700">
                        <span className="font-medium text-[#2f4e3b]">
                          Relevance:{" "}
                        </span>
                        {stat.relevance}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </section>

        <section>
          <SectionTitle>Ideation</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-5">
            <img
              src={project.ideation.phase1.graph}
              alt="Phase 1"
              className="rounded-lg shadow-lg"
            />
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              {project.ideation.phase1.process}
            </p>
          </div>
        </section>

        <section>
          <SectionTitle>Design Process</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              {project.design_process.phase1.summary}
            </p>
            <div>
              <img
                src={project.design_process.phase1.graphic}
                alt="Design Graphic"
                className="rounded-lg shadow-lg"
              />
              <p className="text sm text-gray-500 mt-8">{project.design_process.phase1.caption}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center pt-12">
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              {project.design_process.phase2.summary}
            </p>
            <img
              src={project.design_process.phase2.graphic}
              alt="Phase 2"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="pt-12">
          <SectionTitle> Mid Fidelity Wireframes</SectionTitle>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            className="rounded-xl shadow-lg"
          >
            {Object.values(project.design_process.wireframes).map((src, i) => (
              <SwiperSlide key={i}>
                <img
                  src={src}
                  alt={`Wireframe ${i + 1}`}
                  className="rounded-xl shadow w-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          </div>
        </section>

        <Card>
          <SectionTitle>Final Solution Showcase</SectionTitle>
          <video
            src={project.final.video}
            controls
            className="w-full rounded-xl shadow object-contain"
          />
        </Card>

        <section>
          <SectionTitle>Reflection</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <SubTitle>What We Learned</SubTitle>
              <p className="leading-relaxed">{project.reflection.learned}</p>
            </div>
            <div>
              <SubTitle>Improvements</SubTitle>
              <p className="leading-relaxed">{project.reflection.improvements}</p>
            </div>
            <div>
              <SubTitle>Future Directions</SubTitle>
              <p className="leading-relaxed">{project.reflection.future}</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
