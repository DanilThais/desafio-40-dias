import React from 'react';
import { Book, FileText, Headphones, Heart } from 'lucide-react';

const benefits = [
  {
    title: 'eBook com 40 passos',
    description: 'Um guia completo com 40 passos práticos e espirituais para fortalecer seu casamento dia após dia.',
    icon: Book,
  },
  {
    title: 'Diário de acompanhamento',
    description: 'Um espaço para registrar suas reflexões, orações e progressos ao longo da jornada de 40 dias.',
    icon: FileText,
  },
  {
    title: 'Áudio livro inspirador',
    description: 'Escute os conteúdos em qualquer lugar para manter-se motivado e imerso no processo de restauração.',
    icon: Headphones,
  },
  {
    title: 'Orientação espiritual',
    description: 'Fundamentos bíblicos e princípios espirituais para guiar você em cada etapa do processo.',
    icon: Heart,
  },
];

const ProductBenefits = () => {
  return (
    <div className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            O Que Você Vai Receber
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recursos completos para guiá-lo em cada passo desta jornada de transformação e renovação.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md p-6 transition-transform duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="rounded-full bg-blue-100 p-3 inline-flex mb-4">
                <benefit.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="inline-block mb-6 rounded-full bg-pink-100 p-3">
            <Heart className="h-8 w-8 text-pink-600" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
            Renove Seu Casamento com Fé
          </h3>
          <p className="text-gray-600 text-lg mb-6 max-w-3xl mx-auto">
            Mesmo que seu cônjuge não participe... Mesmo que pareça tarde demais...
            <br />
            <span className="font-semibold text-blue-900">Deus pode começar por você.</span>
          </p>
          <div className="text-2xl font-bold text-blue-800">
            Você tem 40 dias. Deus só precisa de um.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBenefits;