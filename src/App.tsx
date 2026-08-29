import { Hero } from './sections/Hero';
import { ProjectsSection } from './sections/ProjectsSection';

function App() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-200 selection:bg-blue-500/30 font-sans">
      <Hero />
      <ProjectsSection />
    </main>
  );
}

export default App;