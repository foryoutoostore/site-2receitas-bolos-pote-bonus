import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { img_cremoso_1 } from "@/lib/images";
import { img_abacaxi_1 } from "@/lib/images";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-body">
      <Header />

      <main className="pt-[72px]"> {/* Compensar altura do header fixo */}
        
        {/* Hero Section - FULL WIDTH */}
        <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
          {/* Imagem de fundo Full Width */}
          <img
            src={img_cremoso_1}
            alt="Bolo de Pote"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/40" /> {/* Overlay escuro para leitura */}
          
          {/* Conteúdo Centralizado */}
          <div className="relative h-full container flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-[#e3c093] mb-2 drop-shadow-xl uppercase tracking-wide">
              BOLOS DE POTE
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-[#ff7300] mb-6 drop-shadow-xl uppercase tracking-wide">
              2 RECEITA$ GRÁTIS
            </h2>
            <p className="text-xl md:text-2xl text-white font-bold tracking-widest mb-10 drop-shadow-md uppercase">
              FÁCEIS DE FAZER E VENDER
            </p>
            
            <a 
              href="#receitas"
              className="bg-[#ff7300] hover:bg-[#e66000] text-white font-bold py-4 px-10 rounded-full text-lg md:text-xl transition-all shadow-2xl uppercase tracking-wider transform hover:scale-105"
            >
              Sua Renda Extra Começa Agora!
            </a>
          </div>
        </section>

        {/* Faixa Motivacional - FULL WIDTH BEGE */}
        <section className="w-full bg-[#e3c093] py-16">
          <div className="container text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#944300] mb-8 uppercase tracking-wide">
              COMECE HOJE, DA SUA COZINHA
            </h2>
            <p className="text-lg md:text-xl text-[#452717] font-bold leading-relaxed max-w-4xl mx-auto">
              Você não precisa de equipamentos caros. Com essas duas receitas campeãs de vendas, 
              você pode começar seu negócio de bolos de pote agora mesmo. 
              São receitas testadas, aprovadas e altamente lucrativas!
            </p>
          </div>
        </section>

        {/* Recipes Grid - Fundo Preto */}
        <section id="receitas" className="w-full bg-black py-20">
          <div className="container px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Card 1 */}
              <Link href="/receita/cremoso-formigueiro">
                <a className="group block">
                  <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl mb-6 border-2 border-transparent group-hover:border-[#ff7300] transition-all duration-300">
                    <img 
                      src={img_cremoso_1} 
                      alt="Cremoso Formigueiro" 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute top-6 left-6 bg-[#ff7300] text-white w-12 h-12 flex items-center justify-center rounded-full font-bold text-2xl shadow-lg">
                      1
                    </div>
                  </div>
                  <div className="text-center px-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#ff7300] mb-3 uppercase tracking-wide">
                      CREMOSO FORMIGUEIRO
                    </h3>
                    <p className="text-[#e3c093] text-lg font-medium leading-relaxed mb-4">
                      O clássico bolo formigueiro com um recheio cremoso irresistível. Sucesso garantido!
                    </p>
                    <div className="inline-block text-[#ff7300] font-bold border-b-2 border-[#ff7300] pb-1 uppercase tracking-wider group-hover:text-white group-hover:border-white transition-colors">
                      VER RECEITA COMPLETA
                    </div>
                  </div>
                </a>
              </Link>

              {/* Card 2 */}
              <Link href="/receita/abacaxi-docura">
                <a className="group block">
                  <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl mb-6 border-2 border-transparent group-hover:border-[#ff7300] transition-all duration-300">
                    <img 
                      src={img_abacaxi_1} 
                      alt="Abacaxi Doçura" 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute top-6 left-6 bg-[#ff7300] text-white w-12 h-12 flex items-center justify-center rounded-full font-bold text-2xl shadow-lg">
                      2
                    </div>
                  </div>
                  <div className="text-center px-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#ff7300] mb-3 uppercase tracking-wide">
                      ABACAXI DOÇURA
                    </h3>
                    <p className="text-[#e3c093] text-lg font-medium leading-relaxed mb-4">
                      Refrescante e tropical. A combinação perfeita do azedinho do abacaxi com creme suave.
                    </p>
                    <div className="inline-block text-[#ff7300] font-bold border-b-2 border-[#ff7300] pb-1 uppercase tracking-wider group-hover:text-white group-hover:border-white transition-colors">
                      VER RECEITA COMPLETA
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
