export default function Navbar({ setView, onOpenAuth }: { setView: (view: string) => void; onOpenAuth: () => void }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-10 h-[70px] flex justify-between items-center bg-black/50 backdrop-blur-sm border-b border-[#c79b72]/20">
      <img src="https://i.postimg.cc/Wb1YC685/IMAGOTIPO-BUENAVIBRA-WEB.png" alt="Buena Vibra Logo" className="h-10" />
      <div className="flex gap-8 text-[11px] uppercase tracking-[2px]">
        <button onClick={() => setView('home')} className="gradient-text transition">Inicio</button>
        <button onClick={() => setView('events')} className="hover:text-white transition uppercase tracking-[2px]">Eventos</button>
        <button onClick={onOpenAuth} className="hover:text-white transition uppercase tracking-[2px] text-[#c79b72]">Entrar/Registro</button>
        <button onClick={() => setView('contacto')} className="hover:text-white transition uppercase tracking-[2px] border border-[#c79b72] px-3 py-1 rounded-full text-[#c79b72]">Contacto</button>
      </div>
    </nav>
  );
}
