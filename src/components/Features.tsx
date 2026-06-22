import { motion } from 'motion/react';
import { Users, Zap, ShieldCheck, HeartPulse } from 'lucide-react';

const features = [
  { icon: Users, title: "Comunidad", text: "Conexión real y cara a cara." },
  { icon: Zap, title: "Sinergia", text: "Alianzas estratégicas." },
  { icon: ShieldCheck, title: "Valores", text: "Honestidad y respeto." },
  { icon: HeartPulse, title: "Bienestar", text: "Relaciones saludables." }
];

export default function Features() {
  return (
    <section className="p-10 -mt-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div key={i} whileHover={{ y: -5 }} className="glass-card p-8 flex flex-col items-center text-center">
            <div className="p-4 mb-4 rounded-2xl bg-gradient-to-br from-[#c79b72]/20 to-[#986946]/10 border border-[#c79b72]/30 shadow-inner">
               <f.icon className="w-8 h-8 text-[#c79b72]" />
            </div>
            <h3 className="text-[12px] text-[#c79b72] font-extralight uppercase tracking-[2px] mb-2">{f.title}</h3>
            <p className="text-[11px] text-white/60">{f.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
