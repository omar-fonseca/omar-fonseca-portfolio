import { motion } from 'framer-motion';
import { Code2, ExternalLink, Activity } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="bg-slate-900 border border-slate-800 rounded-xl p-6 md:p-8 flex flex-col h-full shadow-lg hover:shadow-blue-900/20"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-slate-100">{project.title}</h3>
        
        <div className="flex gap-3">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Code2 size={20} />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      <h4 className="text-blue-500 font-semibold mb-4 uppercase tracking-wider text-sm">{project.role}</h4>
      <p className="text-slate-400 mb-6 grow leading-relaxed">
        {project.description}
      </p>

      {project.metrics && (
        <div className="mb-6 p-3 bg-blue-950/30 border border-blue-900/50 rounded-lg flex items-start gap-3 text-slate-300 text-sm">
          <Activity size={18} className="text-blue-500 mt-0.5 shrink-0" />
          <p>{project.metrics}</p>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.technologies.map((tech, index) => (
          <span 
            key={index} 
            className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-mono rounded-full border border-slate-700"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};