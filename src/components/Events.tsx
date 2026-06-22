import { motion } from 'motion/react';
import { mockEvents } from '../data';
import { BlogEvent } from '../types';

export default function Events({ onSelectEvent }: { onSelectEvent: (event: BlogEvent) => void }) {
  return (
    <section className="p-10 pb-24">
      <h2 className="text-[14px] text-[#c79b72] font-extralight uppercase tracking-[4px] text-center mb-16">Eventos Exclusivos</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {mockEvents.map((event) => (
          <motion.div key={event.id} whileHover={{ y: -10 }} onClick={() => onSelectEvent(event)} className="glass-card cursor-pointer">
            <div className="relative overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-[12px] text-[#c79b72] font-extralight uppercase tracking-[2px] mb-2">{event.title}</h3>
              <p className="text-[12px] text-white/60">{event.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
