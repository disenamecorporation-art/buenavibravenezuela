import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import Features from './components/Features';
import Team from './components/Team';
import Content from './components/Content';
import Events from './components/Events';
import EventDetail from './components/EventDetail';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';
import ContactPopup from './components/ContactPopup';
import AuthPopup from './components/AuthPopup';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import { MessageCircle } from 'lucide-react';
import { BlogEvent } from './types';

export default function App() {
  const [view, setView] = useState('home');
  const [user, setUser] = useState<{ role: 'user' | 'admin' } | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<BlogEvent | null>(null);

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar setView={setView} onOpenAuth={() => setIsAuthOpen(true)} user={user} />
      
      {view === 'home' ? (
        selectedEvent ? (
          <EventDetail event={selectedEvent} onBack={() => setSelectedEvent(null)} />
        ) : (
          <>
            <HeroSlider onOpenContact={() => setIsContactOpen(true)} />
            <Features />
            <Team />
            <Content onOpenContact={() => setIsContactOpen(true)} />
            <Events onSelectEvent={setSelectedEvent} />
          </>
        )
      ) : view === 'events' ? (
        <div className="pt-24">
          <Events onSelectEvent={setSelectedEvent} />
        </div>
      ) : view === 'profile' ? (
        user?.role === 'admin' ? <AdminDashboard /> : <UserDashboard />
      ) : (
        <div className="pt-32 pb-16 min-h-screen flex flex-col items-center justify-center p-10 space-y-16">
            <h1 className="text-4xl font-extralight text-white uppercase tracking-[8px]">Contacto</h1>
            <ContactForm />
            <ContactInfo />
        </div>
      )}

      <Footer />
      <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <AuthPopup isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} onLogin={(role) => { setUser({ role }); setView('profile'); }} />

      <a 
        href="https://wa.me/584241969727" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-[30px] right-[30px] w-[60px] h-[60px] rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center text-white z-50 border-2 border-white/20 shadow-xl hover:scale-110 transition"
      >
        <MessageCircle size={30} />
      </a>
    </div>
  );
}
