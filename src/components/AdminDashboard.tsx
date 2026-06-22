import { motion } from 'motion/react';
import { PlusCircle } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-10 pt-32 max-w-4xl mx-auto space-y-12">
      <h1 className="text-3xl text-white font-extralight uppercase tracking-[4px]">Panel Admin</h1>
      <div className="glass-card p-10 space-y-6">
        <h2 className="text-[14px] text-[#c79b72] font-extralight uppercase tracking-[2px]">Añadir Nuevo Evento</h2>
        <input type="text" placeholder="Título del evento" className="w-full bg-transparent border-b border-[#986946] p-2 text-white" />
        <input type="text" placeholder="Enlace de foto" className="w-full bg-transparent border-b border-[#986946] p-2 text-white" />
        <textarea placeholder="Descripción" className="w-full bg-transparent border-b border-[#986946] p-2 text-white h-24" />
        <input type="text" placeholder="Enlace del video" className="w-full bg-transparent border-b border-[#986946] p-2 text-white" />
        <button className="bg-gradient-to-r from-[#c79b72] to-[#986946] text-black px-8 py-3 rounded-full font-normal tracking-[2px] uppercase text-[12px] flex items-center gap-2">
            <PlusCircle size={16}/> Añadir Evento
        </button>
      </div>
    </motion.section>
  );
}
