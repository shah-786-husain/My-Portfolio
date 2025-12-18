const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "REST APIs",
  "JWT Authentication",
  "MongoDB",
  "NoSQL",
  "Basic SQL",
  "Tailwind CSS",
  "Bootstrap",
  "Git & GitHub",
  "Postman",
  "VS Code",
  "MS Office",
];

function Skills() {
  return (
    <section className="py-20 bg-gray-800">
      <h2 className="text-3xl font-bold text-center text-cyan-400 mb-10">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-5 py-2 bg-gray-700 rounded-full hover:bg-cyan-400 hover:text-black transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
export default Skills;
