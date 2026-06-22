import { Mail, Phone, Instagram, Music } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center max-w-4xl mx-auto mt-16 p-10 glass-card">
      {[
        { icon: Phone, text: "+58 424 1969727" },
        { icon: Instagram, text: "@buenavibravzlaclub" },
        { icon: Music, text: "TikTok: buenavibra" },
        { icon: Mail, text: "info@buenavibra.com" }
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center gap-3">
          <div className="p-4 rounded-full bg-gradient-to-br from-[#c79b72]/20 to-[#986946]/10 border border-[#c79b72]/30 shadow-lg">
            <item.icon className="w-6 h-6 text-[#c79b72]" />
          </div>
          <p className="text-[10px] tracking-[1px] uppercase text-white/70">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
