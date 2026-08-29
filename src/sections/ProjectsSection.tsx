import { motion } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';

export const ProjectsSection = () => {
  return (
    <section id="proyectos" className="min-h-screen bg-slate-950 py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-4 tracking-tight">
            Ingeniería de <span className="text-blue-500">Software & Datos</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((proyecto) => (
            <motion.div
              key={proyecto.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard project={proyecto} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};