import React from "react";
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
            Opções
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

      {/* OPÇÕES DE LOCAÇÃO */}
      <section
        id="opcoes"
        className="py-24 bg-white relative z-10 border-y border-[#E3DED6]"
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[11px] font-bold text-[#BFA473] uppercase tracking-[0.3em] mb-4 block">
              Planos de Locação
            </span>
            <h2 className="text-4xl font-bold text-[#2A2622] tracking-tighter mb-5">
              Escolha a sua configuração.
            </h2>
            <p className="text-[#6B6359] text-base max-w-xl mx-auto font-light leading-relaxed">
              Temos opções flexíveis para o seu momento. Traga a sua própria
              identidade ou mude-se para um ambiente 100% completo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* CARD 1: Sem Mobília */}
            <div className="bg-[#F2EFE9] p-10 rounded-2xl border border-[#E3DED6] flex flex-col">
              <h3 className="text-3xl font-bold text-[#2A2622] mb-3">
                Espaço Livre
              </h3>
              <p className="text-sm text-[#6B6359] mb-8 font-light leading-relaxed">
                Unidade padrão sem mobília. Ideal para quem já possui móveis e
                deseja personalizar cada detalhe do ambiente.
              </p>
              <ul className="space-y-4 mb-10 flex-1">
                <li className="flex items-center gap-3 text-base text-[#2A2622]">
                  <Check size={20} className="text-[#9C948A]" /> Infraestrutura
                  elétrica e hidráulica
                </li>
                <li className="flex items-center gap-3 text-base text-[#2A2622]">
                  <Check size={20} className="text-[#9C948A]" /> Ambientes
                  integrados e bem distribuídos
                </li>
                <li className="flex items-center gap-3 text-base text-[#2A2622]">
                  <Check size={20} className="text-[#9C948A]" /> Bancada de
                  cozinha instalada
                </li>
                <li className="flex items-center gap-3 text-base text-[#2A2622]">
                  <Check size={20} className="text-[#9C948A]" /> Imóvel
                  recém-revisado e com pintura nova
                </li>
              </ul>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="w-full text-center border border-[#2A2622] text-[#2A2622] py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[#2A2622] hover:text-white transition-all"
              >
                Consultar Valor
              </a>
            </div>

            {/* CARD 2: Mobiliado (Destaque Premium) */}
            <div className="bg-[#2A2622] p-10 rounded-2xl border border-[#3E3934] flex flex-col relative overflow-hidden shadow-2xl transform md:-translate-y-4">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#BFA473]/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="inline-flex items-center gap-2 bg-[#BFA473]/20 text-[#BFA473] px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest w-fit mb-6">
                <Zap size={12} /> O Mais Escolhido
              </div>

              <h3 className="text-3xl font-bold text-white mb-3">
                Pronto para Morar
              </h3>
              <p className="text-sm text-[#E3DED6] mb-8 font-light leading-relaxed">
                A experiência completa de conforto e praticidade. Instalação
                imediata, basta trazer as suas malas.
              </p>
              <ul className="space-y-4 mb-10 flex-1 relative z-10">
                <li className="flex items-center gap-3 text-base text-[#E3DED6]">
                  <Wind size={20} className="text-[#BFA473]" /> Ar-condicionado
                  instalado
                </li>
                <li className="flex items-center gap-3 text-base text-[#E3DED6]">
                  <Tv size={20} className="text-[#BFA473]" /> TV a Cabo
                </li>
                <li className="flex items-center gap-3 text-base text-[#E3DED6]">
                  <Wifi size={20} className="text-[#BFA473]" /> Wi-Fi de alta
                  velocidade
                </li>
                <li className="flex items-center gap-3 text-base text-[#E3DED6]">
                  <Sofa size={20} className="text-[#BFA473]" /> Mobília completa
                </li>
              </ul>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="w-full text-center bg-[#BFA473] text-[#2A2622] py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white transition-all relative z-10 shadow-lg"
              >
                Garantir Unidade
              </a>
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
            <p className="text-[#6B6359] text-base">
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
          <div className="w-full aspect-[16/6] md:aspect-[21/7] rounded-xl overflow-hidden shadow-md border border-[#E3DED6] bg-[#EBE7E0]">
            <iframe
              title="Mapa de Localização"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.9238634843794!2d-56.1086884!3d-15.5957018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db195e29783f9%3A0x8673322f18379c6b!2sR.%20Gen.%20Rab%C3%AAlo%2C%20229%20-%20Duque%20de%20Caxias%2C%20Cuiab%C3%A1%20-%20MT%2C%2078043-348!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-[#BFA473]/10 rounded-full blur-[90px] pointer-events-none"></div>
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
