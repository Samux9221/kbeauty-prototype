import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-k-bg flex flex-col justify-between overflow-hidden px-6 py-6 md:px-12 md:py-10">
      
      {/* Header Minimalista Extremo */}
      <header className="flex justify-between items-center z-30 w-full">
        <div className="font-serif text-2xl md:text-3xl tracking-[0.2em] text-k-text">
          LUMIÈRE
        </div>
        <nav className="hidden md:flex gap-16 font-sans text-[10px] md:text-xs uppercase tracking-[0.25em] text-k-text font-medium">
          <a href="#skincare" className="hover:text-gray-400 transition-colors duration-500">A Coleção</a>
          <a href="#essence" className="hover:text-gray-400 transition-colors duration-500">Nossa Essência</a>
          <a href="#journal" className="hover:text-gray-400 transition-colors duration-500">Journal</a>
        </nav>
        <button className="font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] text-k-text border-b border-k-text pb-1 hover:text-gray-400 hover:border-gray-400 transition-all duration-500">
          Consultoria
        </button>
      </header>

      {/* Camada da Imagem Central (O Arco) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[85vw] md:w-[35vw] h-[65vh] md:h-[75vh] z-10 mt-8 md:mt-0">
        <img 
          /* Imagem de uma textura de vidro/água ou modelo com pele perfeita */
          src="https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=1974&auto=format&fit=crop" 
          alt="Essência K-Beauty Glass Skin" 
          className="w-full h-full object-cover rounded-t-full shadow-2xl shadow-k-accent/20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-k-bg/40 to-transparent rounded-t-full"></div>
      </div>

      {/* Camada de Tipografia e Conteúdo (Sobrepondo a imagem) */}
      <div className="relative z-20 flex flex-col md:flex-row items-end justify-between w-full pb-8 md:pb-0">
        
        {/* Bloco de Texto Esquerdo */}
        <div className="w-full md:w-auto mb-8 md:mb-0">
          <span className="block font-sans text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-6 ml-2">
            Beleza em seu estado puro
          </span>
          {/* Título Massivo - O segredo está no leading-none e tracking negativo */}
          <h1 className="font-serif text-7xl md:text-[9rem] lg:text-[11rem] leading-none text-k-text tracking-tighter -ml-1 md:-ml-3 drop-shadow-sm">
            Glow.
          </h1>
          <p className="font-sans text-xs md:text-sm text-gray-700 font-light max-w-xs leading-loose ml-2 mt-4 md:mt-0 md:absolute md:bottom-12 md:left-1/2 md:-ml-[40vw]">
            A verdadeira estética <span className="italic font-serif">glass skin</span>. <br/> 
            Fórmulas minimalistas da Coreia <br/> para uma pele radiante e atemporal.
          </p>
        </div>

        {/* CTA Direito */}
        <div className="w-full md:w-auto flex justify-end">
          <button className="group relative flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full bg-k-bg border border-k-border overflow-hidden hover:border-k-text transition-colors duration-700">
            {/* Efeito de preenchimento do botão */}
            <div className="absolute inset-0 bg-k-text translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]"></div>
            
            <span className="relative z-10 font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] text-k-text group-hover:text-white transition-colors duration-700 text-center leading-relaxed">
              Descobrir <br/> O Ritual
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}