import React, { useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

const slides = [
  {
    text: "Você sente que seu casamento já não é o mesmo?",
    onScreenText: "Seu casamento mudou?",
    imageSrc: "https://images.pexels.com/photos/819506/pexels-photo-819506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Casal distante, ambiente silencioso"
  },
  {
    text: "As conversas diminuíram... As mágoas aumentaram... O amor parece ter esfriado.",
    onScreenText: "Mágoas. Silêncio. Distância.",
    imageSrc: "https://images.pexels.com/photos/5734283/pexels-photo-5734283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Cama com espaço entre casal"
  },
  {
    text: "Mas e se… ainda houver esperança?",
    onScreenText: "E se ainda houver esperança?",
    imageSrc: "https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Nascer do sol no horizonte"
  },
  {
    text: "O Desafio dos 40 Dias é um convite para recomeçar. Uma jornada de fé, reflexão e ação.",
    onScreenText: "Fé. Reflexão. Ação.",
    imageSrc: "https://images.pexels.com/photos/4669443/pexels-photo-4669443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Bíblia aberta, caderno"
  },
  {
    text: "Você vai receber: um eBook com 40 passos, um diário de acompanhamento, e um áudio livro para escutar todos os dias.",
    onScreenText: "✔️ eBook com 40 passos\n✔️ Diário de acompanhamento\n✔️ Áudio livro inspirador",
    imageSrc: "https://images.pexels.com/photos/4855453/pexels-photo-4855453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Mockups dos produtos"
  },
  {
    text: "Mesmo que seu cônjuge não participe… Mesmo que pareça tarde demais… Deus pode começar por você.",
    onScreenText: "A mudança começa em você.\nDeus faz o resto.",
    imageSrc: "https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Pessoa orando sozinha"
  },
  {
    text: "Tudo isso por apenas R$29,90. Acesso imediato. Garantia de 7 dias.",
    onScreenText: "Apenas R$29,90\nGarantia de 7 dias",
    imageSrc: "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Tela de celular com botão de compra"
  },
  {
    text: "Você tem 40 dias. Deus só precisa de um.",
    onScreenText: "Você tem 40 dias.\nDeus só precisa de um.",
    imageSrc: "https://images.pexels.com/photos/248159/pexels-photo-248159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Casal caminhando no pôr do sol"
  }
];

const VideoPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const slideInterval = 10000; // 10 segundos por slide
  
  useEffect(() => {
    let timer: number | null = null;
    
    if (isPlaying) {
      const progressTimer = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + (100 / (slideInterval / 100));
          return newProgress >= 100 ? 100 : newProgress;
        });
      }, 100);
      
      timer = window.setTimeout(() => {
        if (currentSlide < slides.length - 1) {
          setCurrentSlide(currentSlide + 1);
          setProgress(0);
        } else {
          setIsPlaying(false);
          setCurrentSlide(0);
          setProgress(0);
        }
      }, slideInterval);
      
      return () => {
        clearTimeout(timer!);
        clearInterval(progressTimer);
      };
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [currentSlide, isPlaying]);
  
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying && currentSlide === slides.length - 1) {
      setCurrentSlide(0);
      setProgress(0);
    }
  };
  
  const handleSlideClick = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
    setIsPlaying(false);
  };
  
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-center font-bold text-gray-900 mb-12">
          Uma Jornada de Renovação
        </h2>
        
        <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{ 
              backgroundImage: `url(${slides[currentSlide].imageSrc})`,
              opacity: 0.7,
            }}
          ></div>
          
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-8">
            <div className="bg-black bg-opacity-50 p-6 rounded-lg max-w-xl text-center">
              <p className="text-2xl md:text-3xl font-medium mb-4">
                {slides[currentSlide].text}
              </p>
              <div className="text-xl text-blue-100 whitespace-pre-line">
                {slides[currentSlide].onScreenText}
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-3 flex items-center">
            <button 
              className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors"
              onClick={handlePlayPause}
              aria-label={isPlaying ? "Pausar apresentação" : "Iniciar apresentação"}
            >
              {isPlaying ? 
                <Pause className="h-5 w-5 text-white" /> : 
                <Play className="h-5 w-5 text-white" />
              }
            </button>
            
            <div className="flex-1 mx-4 bg-gray-700 h-1 rounded-full overflow-hidden">
              <div 
                className="bg-blue-400 h-full transition-all duration-100"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            
            <span className="text-white text-sm">
              {currentSlide + 1}/{slides.length}
            </span>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-4 sm:grid-cols-8 gap-2">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => handleSlideClick(index)}
              className={`aspect-video rounded overflow-hidden transition-all ${
                currentSlide === index ? 'ring-2 ring-blue-500' : 'opacity-60 hover:opacity-100'
              }`}
              aria-label={`Ir para slide ${index + 1}: ${slide.description}`}
            >
              <img 
                src={slide.imageSrc} 
                alt={slide.description}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPresentation;