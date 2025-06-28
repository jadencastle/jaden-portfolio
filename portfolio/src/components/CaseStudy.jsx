import { useParams } from "react-router-dom";
import projectData from "../data/projects.json";

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projectData.find(p => p.slug.toLowerCase() === slug.toLowerCase());

  if (!project) {
    return <div className="text-white p-4">Project not found.</div>;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 text-white space-y-12">

      {/* Hero Section */}
      <div className="text-center space-y-2 mb-12">
        <h1 className="text-4xl font-bold">{project.hero.title}</h1>
        <p className="text-lg text-[#9fb69b] max-w-2xl mx-auto py-1.5">{project.hero.subtitle}</p>
      </div>

      {/* Overview Section */}
      {project.overview && (
        <section className="space-y-12">
          <div className="bg-[#1f2a1f] border border-[#3a4f3a] rounded-2xl shadow-lg p-10">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* LEFT: Overview Content */}
              <div className="space-y-10">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Overview</h3>
                  <p className="text-[#9fb69b]">{project.overview.problem}</p>
                  <p className="text-[#9fb69b]">{project.overview.intro}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Goals</h3>
                  <ul className="list-disc pl-5 text-[#9fb69b] space-y-1">
                    {Object.values(project.overview.goals).map((goal, index) => (
                      <li key={index} className="leading-relaxed">{goal}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* RIGHT: Details Summary */}
              <div className="flex flex-col justify-center gap-16 text-[#9fb69b] pl-10 h-full">
                {[
                  ["Role", project.overview.details.role],
                  ["Tasks", project.overview.details.tasks],
                  ["Scope", project.overview.details.scope],
                  ["Tools", project.overview.details.tools]
                ].map(([label, value]) => (
                  <div className="flex gap-4" key={label}>
                    <span className="font-medium text-white w-[90px]">{label}</span>
                    <span className="flex-1">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Exploration & Discovery */}
      {project.exploration && (
        <section className="space-y-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Exploration & Discovery</h2>
              <p className="text-[#9fb69b] max-w-4xl leading-relaxed">
                {project.exploration.research_summary}
              </p>
            </div>

            {/* Grid of Methods */}
            <div className="grid md:grid-cols-2 gap-10">
              {Object.values(project.exploration.methods).map((method, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-lg font-semibold text-white">{method.title}</h3>
                  <ul className="list-disc pl-5 text-[#9fb69b] space-y-1">
                    {method.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Design Process */}
      {project.design_process && (
        <section className="space-y-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Design Process</h2>
              <p className="text-[#9fb69b] max-w-5xl leading-relaxed">
                {project.design_process.intro}
              </p>
            </div>

<div className="grid md:grid-cols-2 gap-10">
  {Object.values(project.design_process.phases).map((phase, idx, arr) => {
    const isLast = idx === arr.length - 1;
    const isOddCount = arr.length % 2 !== 0;

    return (
      <div
        key={idx}
        className={`bg-[#1f2a1f] border border-[#3a4f3a] rounded-xl p-6 space-y-4 shadow ${
          isLast && isOddCount ? "md:col-span-2 md-max-w-3x1 md:mx-auto" : ""
        }`}
      >
        <h3 className="text-xl font-semibold text-white">{phase.title}</h3>
        <p className="text-[#9fb69b]">{phase.summary}</p>
        <div className="text-[#9fb69b] space-y-1">
          <p><span className="text-white font-medium">What we wanted to achieve:</span> {phase.goal}</p>
          <p><span className="text-white font-medium">How it contributed:</span> {phase.contribution}</p>
        </div>
      </div>
    );
  })}
</div>
{project.final_design && (
  <section className="space-y-12">
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Final Design & Solution</h2>
        <p className="text-[#9fb69b] max-w-4xl leading-relaxed">
          {project.final_design.summary}
        </p>
      </div>

      {/* Why this solution */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-white">Why this solution</h3>
        <ul className="list-disc pl-5 text-[#9fb69b] space-y-1">
          {project.final_design.why_this_solution.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>

      {/* Alternatives considered */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-white">Alternatives considered</h3>
        <ul className="list-disc pl-5 text-[#9fb69b] space-y-1">
          {project.final_design.alternatives_considered.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Visuals */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-white">Visual Highlights</h3>
        <ul className="list-disc pl-5 text-[#9fb69b] space-y-1">
          {project.final_design.visuals.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
)}
{project.impact_and_learnings && (
  <section className="space-y-12">
    {/* Impact Section */}
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Impact</h2>
        <p className="text-[#9fb69b] max-w-4xl leading-relaxed">
          {project.impact_and_learnings.impact.summary}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Quantifiable Outcomes</h3>
          <ul className="list-disc pl-5 text-[#9fb69b] space-y-1">
            {project.impact_and_learnings.impact.quantifiable.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Qualitative Impact</h3>
          <ul className="list-disc pl-5 text-[#9fb69b] space-y-1">
            {project.impact_and_learnings.impact.qualitative.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* Learnings Section */}
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Learnings</h2>
        <p className="text-[#9fb69b] max-w-4xl leading-relaxed">
          {project.impact_and_learnings.learnings.summary}
        </p>
      </div>

      {/* Key Takeaways */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-white">Key Takeaways</h3>
        <ul className="list-disc pl-5 text-[#9fb69b] space-y-1">
          {project.impact_and_learnings.learnings.takeaways.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* What We'd Do Differently */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-white">What We’d Do Differently</h3>
        <ul className="list-disc pl-5 text-[#9fb69b] space-y-1">
          {project.impact_and_learnings.learnings.what_we_would_change.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Jobs to Be Done */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-white">Jobs to Be Done</h3>
        <ul className="list-disc pl-5 text-[#9fb69b] space-y-1">
          {project.impact_and_learnings.learnings.jobs_to_be_done.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
)}


          </div>
        </section>
      )}

    </section>
  );
}
