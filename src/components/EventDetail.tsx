import { motion } from 'motion/react';
import { BlogEvent } from '../types';

export default function EventDetail({ event, onBack }: { event: BlogEvent; onBack: () => void }) {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-10 pt-24 max-w-4xl mx-auto space-y-8">
      <button onClick={onBack} className="text-[#c79b72] hover:text-white uppercase tracking-[2px] text-[12px]">&larr; Volver a Eventos</button>
      <img src={event.image} alt={event.title} className="w-full h-96 object-cover rounded-3xl" />
      <h1 className="text-4xl font-extralight text-white uppercase tracking-[4px]">{event.title}</h1>
      <p className="text-white/70 leading-relaxed text-[16px] font-extralight">{event.fullContent}</p>
    </motion.section>
  );
}
