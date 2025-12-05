import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { img_cremoso_1 } from "@/lib/images";
import { img_abacaxi_1 } from "@/lib/images";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Header />

      <main className="pt-20 pb-10">
        {/* Hero Section */}
        <section className="container text-center mb-12">
          <div className="relative rounded-2xl overflow-hidden mb-8 border-4 border-[#e3c093]">
            <img
              src={img_cremoso_1}
              alt="Bolo de Pote"
              className="w-full h-64 md:h-96 object-cover opacity-80"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#2f1c0c]/60 p-4">
              <h1 className="text-4xl md:text-6xl font-bold text-[#e3c093] mb-2 drop-shadow-lg">
                BOLOS DE POTE
              </h1>
              <h2 className="text-2xl md:text-4xl font-bold text-[#ff7300] mb-4 drop-shadow-lg">
                2 RECEITA$ GRÁTIS
              </h2>
              <p className="text-xl text-white font-bold tracking-wider mb-8 drop-shadow-md">
                FÁCEIS DE FAZER E VENDER
              </p>
              
              <a 
                href="#receitas"
                className="bg-[#ff7300] hover:bg-[#944300] text-white font-bold py-3 px-8 rounded-full text-lg transition-colors shadow-lg uppercase"
              >
                Sua Renda Extra Começa Agora!
              </a>
            </div>
          </div>
        </section>

        {/* Motivational Section */}
        <section className="container mb-12">
          <div className="bg-[#e3c093] text-[#452717] p-8 rounded-2xl text-center shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-[#944300] mb-6 uppercase">
              COMECE HOJE, DA SUA COZINHA
            </h2>
            <p className="text-lg font-bold leading-relaxed max-w-2xl mx-auto">
              Você não precisa de equipamentos caros. Com essas duas receitas campeãs de vendas, 
              você pode começar seu negócio de bolos de pote agora mesmo. 
              São receitas testadas, aprovadas e altamente lucrativas!
            </p>
          </div>
        </section>

        {/* Recipes Grid */}
        <section id="receitas" className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <Link href="/receita/cremoso-formigueiro">
              <a className="block bg-[#e3c093] rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300">
                <div className="relative h-48">
                  <img src={img_cremoso_1} alt="Cremoso Formigueiro" className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-[#ff7300] text-white w-10 h-10 flex items-center justify-center rounded-full font-bold text-xl shadow-md">
                    1
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-[#944300] mb-2 uppercase">
                    CREMOSO FORMIGUEIRO
                  </h3>
                  <p className="text-[#452717] font-bold">
                    O clássico bolo formigueiro com um recheio cremoso irresistível. Sucesso garantido!
                  </p>
                  <div className="mt-4 inline-block text-[#ff7300] font-bold border-b-2 border-[#ff7300]">
                    VER RECEITA COMPLETA
                  </div>
                </div>
              </a>
            </Link>

            {/* Card 2 */}
            <Link href="/receita/abacaxi-docura">
              <a className="block bg-[#e3c093] rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300">
                <div className="relative h-48">
                  <img src={img_abacaxi_1} alt="Abacaxi Doçura" className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-[#ff7300] text-white w-10 h-10 flex items-center justify-center rounded-full font-bold text-xl shadow-md">
                    2
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-[#944300] mb-2 uppercase">
                    ABACAXI DOÇURA
                  </h3>
                  <p className="text-[#452717] font-bold">
                    Refrescante e tropical. A combinação perfeita do azedinho do abacaxi com creme suave.
                  </p>
                  <div className="mt-4 inline-block text-[#ff7300] font-bold border-b-2 border-[#ff7300]">
                    VER RECEITA COMPLETA
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
