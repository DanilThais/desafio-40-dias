import React from 'react';
import { CheckCircle, Lock } from 'lucide-react';

const features = [
  'eBook com 40 passos detalhados',
  'Diário de acompanhamento digital',
  'Áudio livro completo',
  'Acesso imediato',
  'Conteúdo baseado em princípios bíblicos',
  'Garantia de satisfação de 7 dias',
];

const CallToAction = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif font-bold text-[#1E3A8A] mb-4">
            Invista no Seu Casamento Hoje
          </h2>
          <p className="text-xl text-gray-600">
            Acesso imediato a todos os recursos para restaurar seu casamento
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 bg-gradient-to-br from-[#3B82F6] to-[#1E3A8A] text-white">
            <div className="uppercase tracking-wider text-blue-200 font-medium mb-2 text-center">
              Acesso Completo
            </div>
            <div className="flex items-center justify-center mb-4">
              <span className="text-5xl font-bold">R$29</span>
              <span className="text-2xl ml-1">,90</span>
            </div>
            <p className="text-blue-100 text-center mb-6">
              Pagamento único, sem assinaturas
            </p>
            
            <ul className="space-y-3 max-w-md mx-auto">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#10B981] mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="p-8 text-center bg-gradient-to-b from-white to-blue-50">
            <div className="flex items-center justify-center mb-6">
              <Lock className="h-5 w-5 text-[#3B82F6] mr-2" />
              <span className="text-gray-700 font-medium">Pagamento 100% seguro via Hotmart</span>
            </div>
            
            <div className="mb-6">
              <a 
                href="https://pay.hotmart.com/XXXXX"
                className="hotmart-fb hotmart__button-checkout inline-block"
                onClick={(e) => e.preventDefault()}
              >
                <button className="bg-gradient-to-r from-pink-500 to-pink-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition hover:scale-105 hover:bg-pink-800 hover:shadow-xl w-full sm:w-auto">
                  Comprar Agora por R$29,90
                </button>
              </a>
            </div>
            
            <p className="text-sm text-gray-500">
              Acesso imediato após confirmação do pagamento
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;