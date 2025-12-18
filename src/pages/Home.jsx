import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import image from "../assets/profile.jpg";
function Home() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-cyan-400">Shah Husain</span>
          </h1>

          <h2 className="mt-4 text-xl md:text-2xl text-gray-300">
            Full Stack Developer (MERN)
          </h2>

          <p className="mt-6 text-gray-400 max-w-xl leading-relaxed">
            I build MERN Full Stack web applications, I focused on clean UI,
            responsive design and real-world features like authentication,
            dashboards and API integration.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="px-6 py-3 bg-cyan-400 text-black rounded-lg font-medium hover:bg-cyan-300 transition"
            >
              View Projects
            </Link>

            <a
              href="/Resume.pdf"
              download
              className="px-6 py-3 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
            >
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex gap-6 text-gray-400">
            <Link
              to="https://github.com/shah-786-husain"
              target="_blank"
              className="hover:text-cyan-400 transition"
            >
              GitHub
            </Link>
            <Link
              to="https://www.linkedin.com/in/shah-husain-555345206"
              target="_blank"
              className="hover:text-cyan-400 transition"
            >
              LinkedIn
            </Link>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex justify-center"
        >
          <div className="relative">
            <div className="w-50 h-50 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center  z-10 relative">
              <img
                src={image}
                className="w-50 h-50 rounded-full  border border-gray-700 flex items-center justify-center "
                alt="profile-pic"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default Home;
