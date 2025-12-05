import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown, Clock, DollarSign, Users, ChefHat, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "wouter";

export interface RecipeSection {
  title: string;
  content: string | string[];
  type?: "list" | "text" | "steps";
}

export interface RecipeData {
  title: string;
  color: string;
  accentColor: string;
  stats: {
    yield: string;
    time: string;
    cost: string;
    difficulty: string;
  };
  images: [string, string, string];
  sections: RecipeSection[];
}

interface RecipePageProps {
  data: RecipeData;
}

export default function RecipePage({ data }: RecipePageProps) {
  const [openSections, setOpenSections] = useState<number[]>([0, 1, 2, 3]); // Primeiras seções abertas por padrão

  const toggleSection = (index: number) => {
    setOpenSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body pb-20">
      <Header />
      
      {/* Recipe Header */}
      <div className="pt-24 pb-8 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
             style={{ background: `radial-gradient(circle at center, ${data.color}, transparent 70%)` }} />
        
        <Link href="/">
          <a className="inline-flex items-center gap-2 text-sm font-bold tracking-widest mb-6 hover:text-primary transition-colors opacity-60 hover:opacity-100">
            <ArrowLeft size={16} /> VOLTAR PARA O MENU
          </a>
        </Link>

        <h1 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tight mb-4" style={{ color: data.color }}>
          {data.title}
        </h1>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8 text-sm font-medium">
          <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-white/5">
            <Users size={16} style={{ color: data.accentColor }} />
            <span>{data.stats.yield}</span>
          </div>
          <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-white/5">
            <Clock size={16} style={{ color: data.accentColor }} />
            <span>{data.stats.time}</span>
          </div>
          <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-white/5">
            <DollarSign size={16} style={{ color: data.accentColor }} />
            <span>{data.stats.cost}</span>
          </div>
          <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-white/5">
            <ChefHat size={16} style={{ color: data.accentColor }} />
            <span>{data.stats.difficulty}</span>
          </div>
        </div>
      </div>

      <div className="container max-w-3xl mx-auto space-y-6">
        {/* Main Image */}
        <div className="rounded-2xl overflow-hidden shadow-2xl mb-12 border border-white/10 aspect-video relative group">
          <img 
            src={data.images[0]} 
            alt={data.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
        </div>

        {/* Sections */}
        {data.sections.map((section, index) => {
          const isOpen = openSections.includes(index);
          
          // Inserir imagens entre seções específicas (exemplo: após ingredientes e após passo a passo)
          const showImage2 = index === 3; // Após preparando ingredientes
          const showImage3 = index === 5; // Após passo a passo

          return (
            <div key={index} className="animate-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${index * 50}ms` }}>
              <div 
                className="bg-card rounded-xl overflow-hidden border border-white/5 shadow-lg transition-all duration-300 hover:border-white/10"
              >
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
                >
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide" style={{ color: data.accentColor }}>
                    {section.title}
                  </h3>
                  <ChevronDown 
                    className={cn("transition-transform duration-300", isOpen && "rotate-180")} 
                    style={{ color: data.accentColor }}
                  />
                </button>
                
                <div 
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="p-5 pt-0 text-base leading-relaxed text-card-foreground/90">
                      {Array.isArray(section.content) ? (
                        <ul className="space-y-3">
                          {section.content.map((item, i) => (
                            <li key={i} className="flex gap-3">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: data.accentColor }} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="whitespace-pre-wrap">{section.content}</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Interstitial Images */}
              {showImage2 && (
                <div className="my-8 rounded-xl overflow-hidden shadow-xl border border-white/10 aspect-[21/9]">
                  <img src={data.images[1]} alt="Detalhe da receita" className="w-full h-full object-cover" />
                </div>
              )}
              {showImage3 && (
                <div className="my-8 rounded-xl overflow-hidden shadow-xl border border-white/10 aspect-[21/9]">
                  <img src={data.images[2]} alt="Resultado final" className="w-full h-full object-cover" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}
