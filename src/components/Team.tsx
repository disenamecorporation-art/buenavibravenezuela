import { motion } from 'motion/react';

const team = [
  { name: "Andrés García", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300" },
  { name: "María Rodríguez", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300" },
  { name: "Carlos Pérez", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300" }
];

export default function Team() {
  return (
    <section className="p-10 pb-24">
        <h2 className="text-[14px] text-[#c79b72] font-extralight uppercase tracking-[4px] text-center mb-16">Nuestro Equipo</h2>
        <div className="flex flex-wrap justify-center gap-16">
            {team.map((member, i) => (
                <motion.div key={i} className="flex flex-col items-center gap-6">
                    <motion.div 
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        className="p-1 rounded-full bg-gradient-to-br from-[#c79b72] to-[#986946] shadow-[0_0_20px_rgba(199,155,114,0.3)]"
                    >
                        <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full object-cover border-4 border-black" />
                    </motion.div>
                    <p className="text-[12px] uppercase tracking-[3px] text-white/80 font-extralight">{member.name}</p>
                </motion.div>
            ))}
        </div>
    </section>
  )
}
