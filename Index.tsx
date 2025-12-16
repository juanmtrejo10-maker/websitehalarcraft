import { Button } from '@/components/ui/button';
import { Accordion } from '@/components/ui/accordion';
import Navigation from '@/components/Navigation';
import FeatureCard from '@/components/FeatureCard';
import ShopCard from '@/components/ShopCard';
import FAQItem from '@/components/FAQItem';
import { 
  Sword, 
  Coins, 
  Calendar, 
  Shield, 
  Users, 
  Bot,
  Copy,
  Check,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { useState } from 'react';

export default function Index() {
  const [copied, setCopied] = useState(false);
  const serverIP = 'play.halarcraft.com';

  const copyIP = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0A1628] text-white">
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/hero-minecraft-landscape.jpg" 
            alt="HalarCraft Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/50 via-[#0A1628]/70 to-[#0A1628]"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <img 
            src="/assets/halarcraftlogo_variant_1.png" 
            alt="HalarCraft Logo" 
            className="w-32 h-32 mx-auto mb-8 animate-in fade-in zoom-in duration-700"
          />
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-8 duration-700">
            Bienvenido a HalarCraft
          </h1>
          <p className="text-xl md:text-2xl text-[#94A3B8] mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
            Un servidor survival donde la aventura no tiene límites
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:opacity-90 text-white font-bold text-lg px-8 py-6"
              onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Unirse al Servidor
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 font-bold text-lg px-8 py-6"
            >
              Entrar al Discord
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-500 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-blue-500 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-[#0F1D32]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Sobre HalarCraft
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/assets/survival-gameplay.jpg" 
                alt="Survival Gameplay"
                className="rounded-lg shadow-2xl shadow-blue-500/20"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-[#94A3B8] leading-relaxed">
                HalarCraft es un servidor de Minecraft enfocado en la modalidad <span className="text-blue-400 font-semibold">Survival</span>, donde podrás disfrutar de una experiencia optimizada y estable junto a una comunidad activa y amigable.
              </p>
              <p className="text-lg text-[#94A3B8] leading-relaxed">
                Nuestro equipo de staff está siempre disponible para ayudarte, y organizamos eventos frecuentes para mantener la diversión al máximo. ¡Únete y forma parte de nuestra gran familia!
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-[#1A2942] px-4 py-2 rounded-lg">
                  <Users className="text-blue-400" />
                  <span className="font-semibold">Comunidad Activa</span>
                </div>
                <div className="flex items-center gap-2 bg-[#1A2942] px-4 py-2 rounded-lg">
                  <Shield className="text-green-400" />
                  <span className="font-semibold">Survival Optimizado</span>
                </div>
                <div className="flex items-center gap-2 bg-[#1A2942] px-4 py-2 rounded-lg">
                  <Sparkles className="text-purple-400" />
                  <span className="font-semibold">Staff Atento</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Características
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-4"></div>
            <p className="text-xl text-[#94A3B8]">Lo que hace especial a HalarCraft</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={Sword}
              title="Survival Mejorado"
              description="Disfruta de una experiencia survival optimizada con mecánicas mejoradas y contenido adicional que hace el juego más emocionante."
              image="/assets/survival-gameplay_variant_1.jpg"
            />
            <FeatureCard
              icon={Coins}
              title="Economía Balanceada"
              description="Sistema económico justo donde puedes ganar dinero jugando, comerciar con otros jugadores y prosperar sin ventajas injustas."
              image="/assets/economy-coins.jpg"
            />
            <FeatureCard
              icon={Calendar}
              title="Eventos Frecuentes"
              description="Participa en eventos especiales, competencias y actividades organizadas por el staff con premios increíbles."
              image="/assets/events-celebration.jpg"
            />
            <FeatureCard
              icon={Shield}
              title="Protección de Terrenos"
              description="Protege tus construcciones y recursos con nuestro sistema de protección de terrenos fácil de usar y confiable."
              image="/assets/protection-shield.jpg"
            />
            <FeatureCard
              icon={Users}
              title="Staff Activo"
              description="Nuestro equipo de moderadores y administradores está siempre disponible para ayudarte y mantener un ambiente sano."
            />
            <FeatureCard
              icon={Shield}
              title="Anticheat y Estabilidad"
              description="Servidor protegido contra trampas con excelente rendimiento y uptime para que juegues sin interrupciones."
            />
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-20 px-4 bg-[#0F1D32]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Tienda
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-4"></div>
            <p className="text-xl text-[#94A3B8] mb-2">Apoya al servidor y obtén beneficios exclusivos</p>
            <p className="text-sm text-[#94A3B8] italic">⚠️ Nuestra tienda NO es pay-to-win. Solo ofrecemos ventajas cosméticas y de conveniencia.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ShopCard
              title="VIP"
              price="$4.99"
              color="blue"
              features={[
                'Prefijo [VIP] en el chat',
                'Acceso a /fly en spawn',
                '2 homes adicionales',
                'Kit VIP semanal',
                'Colores en el chat'
              ]}
            />
            <ShopCard
              title="VIP+"
              price="$9.99"
              color="purple"
              popular
              features={[
                'Todo lo de VIP',
                'Prefijo [VIP+] exclusivo',
                '5 homes adicionales',
                'Kit VIP+ mejorado',
                'Partículas cosméticas',
                'Acceso a /hat'
              ]}
            />
            <ShopCard
              title="MVP"
              price="$19.99"
              color="orange"
              features={[
                'Todo lo de VIP+',
                'Prefijo [MVP] premium',
                '10 homes adicionales',
                'Kit MVP exclusivo',
                'Mascotas cosméticas',
                'Acceso a /nick',
                'Prioridad en la cola'
              ]}
            />
            <ShopCard
              title="Kit Starter"
              price="$2.99"
              color="green"
              features={[
                'Set de herramientas',
                'Armadura básica',
                'Comida inicial',
                'Bloques de construcción',
                'Perfecto para empezar'
              ]}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Preguntas Frecuentes
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-4"></div>
            <p className="text-xl text-[#94A3B8]">Resolvemos tus dudas</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            <FAQItem
              value="item-1"
              question="¿Qué versión de Minecraft usa HalarCraft?"
              answer="HalarCraft funciona en Minecraft Java Edition 1.20.x. Recomendamos usar la última versión estable para la mejor experiencia de juego."
            />
            <FAQItem
              value="item-2"
              question="¿Es premium o no premium?"
              answer="HalarCraft es un servidor premium. Necesitas tener una cuenta oficial de Minecraft Java Edition para poder jugar."
            />
            <FAQItem
              value="item-3"
              question="¿Cómo puedo unirme al Discord?"
              answer="Puedes unirte a nuestro Discord haciendo clic en el botón 'Entrar al Discord' en la parte superior de la página o en la sección de Discord más abajo. ¡Te esperamos!"
            />
            <FAQItem
              value="item-4"
              question="¿La tienda es pay-to-win?"
              answer="No, definitivamente no. Nuestra tienda solo ofrece ventajas cosméticas, de conveniencia y beneficios que no afectan el balance del juego. Todos los jugadores pueden disfrutar del servidor sin necesidad de comprar nada."
            />
            <FAQItem
              value="item-5"
              question="¿Cómo contacto al staff?"
              answer="Puedes contactar al staff a través de Discord, usando el comando /ticket en el servidor, o hablando directamente con cualquier moderador o administrador que esté en línea."
            />
            <FAQItem
              value="item-6"
              question="¿Puedo crear mi propia tienda o negocio?"
              answer="¡Por supuesto! Fomentamos el comercio entre jugadores. Puedes crear tu propia tienda, establecer precios y comerciar libremente con otros jugadores usando nuestra economía del servidor."
            />
          </Accordion>
        </div>
      </section>

      {/* AI Section */}
      <section id="ai" className="py-20 px-4 bg-[#0F1D32]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">
              Asistente IA de HalarCraft
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-600 mx-auto mb-4"></div>
            <p className="text-xl text-[#94A3B8]">Tu ayudante inteligente 24/7</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <p className="text-lg text-[#94A3B8] leading-relaxed">
                Nuestro asistente de IA está diseñado para ayudarte en todo momento. Ya sea que necesites ayuda con comandos, guías del servidor o resolver dudas, nuestra IA está aquí para ti.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-[#1A2942] p-4 rounded-lg">
                  <Bot className="text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Ayuda con Comandos</h3>
                    <p className="text-[#94A3B8] text-sm">Aprende a usar todos los comandos del servidor de forma rápida y sencilla.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-[#1A2942] p-4 rounded-lg">
                  <MessageCircle className="text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Guías del Servidor</h3>
                    <p className="text-[#94A3B8] text-sm">Obtén guías detalladas sobre economía, protecciones, eventos y más.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-[#1A2942] p-4 rounded-lg">
                  <Sparkles className="text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Soporte 24/7</h3>
                    <p className="text-[#94A3B8] text-sm">Resuelve tus dudas en cualquier momento, incluso cuando el staff no está disponible.</p>
                  </div>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:opacity-90 text-white font-bold text-lg py-6">
                Hablar con la IA
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="/assets/ai-robot.jpg" 
                alt="AI Assistant"
                className="rounded-lg shadow-2xl shadow-purple-500/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
              Cómo Unirse
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-600 mx-auto mb-4"></div>
            <p className="text-xl text-[#94A3B8]">Empieza tu aventura en 3 simples pasos</p>
          </div>
          <div className="bg-[#1A2942] rounded-xl p-8 mb-8 border border-[#2A3F5F]">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">IP del Servidor</h3>
              <div className="flex items-center justify-center gap-3 bg-[#0A1628] px-6 py-4 rounded-lg max-w-md mx-auto">
                <code className="text-2xl font-mono text-blue-400 font-bold">{serverIP}</code>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={copyIP}
                  className="hover:bg-blue-500/10"
                >
                  {copied ? <Check className="text-green-400" /> : <Copy className="text-blue-400" />}
                </Button>
              </div>
              <p className="text-[#94A3B8] mt-3">Versión: <span className="text-blue-400 font-semibold">1.20.x</span></p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#1A2942] p-6 rounded-lg text-center border border-[#2A3F5F] hover:border-blue-500 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Abre Minecraft</h3>
              <p className="text-[#94A3B8]">Inicia Minecraft Java Edition versión 1.20.x</p>
            </div>
            <div className="bg-[#1A2942] p-6 rounded-lg text-center border border-[#2A3F5F] hover:border-blue-500 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Multijugador</h3>
              <p className="text-[#94A3B8]">Ve a Multijugador y haz clic en "Añadir Servidor"</p>
            </div>
            <div className="bg-[#1A2942] p-6 rounded-lg text-center border border-[#2A3F5F] hover:border-blue-500 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Conectar</h3>
              <p className="text-[#94A3B8]">Ingresa la IP y únete a la aventura</p>
            </div>
          </div>
        </div>
      </section>

      {/* Discord Section */}
      <section id="discord" className="py-20 px-4 bg-[#0F1D32]">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-[#5865F2] to-[#7289DA] rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <img 
                src="/assets/discord-community.jpg" 
                alt="Discord Community"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <MessageCircle className="w-20 h-20 mx-auto mb-6 text-white" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Únete a Nuestra Comunidad
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Conecta con otros jugadores, participa en eventos, recibe noticias y obtén soporte directo del staff en nuestro servidor de Discord.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-[#5865F2] hover:bg-white/90 font-bold text-lg px-10 py-6"
              >
                Entrar al Discord
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A1628] border-t border-[#2A3F5F] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/assets/halarcraftlogo_variant_2.png" alt="HalarCraft" className="h-10 w-10" />
                <span className="text-2xl font-bold text-white">HalarCraft</span>
              </div>
              <p className="text-[#94A3B8]">
                Un servidor survival donde la aventura no tiene límites. Únete a nuestra comunidad hoy.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-[#94A3B8] hover:text-blue-400 transition-colors">Características</a></li>
                <li><a href="#shop" className="text-[#94A3B8] hover:text-blue-400 transition-colors">Tienda</a></li>
                <li><a href="#faq" className="text-[#94A3B8] hover:text-blue-400 transition-colors">FAQ</a></li>
                <li><a href="#join" className="text-[#94A3B8] hover:text-blue-400 transition-colors">Unirse</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Comunidad</h3>
              <ul className="space-y-2">
                <li><a href="#discord" className="text-[#94A3B8] hover:text-blue-400 transition-colors">Discord</a></li>
                <li><a href="#ai" className="text-[#94A3B8] hover:text-blue-400 transition-colors">Asistente IA</a></li>
                <li><span className="text-[#94A3B8]">IP: {serverIP}</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#2A3F5F] pt-8 text-center text-[#94A3B8]">
            <p className="mb-2">© 2024 HalarCraft. Todos los derechos reservados.</p>
            <p className="text-sm">HalarCraft no está afiliado con Mojang AB ni Microsoft Corporation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
                  }
              
