import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function AuthPopup({ isOpen, onClose, onLogin }: { isOpen: boolean; onClose: () => void; onLogin: (role: 'user' | 'admin') => void }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    const role = email === 'admin@buenavibra.com' ? 'admin' : 'user';
    onLogin(role);
    onClose();
  };

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
            className="w-full max-w-sm bg-black border border-[#c79b72]/30 rounded-3xl p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-[16px] text-white font-extralight uppercase tracking-[2px] mb-6 text-center">{isLogin ? 'Iniciar Sesión' : 'Registro'}</h2>
            <form className="space-y-4">
              {!isLogin && <input type="text" placeholder="NOMBRE" className="w-full bg-transparent border-b border-[#986946] p-2 text-white font-extralight text-[12px] focus:outline-none" />}
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="CORREO" className="w-full bg-transparent border-b border-[#986946] p-2 text-white font-extralight text-[12px] focus:outline-none" />
              <input type="password" placeholder="CONTRASEÑA" className="w-full bg-transparent border-b border-[#986946] p-2 text-white font-extralight text-[12px] focus:outline-none" />
              <button type="button" onClick={handleLogin} className="w-full mt-4 bg-gradient-to-r from-[#c79b72] to-[#986946] text-black font-normal text-[10px] py-3 uppercase tracking-[2px] rounded-[4px] hover:opacity-90 transition">
                {isLogin ? 'Entrar' : 'Registrarse'}
              </button>
            </form>
            <p className="text-[10px] text-white/50 text-center mt-6 cursor-pointer" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia Sesión'}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
