/**
 * Home Page - Rafaela Garcez Arts
 * Design: Brutalist Contemporary with Bold Typography
 * Fully responsive mobile-first design
 * 
 * Principles:
 * - Mobile-first responsive layout
 * - Clean, minimal aesthetic without invasive elements
 * - Proper spacing and hierarchy
 * - Hamburger menu for mobile navigation
 */

import { useState } from 'react';
import { Mail, Phone, MapPin, ExternalLink, Menu, X, BookOpen, Palette, Megaphone, PenTool } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-200">
        <div className="container flex items-center justify-between py-4 md:py-6">
          <h1 className="text-lg md:text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            RAFAELA GARCEZ
          </h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <a href="#sobre" className="text-sm font-medium hover:text-[#C85A3A] transition">
              SOBRE
            </a>
            <a href="#servicos" className="text-sm font-medium hover:text-[#C85A3A] transition">
              SERVIÇOS
            </a>
            <a href="#contato" className="text-sm font-medium hover:text-[#C85A3A] transition">
              CONTATO
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="container py-4 flex flex-col gap-4">
              <a 
                href="#sobre" 
                className="text-sm font-medium hover:text-[#C85A3A] transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                SOBRE
              </a>
              <a 
                href="#servicos" 
                className="text-sm font-medium hover:text-[#C85A3A] transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                SERVIÇOS
              </a>
              <a 
                href="#contato" 
                className="text-sm font-medium hover:text-[#C85A3A] transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTATO
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 
              className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Arte, Educação e Criação
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed">
              Sou arte-educadora, produtora cultural e profissional de comunicação. 
              Trabalho com performances, educação artística e produção audiovisual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contato"
                className="px-6 md:px-8 py-3 md:py-4 bg-[#C85A3A] text-white font-bold hover:bg-[#A84A2A] transition text-center"
              >
                ENTRE EM CONTATO
              </a>
              <a 
                href="https://www.instagram.com/elarafagarcez"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 md:px-8 py-3 md:py-4 border-2 border-black font-bold hover:bg-black hover:text-white transition text-center"
              >
                INSTAGRAM
              </a>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663403910829/MnGg8dS5stgcHC5XXG3r9n/hero-abstract-art-d5uqGhEiZZvrtDm7yWFdNg.webp"
              alt="Arte abstrata brutalista"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-black my-12 md:my-16"></div>

      {/* About Section */}
      <section id="sobre" className="py-12 md:py-20 container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h3 
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Sobre
            </h3>
            <div className="w-12 h-1 bg-[#C85A3A]"></div>
          </div>
          <div className="md:col-span-2">
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
              <p>
                Graduada em Licenciatura Interdisciplinar em Artes pela UFRB, 
                com formação em Educação Artística pela UFRJ. Minha prática envolve 
                pesquisa em performance, corpo em cena e criação audiovisual.
              </p>
              <p>
                Trabalho como arte-educadora em escolas e projetos sociais, 
                desenvolvendo atividades que promovem consciência ambiental e cidadania 
                através da arte. Também atuo em produção cultural, audiovisual e comunicação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-black my-12 md:my-16"></div>

      {/* Services Section */}
      <section id="servicos" className="py-12 md:py-20 container">
        <h2 
          className="text-3xl md:text-4xl font-bold mb-8 md:mb-12"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          SERVIÇOS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Service Card 1 */}
          <div className="border border-gray-200 overflow-hidden hover:shadow-lg transition">
            <div className="bg-[#C85A3A] text-white p-6 flex items-center gap-4">
              <BookOpen className="w-8 h-8 flex-shrink-0" />
              <h3 className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Arte-Educação
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4 leading-relaxed">
                Desenvolvimento de atividades arte-educativas em escolas e projetos sociais. 
                Uso de materiais recicláveis, performances e práticas reflexivas para 
                promover consciência ambiental e cidadania.
              </p>
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663403910829/MnGg8dS5stgcHC5XXG3r9n/workshop-education-art-M3zCpQQCRYEW3ZqvvZ5iRK.webp"
                alt="Workshop de educação artística"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="border border-gray-200 overflow-hidden hover:shadow-lg transition">
            <div className="bg-[#D4A574] text-black p-6 flex items-center gap-4">
              <Palette className="w-8 h-8 flex-shrink-0" />
              <h3 className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Performance
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4 leading-relaxed">
                Desenvolvimento de montagens cênicas e performances que investigam 
                ancestralidade, corpo e memória. Trabalho com narrativas que desafiam 
                perspectivas tradicionais e promovem resistência através da arte.
              </p>
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663403910829/MnGg8dS5stgcHC5XXG3r9n/performance-art-scene-hk8yKn2j38PynoutEoamTb.webp"
                alt="Performance artística"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="border border-gray-200 overflow-hidden hover:shadow-lg transition">
            <div className="bg-[#C85A3A] text-white p-6 flex items-center gap-4">
              <Megaphone className="w-8 h-8 flex-shrink-0" />
              <h3 className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Produção Cultural
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed">
                Organização de eventos, projetos culturais e produções audiovisuais. 
                Coordenação de logística, comunicação e gestão de equipes em 
                campanhas e produções de audiovisual.
              </p>
            </div>
          </div>

          {/* Service Card 4 */}
          <div className="border border-gray-200 overflow-hidden hover:shadow-lg transition">
            <div className="bg-[#D4A574] text-black p-6 flex items-center gap-4">
              <PenTool className="w-8 h-8 flex-shrink-0" />
              <h3 className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Comunicação
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed">
                Criação de conteúdo digital, produção de textos, fotografia e edição de imagem. 
                Domínio de ferramentas como Photoshop, Canvas e planejamento de comunicação 
                estratégica para redes sociais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-black my-12 md:my-16"></div>

      {/* Experience Section */}
      <section className="py-12 md:py-20 container">
        <h2 
          className="text-3xl md:text-4xl font-bold mb-8 md:mb-12"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          EXPERIÊNCIA
        </h2>
        
        <div className="space-y-6 md:space-y-8">
          <div className="border-l-4 border-[#C85A3A] pl-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
              <h3 className="text-lg md:text-xl font-bold">Instituto Raízes em Movimento</h3>
              <span className="text-sm text-gray-600">2025</span>
            </div>
            <p className="text-[#C85A3A] font-semibold mb-2">Secretária Geral</p>
            <p className="text-gray-700 leading-relaxed">
              Gestão organizacional da ONG, articulação entre diretoria, equipe e parceiros externos.
            </p>
          </div>

          <div className="border-l-4 border-[#D4A574] pl-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
              <h3 className="text-lg md:text-xl font-bold">NICTS - ODS Cultural</h3>
              <span className="text-sm text-gray-600">2025</span>
            </div>
            <p className="text-[#C85A3A] font-semibold mb-2">Monitora | Arte-educadora</p>
            <p className="text-gray-700 leading-relaxed">
              Desenvolvimento de atividades arte-educativas com materiais recicláveis em escolas públicas.
            </p>
          </div>

          <div className="border-l-4 border-[#D4A574] pl-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
              <h3 className="text-lg md:text-xl font-bold">Produtora Floresta</h3>
              <span className="text-sm text-gray-600">2025</span>
            </div>
            <p className="text-[#C85A3A] font-semibold mb-2">Assistente de Direção</p>
            <p className="text-gray-700 leading-relaxed">
              Organização de set, apoio à direção e acompanhamento de elenco na 8ª temporada de "O Dono do Lar" (Multishow).
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-black my-12 md:my-16"></div>

      {/* Contact Section */}
      <section id="contato" className="py-12 md:py-20 container pb-20 md:pb-32">
        <h2 
          className="text-3xl md:text-4xl font-bold mb-8 md:mb-12"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          CONTATO
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 md:w-8 md:h-8 text-[#C85A3A] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold mb-2">Email</h3>
              <a 
                href="mailto:rafaelagarcez13@gmail.com"
                className="text-gray-700 hover:text-[#C85A3A] transition text-sm md:text-base"
              >
                rafaelagarcez13@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 md:w-8 md:h-8 text-[#C85A3A] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold mb-2">Telefone</h3>
              <a 
                href="tel:+5521977360990"
                className="text-gray-700 hover:text-[#C85A3A] transition text-sm md:text-base"
              >
                (21) 97736-0990
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 md:w-8 md:h-8 text-[#C85A3A] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold mb-2">Localização</h3>
              <p className="text-gray-700 text-sm md:text-base">Rio de Janeiro, Brasil</p>
            </div>
          </div>
        </div>

        <div className="pt-8 md:pt-12 border-t-2 border-black">
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <a 
              href="https://www.instagram.com/elarafagarcez"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-bold hover:text-[#C85A3A] transition text-sm md:text-base"
            >
              Instagram <ExternalLink className="w-4 h-4" />
            </a>
            <a 
              href="https://www.linkedin.com/in/elarafagarcez"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-bold hover:text-[#C85A3A] transition text-sm md:text-base"
            >
              LinkedIn <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 md:py-8">
        <div className="container text-center text-sm md:text-base">
          <p>
            © 2025 Rafaela Garcez. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
