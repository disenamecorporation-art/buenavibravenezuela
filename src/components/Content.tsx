import { motion } from 'motion/react';
import { Heart, Brain, Music, Sparkles } from 'lucide-react';

const objectives = [
  "Fomentar la Conexión Real: Promover el encuentro presencial y cara a cara, inspirando a las personas a dejar las pantallas para recuperar la calidez de las interacciones humanas y auténticas.",
  "Impulsar la Sinergia Profesional: Crear espacios dinámicos de networking que estimulen el crecimiento mutuo, las alianzas estratégicas y el desarrollo comercial entre profesionales, emprendedores y comerciantes.",
  "Consolidar Altos Valores: Fundamentar cada una de las actividades del club en la honestidad, el respeto, la empatía y la buena convivencia como pilares esenciales de nuestra comunidad.",
  "Activar la Solidaridad: Transformar el disfrute, la recreación y los momentos compartidos en acciones concretas de apoyo colectivo y beneficio social para nuestro entorno.",
  "Inspirar Relaciones Sanas: Brindar espacios propicios para que las personas conecten desde la madurez, el respeto y la compatibilidad, promoviendo la construcción de parejas estables y vínculos afectivos saludables."
];

export default function Content({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <div className="p-10 space-y-24">
      {/* Misión y Visión */}
      <section className="grid md:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="glass-card p-10">
          <h2 className="text-[14px] text-[#c79b72] font-extralight uppercase tracking-[4px] mb-8">Nuestra Misión</h2>
          <p className="text-[14px] font-extralight leading-relaxed text-white/80">
            "Impulsar una comunidad sólida de profesionales, emprendedores y comerciantes de altos valores, inspirándolos a dejar las pantallas para reconectarse de manera humana y presencial. A través de experiencias culturales, comerciales y recreativas, transformamos la 'buena vibra' en solidaridad, sinergia profesional y un profundo sentido de pertenencia; demostrando que la empatía, el disfrute y la colaboración activa son los motores para construir un futuro más unido."
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-10">
          <h2 className="text-[14px] text-[#c79b72] font-extralight uppercase tracking-[4px] mb-8">Nuestra Visión</h2>
          <p className="text-[14px] font-extralight leading-relaxed text-white/80">
            "Consolidarnos como un vibrante club social y profesional que fusiona el crecimiento y la colaboración con la alegría de la cultura caribeña. Nos vemos como un catalizador de proyectos extraordinarios y momentos inolvidables, donde la buena música y el espíritu emprendedor abren paso a lo más importante: la cultura del encuentro cara a cara, donde nacen las grandes amistades y se consolidan parejas estables."
          </p>
        </motion.div>
      </section>

      {/* Video Content */}
      <section className="grid md:grid-cols-2 gap-12 items-center glass-card p-10">
        <div className="aspect-video">
          <iframe 
            className="w-full h-full rounded-2xl" 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="Video Promocional" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
        <div className="space-y-6">
          <h2 className="text-[14px] text-[#c79b72] font-extralight uppercase tracking-[4px]">Nuestra Esencia</h2>
          <p className="text-[14px] font-extralight leading-relaxed text-white/80">
            "Descubre cómo transformamos la 'buena vibra' en acciones concretas. En Buena Vibra Venezuela, cada encuentro es una oportunidad para crecer, conectar y celebrar la vida desde la autenticidad."
          </p>
        </div>
      </section>

      {/* Pilares */}
      <section className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Mente/Negocios", text: "Colaboración, crecimiento, proyectos extraordinarios.", icon: Brain },
          { title: "Cuerpo/Disfrute", text: "Buena música, celebración, energía caribeña.", icon: Music },
          { title: "Corazón/Alma", text: "Amistades y parejas estables.", icon: Heart }
        ].map((item, i) => (
          <motion.div key={i} className="glass-card p-8 flex flex-col h-full">
            <item.icon className="w-10 h-10 text-[#c79b72] mb-6" />
            <h3 className="text-[12px] text-[#c79b72] font-extralight uppercase tracking-[2px] mb-4">{item.title}</h3>
            <p className="font-extralight text-[12px] text-white/70 leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </section>

      {/* Objetivos */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="glass-card p-12">
        <h2 className="text-[14px] text-[#c79b72] font-extralight uppercase tracking-[4px] text-center mb-12">Objetivos del Club</h2>
        <ul className="grid md:grid-cols-1 gap-6">
          {objectives.map((obj, i) => (
            <li key={i} className="flex gap-4 items-start font-extralight text-[13px] text-white/80 hover:text-white transition-colors">
              <Sparkles className="text-[#c79b72] w-5 h-5 flex-shrink-0 mt-0.5" />
              {obj}
            </li>
          ))}
        </ul>
      </motion.section>
      
      {/* Large CTA Section */}
      <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="glass-card p-16 text-center space-y-8 bg-gradient-to-tr from-[#986946]/10 to-black">
        <h2 className="text-[20px] text-white font-thin uppercase tracking-[6px]">¿Listo para formar parte?</h2>
        <p className="text-[14px] text-white/70 font-extralight">Únete hoy a la comunidad más vibrante de profesionales y emprendedores de Venezuela.</p>
        <button onClick={onOpenContact} className="bg-gradient-to-r from-[#c79b72] to-[#986946] text-black px-12 py-4 rounded-full font-normal tracking-[2px] uppercase text-[12px] hover:scale-105 transition">
          Únete al Club
        </button>
      </motion.section>
    </div>
  );
}
