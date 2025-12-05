import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { img_cremoso_1, img_cremoso_2, img_cremoso_3 } from "@/lib/images";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CremosoFormigueiro() {
  // Estado para controlar quais seções estão abertas
  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setOpenSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  // Dados exatos do HTML original
  const sections = [
    {
      title: "INFORMAÇÕES",
      content: `Rendimento: 8 potes de 200 ml
Grau de dificuldade: Fácil
Custo: Baixo
Tempo de preparo: 1 hora e 10 minutos (inclui resfriamento)`
    },
    {
      title: "LISTA DE INGREDIENTES",
      content: `Para a Massa Formigueiro:
• 4 ovos
• 2 xícaras de açúcar
• 2 e 1/2 xícaras de farinha de trigo
• 1 colher (sopa) de manteiga sem sal
• 1 xícara de leite quente
• 1 pitada de sal
• 1 colher (sopa) de fermento em pó
• 1/2 xícara de chocolate granulado

Para o Creme Branco Suave:
• 1 lata de leite condensado (395g)
• 1 caixa de creme de leite (200g)
• 1 colher (sopa) de amido de milho
• 1 xícara de leite
• 1 colher (chá) de essência de baunilha

Para a Calda Suave:
• 1/2 xícara de leite
• 1 colher (sopa) de açúcar

Para a Finalização:
• 2 colheres (sopa) de chocolate granulado`
    },
    {
      title: "PREPARANDO OS INGREDIENTES",
      content: `• Misture o granulado (bolinhas de chocolate) na massa apenas no final, para não derreter.
• Deixe o creme e a massa completamente frios antes de montar os potes.
• Peneire os ingredientes secos para obter uma massa mais leve e fofinha.`
    },
    // FOTO 1 AQUI (img_cremoso_1)
    {
      title: "PASSO A PASSO",
      content: `Massa:
1- Aqueça o forno a 180ºC. Unte a forma com óleo e polvilhe farinha por cima.
2- Bata os ovos e o açúcar até virar um creme claro.
3- Misture o leite quente com a manteiga e coloque no creme.
4- Acrescente a farinha, o sal e o fermento já peneirados.
5- Misture com calma.
6- Coloque o chocolate granulado e misture rapidinho.
7- Leve ao forno por cerca de 30 a 35 minutos. Deixe esfriar e esfarele.

Creme Branco Suave:
1- Misture o leite, o amido de milho (maisena) e o leite condensado.
2- Cozinhe em fogo baixo até engrossar.
3- Desligue e misture o creme de leite e a baunilha (líquido com cheiro doce usado em doces).
4- Use frio.

Calda:
1- Misture o leite e o açúcar até o açúcar dissolver.

Montagem:
1- Coloque uma camada de bolo esfarelado no fundo do pote.
2- Regue devagar com a calda.
3- Coloque o creme branco.
4- Repita as camadas até chegar no topo do pote.
5- Finalize com creme e granulado por cima.
6- Leve à geladeira por 2 horas.`
    },
    {
      title: "DICAS DE CHEF",
      content: `• Use granulado de boa qualidade para não derreter na massa.
• O contraste do creme branco com os pontinhos da massa cria apelo visual (fica bonito e chama atenção).
• Creme frio é indispensável para não desmontar o pote.`
    },
    // FOTO 2 AQUI (img_cremoso_2)
    {
      title: "LISTA DE UTENSÍLIOS",
      content: `• Tigela grande
• Peneira
• Panela grossa
• Espátula de silicone
• Forma média
• Potes de 200 ml com tampa
• Medidores de cozinha`
    },
    {
      title: "SUGESTÕES DE SUBSTITUIÇÕES",
      content: `• Granulado: pode usar gotas pequenas de chocolate.
• Baunilha: pode usar raspas de limão.
• Leite integral: pode ser semidesnatado (com menos gordura).`
    },
    {
      title: "OCASIÕES IDEAIS PARA SERVIR OU VENDER",
      content: `Ideal para vitrines infantis, eventos, festas, kits econômicos e vendas em grande volume. Sabor divertido e acessível, sempre com alta aceitação.`
    },
    {
      title: "SUGESTÃO DE HARMONIZAÇÃO (BEBIDAS)",
      content: `Combina com leite gelado, achocolatado ou café suave.`
    },
    {
      title: "SUGESTÕES DE EMBALAGENS",
      content: `Opção Econômica:
Potes plásticos de 200 ml.

Opção Gourmet:
Potes de vidro com tampa colorida e rótulo divertido.`
    },
    {
      title: "IDEIAS PARA REDES SOCIAIS",
      content: `1) O clássico formigueiro em versão cremosa!
2) Pontinhos de chocolate em cada camada.
3) Doce, leve e super nostálgico.
4) O pote mais divertido do cardápio.
5) Cremoso, macio e impossível de resistir.`
    },
    // FOTO 3 AQUI (img_cremoso_3)
    {
      title: "DICAS QUE FAZEM A DIFERENÇA",
      content: `• Adicione o granulado por último para evitar que derreta.
• Creme e massa frios garantem camadas perfeitas.
• Este pote vende muito por unir nostalgia (lembranças boas), simplicidade e sabor marcante.`
    }
  ];

  return (
    <div className="min-h-screen bg-[#2f1c0c] text-[#452717] font-sans">
      <Header />
      
      <div className="max-w-[768px] mx-auto p-5 pt-24 pb-10">
        {/* Título da Receita */}
        <h1 className="text-[25px] md:text-[40px] leading-[1.2] font-bold text-[#944300] text-center uppercase py-[30px] px-[20px]">
          CREMOSO FORMIGUEIRO
        </h1>

        {/* Renderização das Seções */}
        {sections.map((section, index) => {
          const isOpen = openSections.includes(index);
          
          return (
            <div key={index}>
              {/* Card da Seção */}
              <div className="bg-[#e3c093] rounded-[16px] mb-[20px] overflow-hidden relative">
                <div 
                  className="p-[20px] flex items-center gap-[12px] cursor-pointer"
                  onClick={() => toggleSection(index)}
                >
                  <ChevronDown 
                    className={cn(
                      "w-[18px] h-[18px] text-[#ff7300] transition-transform duration-300 flex-shrink-0 drop-shadow-md",
                      isOpen ? "rotate-0" : "-rotate-90"
                    )} 
                    strokeWidth={4}
                  />
                  <h2 className="text-[22px] md:text-[24px] leading-[1.2] font-bold text-[#944300] uppercase flex-1">
                    {section.title}
                  </h2>
                </div>
                
                <div 
                  className={cn(
                    "px-[20px] pb-[20px] text-[17px] md:text-[16px] leading-[1.7] font-bold whitespace-pre-wrap break-words transition-all duration-300 ease-in-out",
                    isOpen ? "block opacity-100 translate-y-0" : "hidden opacity-0 -translate-y-2"
                  )}
                >
                  {section.content}
                </div>
              </div>

              {/* Inserção de Imagens */}
              {index === 2 && (
                <div className="w-full rounded-[16px] overflow-hidden mb-[20px]">
                  <img src={img_cremoso_1} alt="Bolo Formigueiro" className="w-full h-auto object-cover block" />
                </div>
              )}
              {index === 4 && (
                <div className="w-full rounded-[16px] overflow-hidden mb-[20px]">
                  <img src={img_cremoso_2} alt="Detalhe do Recheio" className="w-full h-auto object-cover block" />
                </div>
              )}
              {index === 10 && (
                <div className="w-full rounded-[16px] overflow-hidden mb-[20px]">
                  <img src={img_cremoso_3} alt="Bolo Pronto" className="w-full h-auto object-cover block" />
                </div>
              )}
            </div>
          );
        })}

        {/* Footer da Receita */}
        <div className="max-w-[800px] mx-auto mt-[24px] px-[20px] pb-[24px] text-[10px] leading-[12px] italic font-normal text-[#452717] opacity-70 text-center">
          © 2025 appRECEITA$ e foryoutoo.click • Todas as fotos são meramente ilustrativas, feitas por IA.
        </div>
      </div>

      <Footer />
    </div>
  );
}
