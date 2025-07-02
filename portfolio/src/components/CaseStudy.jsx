import { useParams } from "react-router-dom";
import projectData from "../data/projects.json";
import { useEffect, useState } from "react";

const Card = ({ children }) => (
  <div className="bg-[#132d1f] border border-[#2f4e3b] rounded-2xl shadow-lg p-6 sm:p-10 space-y-10">
    {children}
  </div>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-2xl sm:text-3xl font-bold text-[#9dd8ae]">{children}</h2>
);

const SubTitle = ({ children, className = "" }) => (
  <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${className}`}>{children}</h3>
);

const OverviewDetails = ({ details }) => (
  <div className="flex flex-col justify-center gap-16 text-stone-50 pl-2 md:pl-10 h-full">
    {Object.entries(details).map(([label, value]) => (
      <div className="flex gap-4" key={label}>
        <span className="font-medium text-zinc-100 w-[90px] capitalize">{label}</span>
        <span className="flex-1">{value}</span>
      </div>
    ))}
  </div>
);

const SectionWrapper = ({ title, children, noCard = false }) => {
  const content = (
    <div className="space-y-4">
      <SectionTitle>{title}</SectionTitle>
      {children}
    </div>
  );
  return noCard ? content : <Card>{content}</Card>;
};

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projectData.find(p => p.slug.toLowerCase() === slug.toLowerCase());
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!project) {
    return <div className="text-white p-4">Project not found.</div>;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 text-zinc-100 space-y-12">
      <div className="text-center space-y-6 mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">{project.hero.title}</h1>
        <p className="text-base sm:text-lg text-stone-50 max-w-2xl mx-auto py-1.5">{project.hero.subtitle}</p>
      </div>

      {project.overview && (
        <Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-10">
              <div className="space-y-4">
                <SubTitle className="text-[#9dd8ae]">Overview</SubTitle>
                <p className="text-stone-50">{project.overview.problem}</p>
                <p className="text-stone-50">{project.overview.intro}</p>
              </div>
              <div>
                <SubTitle>Goals</SubTitle>
                <ul className="list-disc pl-5 text-stone-50 space-y-1">
                  {Object.values(project.overview.goals).map((goal, index) => (
                    <li key={index} className="leading-relaxed">{goal}</li>
                  ))}
                </ul>
              </div>
            </div>
            <OverviewDetails details={project.overview.details} />
          </div>
        </Card>
      )}

      <div className="pt-6">
        <h3 className="text-2xl sm:text-3xl font-semibold text-[#9dd8ae] mb-6">Final Designs</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Object.keys(project.photos).map((key) => (
            <img
              key={key}
              src={`/${project.photos[key]}`}
              alt={`Screenshot ${key}`}
              onClick={() => setSelectedImage(`/${project.photos[key]}`)}
              className="rounded-xl shadow-lg w-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
            />
          ))}
        </div>
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Enlarged"
              className="w-[95%] h-auto max-h-[90vh] rounded-lg shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>

      {project.exploration && (
        <SectionWrapper title="Exploration & Discovery">
          <p className="text-stone-50 max-w-4xl leading-relaxed text-base sm:text-lg">
            {project.exploration.research_summary}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {Object.values(project.exploration.methods).map((method, idx) => (
              <div key={idx} className="space-y-2">
                <SubTitle>{method.title}</SubTitle>
                <ul className="list-disc pl-5 text-stone-50 space-y-1">
                  {method.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionWrapper>
      )}

      {project.design_process && (
        <SectionWrapper title="Design Process" noCard>
          <p className="text-stone-50 max-w-5xl leading-relaxed text-base sm:text-lg">
            {project.design_process.intro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {Object.values(project.design_process.phases).map((phase, idx, arr) => {
              const isLast = idx === arr.length - 1;
              const isOdd = arr.length % 2 !== 0;
              return (
                <div
                  key={idx}
                  className={`bg-[#132d1f] border border-[#2f4e3b] rounded-xl p-6 space-y-4 shadow ${
                    isLast && isOdd ? "md:col-span-2 md:max-w-3xl md:mx-auto" : ""
                  }`}
                >
                  <h3 className="text-xl font-bold text-zinc-100">{phase.title}</h3>
                  <p className="text-stone-50">{phase.summary}</p>
                  <div className="text-stone-50 space-y-1">
                    <p><span className="text-[#9dd8ae] font-semibold">What we wanted to achieve:</span> {phase.goal}</p>
                    <p><span className="text-[#9dd8ae] font-semibold">How it contributed:</span> {phase.contribution}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </SectionWrapper>
      )}

      {project.final_design && (
        <SectionWrapper title="Final Design & Solution">
          <p className="text-stone-50 max-w-4xl leading-relaxed text-base sm:text-lg">
            {project.final_design.summary}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-2">
              <SubTitle>Why this solution</SubTitle>
              <ul className="list-disc pl-5 text-stone-50 space-y-1">
                {project.final_design.why_this_solution.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <SubTitle>Alternatives considered</SubTitle>
              <ul className="list-disc pl-5 text-stone-50 space-y-1">
                {project.final_design.alternatives_considered.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-2">
            <SubTitle>Visual Highlights</SubTitle>
            <ul className="list-disc pl-5 text-stone-50 space-y-1">
              {project.final_design.visuals.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </SectionWrapper>
      )}

      {project.impact_and_learnings && (
        <SectionWrapper title="Impact">
          <p className="text-stone-50 max-w-4xl leading-relaxed text-base sm:text-lg">
            {project.impact_and_learnings.impact.summary}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-2">
              <SubTitle>Quantifiable Outcomes</SubTitle>
              <ul className="list-disc pl-5 text-stone-50 space-y-1">
                {project.impact_and_learnings.impact.quantifiable.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <SubTitle>Qualitative Impact</SubTitle>
              <ul className="list-disc pl-5 text-stone-50 space-y-1">
                {project.impact_and_learnings.impact.qualitative.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </SectionWrapper>
      )}

      {project.impact_and_learnings && (
        <SectionWrapper title="Learnings">
          <p className="text-stone-50 max-w-4xl leading-relaxed text-base sm:text-lg">
            {project.impact_and_learnings.learnings.summary}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-2">
              <SubTitle>Key Takeaways</SubTitle>
              <ul className="list-disc pl-5 text-stone-50 space-y-1">
                {project.impact_and_learnings.learnings.takeaways.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <SubTitle>What We’d Do Differently</SubTitle>
              <ul className="list-disc pl-5 text-stone-50 space-y-1">
                {project.impact_and_learnings.learnings.what_we_would_change.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-2">
            <SubTitle>Jobs to Be Done</SubTitle>
            <ul className="list-disc pl-5 text-stone-50 space-y-1">
              {project.impact_and_learnings.learnings.jobs_to_be_done.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </SectionWrapper>
      )}
    </section>
  );
}
