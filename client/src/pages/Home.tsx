import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RecipeCard from "@/components/RecipeCard";
import { img_cremoso_1 } from "@/lib/images";
import { img_abacaxi_1 } from "@/lib/images";
import { ArrowDown, ChefHat } from "lucide-react";

export default function Home() {
  const scrollToRecipes = () => {
    const element = document.getElementById("receitas");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body selection:bg-primary selection:text-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Background Image with Blur */}
          <div className="absolute inset-0 z-0">
            <img
              src={img_cremoso_1}
              alt="Bolo de Pote Fundo"
              className="w-full h-full object-cover opacity-40 blur-sm scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
          </div>

          {/* Content */}
          <div className="relative z-10 container text-center flex flex-col items-center gap-6 animate-in fade-in zoom-in duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs font-bold tracking-[0.2em] text-secondary uppercase mb-4">
              <ChefHat size={14} />
              Curso Gratuito
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none drop-shadow-2xl">
              BOLOS DE POTE
            </h1>
            
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-2xl md:text-4xl font-bold">
              <span className="text-white">2 RECEITA<span className="text-primary">$</span> GRÁTIS</span>
            </div>

            <p className="text-lg md:text-xl text-white/80 font-light tracking-widest max-w-2xl mt-2">
              FÁCEIS DE FAZER E VENDER
            </p>

            <button
              onClick={scrollToRecipes}
              className="mt-8 px-8 py-4 bg-primary hover:bg-primary/90 text-white text-lg font-bold rounded-full shadow-[0_0_30px_-5px_rgba(230,81,0,0.6)] hover:shadow-[0_0_50px_-5px_rgba(230,81,0,0.8)] transition-all duration-300 transform hover:scale-105 flex items-center gap-3 group"
            >
              Sua Renda Extra Começa Agora!
              <ArrowDown className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </section>

        {/* Motivational Section */}
        <section className="py-20 bg-[#F5F5DC] text-black relative overflow-hidden">
          <div className="container text-center relative z-10">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 text-[#111111]">
              COMECE HOJE, DA SUA COZINHA
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl font-medium leading-relaxed text-[#452717]">
              <p>
                Você não precisa de equipamentos caros ou ingredientes difíceis de encontrar.
                Tudo o que você precisa é vontade de aprender e colocar a mão na massa.
              </p>
              <p>
                Essas duas receitas foram selecionadas a dedo: são as <strong>mais vendidas</strong>,
                as <strong>mais lucrativas</strong> e as que conquistam clientes na primeira colherada.
              </p>
              <p className="font-hand text-3xl text-primary mt-8 transform -rotate-2">
                Transforme sua paixão em lucro!
              </p>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-background to-transparent opacity-20" />
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-background to-transparent opacity-20" />
        </section>

        {/* Recipes Grid */}
        <section id="receitas" className="py-24 container">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <RecipeCard
              number="1"
              title="Cremoso Formigueiro"
              description="A combinação clássica e nostálgica que agrada a todos. Massa fofinha com granulado e um creme suave irresistível."
              image={img_cremoso_1}
              href="/receita/cremoso-formigueiro"
              color="secondary"
            />
            
            <RecipeCard
              number="2"
              title="Abacaxi Doçura"
              description="Refrescante, tropical e equilibrado. O azedinho do abacaxi com o doce do creme cria uma experiência gourmet única."
              image={img_abacaxi_1}
              href="/receita/abacaxi-docura"
              color="primary"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
