import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1E3A8A] text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Heart className="h-6 w-6 text-[#10B981] mr-2" />
            <span className="text-lg font-serif font-medium text-white">Vida em Foco</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
            <a href="/termos" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="/privacidade" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="mailto:vidaemfoco@gmail.com" className="hover:text-white transition-colors">Contato</a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-sm">
          <p>© {new Date().getFullYear()} Vida em Foco. Todos os direitos reservados.</p>
          <p className="mt-2 text-gray-500">
            As imagens utilizadas são apenas ilustrativas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;