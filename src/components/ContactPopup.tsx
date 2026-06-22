import { motion, AnimatePresence } from 'motion/react';
import ContactForm from './ContactForm';

export default function ContactPopup({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-6"
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-lg bg-black border border-[#c79b72]/30 rounded-3xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} className="text-[#c79b72] hover:text-white mb-4">Cerrar X</button>
            <ContactForm />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
