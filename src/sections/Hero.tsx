import { motion } from 'framer-motion';
import { Code2, Briefcase, FileText, ChevronDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-slate-950 px-4 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 text-center max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-100 tracking-tight mb-4">
          OMAR YESID <br className="hidden md:block" />
          <span className="text-blue-500">FONSECA QUIROGA</span>
        </h1>
        
        <h2 className="text-xl md:text-3xl font-semibold text-slate-400 mb-8 tracking-wide">
          BACKEND & FULL STACK <span className="text-slate-600 mx-2">|</span> DATA & AUTOMATION
        </h2>
        
        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Transformo necesidades operativas en soluciones tecnológicas mantenibles y escalables. 
          Especializado en automatización con Python, desarrollo de APIs RESTful y arquitectura de datos 
          orientada a métricas de negocio.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          <a href="#proyectos" className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center gap-2">
            Explorar Proyectos <ChevronDown size={20} />
          </a>
          
          <div className="flex gap-4">
            <a href="https://github.com/omar-fonseca" target="_blank" rel="noreferrer" className="p-3 bg-slate-800/50 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors border border-slate-700 hover:border-slate-500">
              <Code2 size={24} />
            </a>
            <a href="https://linkedin.com/in/omarfonseca" target="_blank" rel="noreferrer" className="p-3 bg-slate-800/50 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors border border-slate-700 hover:border-slate-500">
              <Briefcase size={24} />
            </a>
            <a href="/Omar_Fonseca_CV_Backend_Engineer_2026.pdf" target="_blank" rel="noreferrer" className="p-3 bg-slate-800/50 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors border border-slate-700 hover:border-slate-500">
              <FileText size={24} />
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="absolute bottom-8 w-full border-y border-slate-800/50 py-4 bg-slate-900/30 backdrop-blur-md"
      >
        <div className="flex justify-center flex-wrap gap-6 md:gap-12 text-slate-500 font-mono text-xs md:text-sm uppercase tracking-widest">
          <span>React</span>
          <span>Node.js</span>
          <span>Python</span>
          <span>MongoDB</span>
          <span>Power BI</span>
          <span>SQL</span>
        </div>
      </motion.div>
    </section>
  );
};