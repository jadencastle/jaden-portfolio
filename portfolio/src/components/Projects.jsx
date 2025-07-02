import projectData from "../data/projects.json";

export default function Projects() {
  return (
    <section id="projects" className="max-w-3xl px-4 sm:px-0 mx-auto text-center lg:text-left">
      <h2 className="text-xl font-semibold text-white mb-6">Projects</h2>
      <div className="space-y-4">
        {projectData.map((project) => (
          <a
            key={project.id}
            href={`/projects/${project.slug.toLowerCase()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-6 p-4 rounded-md hover:bg-green-900 transition-transform duration-300 transform hover:scale-[1.01] focus:outline-none"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-24 h-24 object-cover rounded group-hover:border group-hover:border-[#9dd8ae]"
            />
            <div className="flex flex-col justify-center">
              <h3 className="text-base font-bold group-hover:text-white transition-colors duration-300 text-[#9dd8ae]">
                {project.name}
              </h3>
              <p className=" text-stone-200">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
