import React from 'react';
import { Heart } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/1415131/pexels-photo-1415131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          filter: "brightness(0.4)"
        }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
        <Heart className="mx-auto text-pink-100 mb-6 h-16 w-16 animate-pulse" />
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
          Desafio dos 40 Dias
        </h1>
        <p className="text-xl md:text-2xl text-blue-50 mb-10 max-w-3xl mx-auto">
          Passos de Fé para Restaurar Seu Casamento
        </p>
        <a 
          href="https://pay.hotmart.com/O99792021V?checkoutMode=2"
          className="hotmart-fb hotmart__button-checkout inline-block"
          onClick={(e) => e.preventDefault()}
        >
          <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition hover:scale-105 hover:shadow-xl">
            Transforme Seu Casamento
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;