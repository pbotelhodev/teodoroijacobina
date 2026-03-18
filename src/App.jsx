import React, { useState, useEffect } from "react";
import {
  MapPin,
  MessageCircle,
  ShieldCheck,
  Zap,
  Car,
  ArrowUpRight,
  Hospital,
  ShoppingCart,
  ShoppingBag,
  Ticket,
  Send,
  Check,
  Wind,
  Tv,
  Wifi,
  Sofa,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import LogoSmarttex from "../src/assets/logo.png";
import HeroImage from "./assets/hero3.jpg";

export default function App() {
  const waLink =
    "https://wa.me/5565992662309?text=Olá%2C%20tenho%20interesse%20em%20alugar%20um%20flat%20no%20Duque%20de%20Caxias!";

  const features = [
    {
      title: "Localização Estratégica",
      desc: "No centro do Duque de Caxias, próximo a tudo.",
      icon: <MapPin size={24} />,
    },
    {
      title: "Internet Inclusa",
      desc: "Wi-Fi de alta performance já ativo.",
      icon: <Zap size={24} />,
    },
    {
      title: "Climatização",
      desc: "Equipado com Ar-condicionado e TV.",
      icon: <ShieldCheck size={24} />,
    },
    {
      title: "Vaga Privativa",
      desc: "Estacionamento seguro no local.",
      icon: <Car size={24} />,
    },
  ];

  const pois = [
    {
      name: "Complexo Hosp. Jardim Cuiabá",
      desc: "850m de distância",
      icon: <Hospital size={20} />,
    },
    {
      name: "Goiabeiras Shopping",
      desc: "350m de distância",
      icon: <ShoppingBag size={20} />,
    },
    {
      name: "Supermercado BigLar",
      desc: "1.7km de distância",
      icon: <ShoppingCart size={20} />,
    },
    {
      name: "Arena Pantanal",
      desc: "2km de distância",
      icon: <Ticket size={20} />,
    },
  ];

  const [tipoGaleria, setTipoGaleria] = useState("mobiliado");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Imagens de exemplo aplicadas para visualização real do layout
  const imagensGaleria = {
    vazio: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80",
    ],
    mobiliado: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1e6651de95?w=800&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    ],
  };

  // Reseta o carrossel para a foto 1 sempre que trocar de opção (Vazio/Mobiliado)
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [tipoGaleria]);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === imagensGaleria[tipoGaleria].length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? imagensGaleria[tipoGaleria].length - 1 : prev - 1,
    );
  };

  return (
    <div className="min-h-screen bg-[#F2EFE9] font-sans text-[#2A2622] scroll-smooth selection:bg-[#BFA473]/20">
      {/* HEADER */}
      <nav className="w-full bg-white/90 backdrop-blur-md px-8 py-5 flex items-center justify-between sticky top-0 z-50 border-b border-[#E3DED6] shadow-sm">
        <div className="text-xl font-bold tracking-tighter text-[#2A2622]">
          Teodoroi<span className="font-light text-[#9C948A]">Jacobina</span>
        </div>
        <div className="hidden md:flex gap-8 text-xs uppercase tracking-[0.15em] font-medium text-[#6B6359]">
          <a href="#hero" className="hover:text-[#2A2622] transition-colors">
            Início
          </a>
          <a
            href="#diferenciais"
            className="hover:text-[#2A2622] transition-colors"
          >
            Diferenciais
          </a>
          <a href="#opcoes" className="hover:text-[#2A2622] transition-colors">
            Opções & Galeria
          </a>
          <a
            href="#localizacao"
            className="hover:text-[#2A2622] transition-colors"
          >
            Localização
          </a>
        </div>
        <a
          href={waLink}
          target="_blank"
          rel="noreferrer"
          className="bg-[#2A2622] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#3E3934] transition-all"
        >
          Agendar Visita
        </a>
      </nav>

      {/* HERO */}
      <header
        id="hero"
        className="relative w-full h-[70vh] flex items-center justify-start overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={HeroImage}
            alt="Hero Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#2A2622]/80 via-[#2A2622]/30 to-transparent"></div>
        </div>
        <div className="max-w-5xl w-full mx-auto px-6 relative z-10">
          <div className="bg-[#2A2622] p-8 rounded-xl shadow-2xl max-w-lg border border-[#3E3934]">
            <span className="inline-flex items-center gap-2 text-[#BFA473] text-[11px] uppercase tracking-[0.2em] mb-4 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#BFA473] animate-pulse"></span>
              R. Gen. Rabêlo, 229 - Duque de Caxias
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-5 tracking-tighter">
              Seu flat pronto <br /> no Duque de Caxias
            </h1>
            <p className="text-[#E3DED6] text-base mb-8 leading-relaxed font-light">
              Unidades funcionais e inteligentes. Conforto essencial e
              localização estratégica para sua rotina.
            </p>
            <div className="flex gap-4">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="bg-white text-[#2A2622] px-8 py-4 rounded-lg text-sm font-bold uppercase tracking-wider hover:bg-[#F2EFE9] transition-all flex items-center gap-2 shadow-sm"
              >
                Agendar Visita{" "}
                <ArrowUpRight size={18} className="text-[#BFA473]" />
              </a>
              <a
                href="#opcoes"
                className="text-white px-6 py-4 text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:underline"
              >
                Ver Opções
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* DIFERENCIAIS */}
      <section id="diferenciais" className="py-24 bg-[#F2EFE9]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2A2622] tracking-tighter mb-4">
              Tudo o que você precisa.
            </h2>
            <p className="text-[#6B6359] text-base max-w-lg mx-auto">
              Infraestrutura pronta para morar com praticidade e segurança.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="group bg-white p-6 rounded-xl border border-[#E3DED6]/50 shadow-sm hover:shadow-md transition-all flex flex-col items-start"
              >
                <div className="text-[#2A2622] mb-5 p-3.5 bg-[#EBE7E0] rounded-lg group-hover:bg-[#2A2622] group-hover:text-[#BFA473] transition-colors">
                  {feat.icon}
                </div>
                <h3 className="text-xs font-bold text-[#2A2622] uppercase tracking-widest mb-2">
                  {feat.title}
                </h3>
                <p className="text-sm text-[#6B6359] font-light leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPÇÕES E GALERIA INTEGRADAS */}
      <section
        id="opcoes"
        className="py-12 md:py-16 bg-[#FAFAFA] relative z-10 border-y border-[#E3DED6]"
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#2A2622] tracking-tighter mb-3">
              Escolha a sua configuração.
            </h2>
            <p className="text-[#6B6359] text-base max-w-lg mx-auto font-light leading-relaxed mb-6">
              Temos opções flexíveis para o seu momento.
            </p>

            {/* Botões de Troca */}
            <div className="inline-flex bg-[#EBE7E0] p-1.5 rounded-full border border-[#D9D4CC] shadow-inner">
              <button
                onClick={() => setTipoGaleria("vazio")}
                className={`px-5 py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  tipoGaleria === "vazio"
                    ? "bg-white text-[#2A2622] shadow-sm border border-[#E3DED6]"
                    : "text-[#6B6359] hover:text-[#2A2622]"
                }`}
              >
                Espaço Livre
              </button>
              <button
                onClick={() => setTipoGaleria("mobiliado")}
                className={`px-5 py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  tipoGaleria === "mobiliado"
                    ? "bg-[#2A2622] text-[#BFA473] shadow-md border border-[#3E3934]"
                    : "text-[#6B6359] hover:text-[#2A2622]"
                }`}
              >
                Mobiliado
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
            {/* LADO ESQUERDO: CARD DE INFORMAÇÕES */}
            <div className="flex w-full">
              {tipoGaleria === "vazio" ? (
                <div className="bg-white p-5 lg:p-8 rounded-2xl border border-[#E3DED6] flex flex-col w-full shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-[#2A2622] mb-1">
                    Espaço Livre
                  </h3>
                  <p className="text-sm text-[#6B6359] mb-6 font-light leading-relaxed">
                    Unidade padrão sem mobília. Ideal para personalizar cada
                    detalhe do ambiente.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3 text-sm text-[#4A443D]">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-[#F2EFE9] flex items-center justify-center">
                        <Check size={14} className="text-[#9C948A]" />
                      </span>
                      Infraestrutura elétrica e hidráulica
                    </li>
                    <li className="flex items-center gap-3 text-sm text-[#4A443D]">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-[#F2EFE9] flex items-center justify-center">
                        <Check size={14} className="text-[#9C948A]" />
                      </span>
                      Ambientes integrados e bem distribuídos
                    </li>
                    <li className="flex items-center gap-3 text-sm text-[#4A443D]">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-[#F2EFE9] flex items-center justify-center">
                        <Check size={14} className="text-[#9C948A]" />
                      </span>
                      Bancada de cozinha instalada
                    </li>
                    <li className="flex items-center gap-3 text-sm text-[#4A443D]">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-[#F2EFE9] flex items-center justify-center">
                        <Check size={14} className="text-[#9C948A]" />
                      </span>
                      Imóvel recém-revisado e pintura nova
                    </li>
                  </ul>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full text-center border-2 border-[#2A2622] text-[#2A2622] py-3 rounded-xl text-[11px] font-bold uppercase tracking-widest hover:bg-[#2A2622] hover:text-white transition-colors duration-300 mt-auto"
                  >
                    Consultar Valor
                  </a>
                </div>
              ) : (
                <div className="bg-[#2A2622] p-5 lg:p-8 rounded-2xl border border-[#3E3934] flex flex-col relative overflow-hidden shadow-xl w-full transform transition-all duration-300">
                  <div className="absolute top-[-20%] right-[-10%] w-48 h-48 bg-[#BFA473]/20 rounded-full blur-[60px] pointer-events-none"></div>

                  <div className="inline-flex items-center gap-1.5 bg-[#BFA473]/20 text-[#BFA473] px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest w-fit mb-3">
                    <Zap size={12} /> O Mais Escolhido
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    Pronto para Morar
                  </h3>
                  <p className="text-sm text-[#E3DED6] mb-6 font-light leading-relaxed">
                    A experiência completa de conforto e praticidade. Basta
                    trazer as suas malas.
                  </p>
                  <ul className="space-y-3 mb-6 relative z-10">
                    <li className="flex items-center gap-3 text-sm text-[#F2EFE9]">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-[#3E3934] flex items-center justify-center">
                        <Wind size={14} className="text-[#BFA473]" />
                      </span>
                      Ar-condicionado instalado
                    </li>
                    <li className="flex items-center gap-3 text-sm text-[#F2EFE9]">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-[#3E3934] flex items-center justify-center">
                        <Tv size={14} className="text-[#BFA473]" />
                      </span>
                      TV a Cabo
                    </li>
                    <li className="flex items-center gap-3 text-sm text-[#F2EFE9]">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-[#3E3934] flex items-center justify-center">
                        <Sofa size={14} className="text-[#BFA473]" />
                      </span>
                      Mobília completa
                    </li>
                  </ul>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full text-center bg-[#BFA473] text-[#1A1815] py-3 rounded-xl text-[11px] font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 relative z-10 mt-auto"
                  >
                    Garantir Unidade
                  </a>
                </div>
              )}
            </div>

            {/* LADO DIREITO: CARROSSEL DE IMAGENS CONTROLADO */}
            <div className="flex w-full h-75 lg:h-95 relative group rounded-2xl overflow-hidden border border-[#E3DED6] shadow-sm">
              {/* Trilho das imagens */}
              <div
                className="flex w-full h-full transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentImageIndex * 100}%)`,
                }}
              >
                {imagensGaleria[tipoGaleria].map((img, idx) => (
                  <div
                    key={idx}
                    className="min-w-full h-full relative shrink-0 bg-[#EBE7E0]"
                  >
                    <img
                      src={img}
                      alt={`Ambiente ${tipoGaleria} ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>

              {/* Botões do Carrossel */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#2A2622] p-2 rounded-full shadow-md backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                aria-label="Imagem anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#2A2622] p-2 rounded-full shadow-md backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                aria-label="Próxima imagem"
              >
                <ChevronRight size={20} />
              </button>

              {/* Indicadores (Dots) */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {imagensGaleria[tipoGaleria].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentImageIndex === idx
                        ? "bg-[#BFA473] w-6"
                        : "bg-white/60 w-1.5 hover:bg-white"
                    }`}
                    aria-label={`Ir para a foto ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section id="localizacao" className="py-24 bg-[#F2EFE9]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#2A2622] tracking-tighter mb-4">
              Tudo ao seu redor.
            </h2>
            <p className="text-[#6B6359] text-base max-w-lg mx-auto">
              R. Gen. Rabêlo, 229 - Duque de Caxias, Cuiabá - MT
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
            {pois.map((poi, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-white p-4 rounded-xl border border-[#E3DED6]/50 shadow-sm"
              >
                <div className="text-[#BFA473]">{poi.icon}</div>
                <div>
                  <p className="text-xs font-bold text-[#2A2622] uppercase tracking-wider leading-tight">
                    {poi.name}
                  </p>
                  <p className="text-[11px] text-[#9C948A] mt-1">{poi.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full aspect-16/6 md:aspect-21/7 rounded-xl overflow-hidden shadow-md border border-[#E3DED6] bg-[#EBE7E0]">
            <iframe
              title="Mapa de Localização"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.910385906806!2d-56.11189442488813!3d-15.595995285025736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db1b90d238381%3A0xc60c7333ed8ce0ea!2sR.%20Gen.%20Rab%C3%AAlo%2C%20229%20-%20Duque%20de%20Caxias%2C%20Cuiab%C3%A1%20-%20MT%2C%2078043-328!5e0!3m2!1spt-BR!2sbr!4v1715801234567!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 bg-[#2A2622] relative overflow-hidden flex items-center justify-center border-t border-[#3E3934]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-100 bg-[#BFA473]/10 rounded-full blur-[90px] pointer-events-none"></div>
        <div className="max-w-2xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          <div className="w-16 h-16 bg-[#3E3934]/50 backdrop-blur-md rounded-xl border border-[#BFA473]/20 flex items-center justify-center mb-6 shadow-xl">
            <MessageCircle
              size={28}
              className="text-[#BFA473]"
              strokeWidth={1.5}
            />
          </div>
          <span className="text-[#BFA473] text-[11px] uppercase tracking-[0.4em] font-bold mb-4 block">
            Próximo Passo
          </span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 text-white leading-tight">
            Sua nova moradia <br className="hidden md:block" /> a um clique de
            distância.
          </h2>
          <p className="text-[#E3DED6] text-base mb-10 font-light max-w-md mx-auto leading-relaxed opacity-90">
            Processo de locação ágil e sem intermediários. Entre em contato
            agora para conhecer sua nova moradia.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-white text-[#2A2622] px-12 py-5 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-[#F2EFE9] hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(191,164,115,0.15)] group"
          >
            Agendar Visita
            <Send
              size={20}
              className="text-[#BFA473] group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-[#2A2622] border-t border-[#3E3934]">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-5 text-[11px] uppercase tracking-widest text-[#9C948A]">
          <p>TeodoroiJacobina © 2026. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2.5">
            <span className="text-[#6B6359]">Design & Powered by</span>
            <div className="flex items-center gap-1.5 text-white font-bold lowercase text-xs">
              <a
                href="https://www.smarttex.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                aria-label="Acessar site da Smarttex"
              >
                <img
                  src={LogoSmarttex}
                  alt="Smarttex"
                  className="h-5 w-auto object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
