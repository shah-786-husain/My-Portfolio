import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

function Projects() {
  return (
    <section className="py-20 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-cyan-400 mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition"
          >
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="text-gray-400 mt-2">{p.desc}</p>
            <Link
              to={p.link}
              target="_blank"
              className="inline-block mt-4 text-cyan-400"
            >
              Live Demo →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
