import { motion } from 'motion/react';
import { User, Lock, Edit3 } from 'lucide-react';

export default function UserDashboard() {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-10 pt-32 max-w-4xl mx-auto space-y-12">
      <h1 className="text-3xl text-white font-extralight uppercase tracking-[4px]">Mi Perfil</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass-card p-8 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <User size={40} className="text-[#c79b72]" />
            </div>
            <button className="text-[12px] text-[#c79b72] flex items-center gap-2 uppercase tracking-[1px]"><Edit3 size={14}/> Cambiar foto</button>
        </div>
        <div className="glass-card p-8 space-y-4">
            <input type="text" defaultValue="Usuario" className="w-full bg-transparent border-b border-[#986946] p-2 text-white" />
            <input type="email" defaultValue="usuario@email.com" className="w-full bg-transparent border-b border-[#986946] p-2 text-white" />
            <button className="text-[12px] text-[#c79b72] flex items-center gap-2 uppercase tracking-[1px]"><Lock size={14}/> Cambiar contraseña</button>
        </div>
      </div>
    </motion.section>
  );
}
