// Importamos el componente Hero que acabamos de crear
import { Hero } from './sections/Hero';

function App() {
  return (
    // Nuestro contenedor principal de la aplicación.
    // Aquí definimos el estilo global de texto, fuente y selección de color.
    <main className="bg-slate-950 min-h-screen text-slate-200 selection:bg-blue-500/30 font-sans">
      
      {/* Renderizamos la sección Hero */}
      <Hero />
      
    </main>
  );
}

export default App;