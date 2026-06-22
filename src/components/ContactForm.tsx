import { motion } from 'motion/react';

export default function ContactForm() {
  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="glass-card w-full p-2">
        <form className="p-10 space-y-6">
          <h2 className="text-[12px] text-[#c79b72] font-extralight uppercase tracking-[2px] text-center mb-8">Contacto Exclusivo</h2>
          <input type="text" placeholder="NOMBRE COMPLETO" className="w-full bg-transparent border-b border-[#986946] p-2 text-white font-extralight text-[12px] focus:outline-none focus:border-[#c79b72]" />
          <input type="email" placeholder="CORREO ELECTRÓNICO" className="w-full bg-transparent border-b border-[#986946] p-2 text-white font-extralight text-[12px] focus:outline-none focus:border-[#c79b72]" />
          <textarea placeholder="MENSAJE" className="w-full bg-transparent border-b border-[#986946] p-2 text-white font-extralight text-[12px] focus:outline-none focus:border-[#c79b72] h-20 resize-none" />
          <button type="button" className="w-full mt-4 bg-gradient-to-r from-[#c79b72] to-[#986946] text-black font-normal text-[10px] py-3 uppercase tracking-[2px] rounded-[4px] hover:opacity-90 transition">Enviar Solicitud</button>
        </form>
      </div>
    </div>
  );
}
