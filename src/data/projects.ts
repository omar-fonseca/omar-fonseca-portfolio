export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  metrics?: string;
}

export const projects: Project[] = [
  {
    id: "gas-station-erp",
    title: "Sistema de Gestión Integral para Estación de Servicio",
    role: "Full Stack Developer",
    description: "Plataforma orientada a la operación real de una estación de servicio. Gestiona usuarios, turnos, inventarios, ventas y cierres. Backend estructurado con enfoque DDD-Lite y separación de controladores y servicios.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Docker"],
    githubUrl: "https://github.com/omar-fonseca", 
    metrics: "Pipeline CI/CD y pruebas con Jest integradas"
  },
  {
    id: "quant-engine",
    title: "QuantEngineAnalytics & Motor Predictivo",
    role: "Backend Architect & Data Engineer",
    description: "Arquitectura core del backend para análisis regulatorio y económico. Implementación estricta de contratos de dominio (DDD) y un sistema centralizado de manejo de excepciones para alta resiliencia.",
    technologies: ["Python", "Pydantic", "SQL", "Clean Architecture"],
    githubUrl: "https://github.com/omar-fonseca"
  },
  {
    id: "data-automation",
    title: "Pipelines de Datos y Automatización Operativa",
    role: "Data Analyst & Automation",
    description: "Desarrollo de scripts para extracción, limpieza y consolidación de información desde bases de datos hacia Excel y Power BI, impactando directamente la toma de decisiones gerenciales en tiempo real.",
    technologies: ["Python", "Pandas", "Power BI", "Excel Avanzado", "SQL"],
    metrics: "Reducción del 35% en tiempos de entrega de reportes y 30% en carga manual"
  }
];