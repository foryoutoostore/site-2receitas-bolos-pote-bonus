import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { img_abacaxi_1, img_abacaxi_2, img_abacaxi_3 } from "@/lib/images";
import { cn } from "@/lib/utils";

export default function AbacaxiDocura() {
  // Estado para controlar quais seções estão abertas
  const [openSections, setOpenSections] = useState<number[]>([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

  const toggleSection = (index: number) => {
    setOpenSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  // Dados exatos do HTML original (pasted_content_2.txt)
  const sections = [
    {
      title: "INFORMAÇÕES",
      content: `Rendimento: 8 potes de 200 ml
Grau de dificuldade: Fácil
Custo: Médio
Tempo de preparo: 1 hora e 20 minutos (inclui resfriamento)`
    },
    {
      title: "LISTA DE INGREDIENTES",
      content: `Para a Massa Branca Fofa:
• 4 ovos
• 2 xícaras de açúcar
• 2 e 1/2 xícaras de farinha de trigo
• 1 colher (sopa) de manteiga sem sal
• 1 xícara de leite quente
• 1 pitada de sal
• 1 colher (sopa) de fermento em pó

Para o Creme Doce de Abacaxi:
• 2 latas de leite condensado (395g cada)
• 1 caixa de creme de leite (200g)
• 2 colheres (sopa) de amido de milho
• 2 xícaras de leite integral
• 1 colher (chá) de essência de baunilha

Para o Abacaxi Cozido:
• 2 xícaras de abacaxi picado
• 3 colheres (sopa) de açúcar
• 1 colher (sopa) de água

Para a Calda Leve:
• 1/2 xícara de leite
• 1 colher (sopa) de açúcar`
    },
    {
      title: "PREPARANDO OS INGREDIENTES",
      content: `• Pique o abacaxi em cubinhos pequenos.
• O creme precisa estar totalmente frio antes de montar os potes.
• Deixe a massa esfriar por completo para não perder a textura.`
    },
    {
      title: "PASSO A PASSO",
      content: `Massa:
1- Aqueça o forno a 180ºC. Unte a forma com óleo e polvilhe farinha por cima.
2- Bata os ovos e o açúcar até virar um creme claro.
3- Misture o leite quente com a manteiga e coloque no creme.
4- Acrescente a farinha, o sal e o fermento já peneirados.
5- Misture com calma.
6- Leve ao forno por cerca de 30 a 35 minutos. Deixe esfriar e esfarele.

Creme Doce de Abacaxi:
1- Misture o leite, o amido de milho (maisena) e o leite condensado.
2- Cozinhe em fogo baixo, mexendo sem parar.
3- Quando engrossar, desligue e misture o creme de leite e a baunilha (líquido com cheiro doce usado em doces).
4- Deixe esfriar totalmente.

Abacaxi Cozido:
1- Coloque o abacaxi, o açúcar e a água em uma panela no fogo baixo.
2- Cozinhe até formar uma calda leve, sem deixar o abacaxi desmanchar.
3- Espere esfriar.

Calda:
1- Misture o leite e o açúcar até o açúcar dissolver.

Montagem:
1- Coloque uma camada de bolo esfarelado no fundo do pote.
2- Regue com a calda.
3- Coloque o creme.
4- Acrescente uma colher do abacaxi cozido.
5- Repita as camadas até chegar no topo do pote.
6- Leve para gelar por 2 horas.`
    },
    {
      title: "DICAS DE CHEF",
      content: `<span style="color: rgb(255, 255, 255);">• </span>Abacaxi cru pode talhar o creme (fazer ele desandar). Sempre use cozido.
<span style="color: rgb(255, 255, 255);">• </span>Creme quente derrete a massa. Use sempre frio.
<span style="color: rgb(255, 255, 255);">• </span>Se quiser mais acidez (gosto azedinho), adicione algumas gotas de limão ao abacaxi.`
    },
    {
      title: "LISTA DE UTENSÍLIOS",
      content: `<span style="color: rgb(255, 255, 255);">• </span>Tigela grande
<span style="color: rgb(255, 255, 255);">• </span>Peneira
<span style="color: rgb(255, 255, 255);">• </span>Panela média
<span style="color: rgb(255, 255, 255);">• </span>Espátula de silicone
<span style="color: rgb(255, 255, 255);">• </span>Forma média
<span style="color: rgb(255, 255, 255);">• </span>Potes de 200 ml com tampa
<span style="color: rgb(255, 255, 255);">• </span>Medidores de cozinha`
    },
    {
      title: "SUGESTÕES DE SUBSTITUIÇÕES",
      content: `<span style="color: rgb(255, 255, 255);">• </span>Abacaxi fresco: pode usar o de lata, mas escorra bem a água.
<span style="color: rgb(255, 255, 255);">• </span>Baunilha: pode trocar por raspas de limão.
<span style="color: rgb(255, 255, 255);">• </span>Leite integral: pode ser semidesnatado (com menos gordura).`
    },
    {
      title: "OCASIÕES IDEAIS PARA SERVIR OU VENDER",
      content: `Ótimo para dias quentes, vendas em feiras, entrega em casa e sobremesas individuais. O sabor tropical agrada muito.`
    },
    {
      title: "SUGESTÃO DE HARMONIZAÇÃO (BEBIDAS)",
      content: `Combina com suco natural, água de coco ou chá gelado.`
    },
    {
      title: "SUGESTÕES DE EMBALAGENS",
      content: `<span style="color: rgb(255, 255, 255);">Opção Econômica:</span>
Potes plásticos simples de 200 ml.

<span style="color: rgb(255, 255, 255);">Opção Gourmet:</span>
Potes de vidro com tampa de metal e rótulo tropical (com desenhos de praia, folhas).`
    },
    {
      title: "IDEIAS PARA REDES SOCIAIS",
      content: `<span style="color: rgb(255, 255, 255);">1) </span>O sabor tropical que refresca e conquista.
<span style="color: rgb(255, 255, 255);">2)</span> Abacaxi cremoso como você nunca provou.
<span style="color: rgb(255, 255, 255);">3) </span>Cada colherada é um mergulho no verão.
<span style="color: rgb(255, 255, 255);">4)</span> Leve, doce e impossível de resistir.
<span style="color: rgb(255, 255, 255);">5)</span> O pote mais refrescante da sua vitrine.`
    },
    {
      title: "DICAS QUE FAZEM A DIFERENÇA",
      content: `<span style="color: rgb(255, 255, 255);">• </span>Sempre use o abacaxi cozido para evitar acidez excessiva (muito azedo).
• <span style="color: rgb(255, 255, 255);">Respeite os tempos de resfriamento para garantir camadas perfeitas.</span>
<span style="color: rgb(255, 255, 255);">• </span>Este pote tem alta aceitação por ser leve, cremoso e equilibrado.`
    }
  ];

  return (
    <div className="min-h-screen bg-[#ffd952] text-[#120904] font-sans">
      <Header />
      
      <div className="max-w-[768px] mx-auto p-5 pt-24 pb-10">
        {/* Título da Receita */}
        <h1 className="text-[25px] md:text-[40px] leading-[1.2] font-bold text-[#ff6600] text-center uppercase py-[30px] px-[20px]">
          ABACAXI&nbsp; DOÇURA
        </h1>

        {/* Imagem 1 - Logo após o título */}
        <div className="w-full rounded-[16px] overflow-hidden mb-[20px]">
          <img src={img_abacaxi_1} alt="Bolo Abacaxi" className="w-full h-auto object-cover block" />
        </div>

        {/* Renderização das Seções */}
        {sections.map((section, index) => {
          const isOpen = openSections.includes(index);
          
          return (
            <div key={index}>
              {/* Card da Seção */}
              <div className="bg-[#db9400] rounded-[16px] mb-[20px] overflow-hidden relative">
                <div 
                  className="p-[20px] flex items-center gap-[12px] cursor-pointer"
                  onClick={() => toggleSection(index)}
                >
                  <svg 
                    className={cn(
                      "w-[18px] h-[18px] text-[#ff6600] transition-transform duration-300 flex-shrink-0 drop-shadow-md fill-[#ff6600]",
                      isOpen ? "rotate-0" : "-rotate-90"
                    )} 
                    viewBox="0 0 24 24"
                  >
                    <polygon points="12,18 2,6 22,6"/>
                  </svg>
                  <h2 className="text-[22px] md:text-[24px] leading-[1.2] font-bold text-[#ffffff] uppercase flex-1">
                    {section.title}
                  </h2>
                </div>
                
                <div 
                  className={cn(
                    "px-[20px] pb-[20px] text-[17px] md:text-[16px] leading-[1.7] font-bold whitespace-pre-wrap break-words transition-all duration-300 ease-in-out",
                    isOpen ? "block opacity-100 translate-y-0" : "hidden opacity-0 -translate-y-2"
                  )}
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </div>

              {/* Imagem 2 - Entre Passo a Passo (index 3) e Dicas de Chef (index 4) */}
              {index === 3 && (
                <div className="w-full rounded-[16px] overflow-hidden mb-[20px]">
                  <img src={img_abacaxi_2} alt="Detalhe do Doce" className="w-full h-auto object-cover block" />
                </div>
              )}

              {/* Imagem 3 - Entre Ocasiões Ideais (index 7) e Harmonização (index 8) */}
              {index === 7 && (
                <div className="w-full rounded-[16px] overflow-hidden mb-[20px]">
                  <img src={img_abacaxi_3} alt="Bolo Pronto" className="w-full h-auto object-cover block" />
                </div>
              )}
            </div>
          );
        })}

        {/* Footer da Receita */}
        <div className="max-w-[800px] mx-auto mt-[24px] px-[20px] pb-[24px] text-[10px] leading-[12px] italic font-normal text-[#120904] opacity-70 text-center">
          © 2025 appRECEITA$ e foryoutoo.click • Todas as fotos são meramente ilustrativas, feitas por IA.
        </div>
      </div>

      <Footer />
    </div>
  );
}
