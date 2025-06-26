import projectData from "../data/projects.json";

export default function Projects() {
  return (
    <section className="max-w-3xl">
      <h2 className="text-xl font-semibold text-white mb-6">Projects</h2>
      <div className="space-y-4">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="p-4 border border-[#4e644d] rounded-md"
          >
            <h3 className="text-lg font-bold">{project.name}</h3>
            <p className="text-[#9fb69b]">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
