// src/sections/Hero.tsx
// JSDoc: Esta sección importa las herramientas externas que necesitamos.
// motion: El motor de Framer Motion que usaremos para animar las tarjetas e imágenes.
import { motion } from 'framer-motion';
// lucide-react: Una librería de íconos vectoriales SVG. Estamos trayendo los íconos específicos.
import { Github, Linkedin, FileText, ChevronDown } from 'lucide-react';

/**
 * Componente Hero
 * 
 * Esta es la primera pantalla que ve el usuario. Está diseñada con una arquitectura 
 * de altura completa (min-h-screen) y utiliza CSS Grid/Flexbox para centrar el contenido.
 * Implementa animaciones de entrada suaves usando aceleración de hardware (GPU) 
 * a través de Framer Motion para asegurar un rendimiento óptimo sin afectar la velocidad de carga.
 */
export const Hero = () => {
  return (
    // 'section': Etiqueta semántica de HTML5 que define una sección del documento.
    // Clases de Tailwind:
    // 'relative': Necesario para poder posicionar elementos absolutos dentro de esta sección (como las luces de fondo).
    // 'min-h-screen': Hace que la sección ocupe al menos el 100% del alto de la pantalla visible del usuario.
    // 'flex flex-col justify-center items-center': Usa Flexbox para alinear el contenido en el centro absoluto (vertical y horizontalmente).
    // 'bg-slate-950': Un color de fondo oscuro y muy elegante (Slate).
    // 'px-4': Añade un padding (espaciado interno) horizontal pequeño para que el texto no toque los bordes en celulares.
    // 'overflow-hidden': Oculta cualquier cosa que se salga de los límites de la sección (útil para nuestras luces borrosas de fondo).
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-slate-950 px-4 overflow-hidden">
      
      {/* 
        Efectos Visuales de Fondo (Background Glow)
        Estos div crean el efecto de "luces tecnológicas" desenfocadas detrás de ti. 
        'pointer-events-none' asegura que estas luces no interfieran si el usuario hace clic. 
      */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* 
        Contenedor Principal Animado (motion.div)
        Reemplazamos un 'div' normal por un 'motion.div' para darle propiedades de animación.
        initial: Estado inicial (invisible y ligeramente desplazado hacia abajo).
        animate: Estado final (totalmente visible y en su posición original).
        transition: Controla la velocidad (0.8 segundos) y la curva de aceleración de la animación.
      */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 text-center max-w-4xl" // z-10 asegura que el texto esté POR ENCIMA de las luces de fondo.
      >
        {/* Titular Principal */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-100 tracking-tight mb-4">
          OMAR YESID <br className="hidden md:block" />
          <span className="text-blue-500">FONSECA QUIROGA</span>
        </h1>
        
        {/* Subtítulo: Tu Enfoque Profesional */}
        <h2 className="text-xl md:text-3xl font-semibold text-slate-400 mb-8 tracking-wide">
          BACKEND & FULL STACK <span className="text-slate-600 mx-2">|</span> DATA & AUTOMATION
        </h2>
        
        {/* Resumen de Valor (Tu Propuesta) */}
        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Transformo necesidades operativas en soluciones tecnológicas mantenibles y escalables. 
          Especializado en automatización con Python, desarrollo de APIs RESTful y arquitectura de datos 
          orientada a métricas de negocio.
        </p>

        {/* 
          Barra de Acciones (Botones y Redes Sociales)
          Usamos Flexbox para organizar los botones en una fila, o en columna si es un teléfono.
        */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          {/* Botón Principal (Call to Action) */}
          <a href="#proyectos" className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center gap-2">
            Explorar Proyectos <ChevronDown size={20} />
          </a>
          
          {/* Contenedor de Íconos Sociales */}
          <div className="flex gap-4">
            {/* 
              Enlaces con 'target="_blank"' y 'rel="noreferrer"' por seguridad (evita vulnerabilidades 
              cuando el usuario abre una nueva pestaña a otra página). 
            */}
            <a href="https://github.com/omar-fonseca" target="_blank" rel="noreferrer" className="p-3 bg-slate-800/50 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors border border-slate-700 hover:border-slate-500">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/omarfonseca" target="_blank" rel="noreferrer" className="p-3 bg-slate-800/50 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors border border-slate-700 hover:border-slate-500">
              <Linkedin size={24} />
            </a>
            <a href="/Omar_Fonseca_CV_Backend_Engineer_2026.pdf" target="_blank" rel="noreferrer" className="p-3 bg-slate-800/50 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors border border-slate-700 hover:border-slate-500">
              <FileText size={24} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* 
        Ticker de Tecnologías (Barra inferior con animación de aparición retrasada)
      */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }} // Retrasamos la aparición para que no se mezcle con el texto de arriba.
        className="absolute bottom-8 w-full border-y border-slate-800/50 py-4 bg-slate-900/30 backdrop-blur-md"
      >
        <div className="flex justify-center flex-wrap gap-6 md:gap-12 text-slate-500 font-mono text-xs md:text-sm uppercase tracking-widest">
          {/* Aquí inyectamos tu stack principal demostrado */}
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