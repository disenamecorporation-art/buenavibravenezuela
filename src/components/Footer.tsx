import { Instagram, Music, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="p-20 bg-white/[0.01] border-t border-[#c79b72]/20 text-center space-y-12">
      <img src="https://i.postimg.cc/Wb1YC685/IMAGOTIPO-BUENAVIBRA-WEB.png" alt="Buena Vibra Logo" className="h-16 mx-auto opacity-70 hover:opacity-100 transition" />
      
      <div className="grid md:grid-cols-4 gap-10 text-[11px] tracking-[0.5px] uppercase text-white/60">
        <div className="space-y-4">
          <h4 className="text-[#c79b72]">Comunidad</h4>
          <p>Misión</p>
          <p>Visión</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-[#c79b72]">Club</h4>
          <p>Eventos</p>
          <p>Networking</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-[#c79b72]">Contacto</h4>
          <div className="flex justify-center items-center gap-2"><Phone size={14}/> +58 424 1969727</div>
          <div className="flex justify-center items-center gap-2"><Mail size={14}/> info@buenavibra.com</div>
        </div>
        <div className="space-y-4">
          <h4 className="text-[#c79b72]">Redes</h4>
          <div className="flex justify-center items-center gap-2"><Instagram size={14}/> @buenavibravzlaclub</div>
          <div className="flex justify-center items-center gap-2"><Music size={14}/> TikTok: buenavibra</div>
        </div>
      </div>
      
      <p className="text-[10px] text-white/30 uppercase tracking-[1px]">Buena Vibra Venezuela © 2026 - Conectando Realidades</p>
    </footer>
  );
}
