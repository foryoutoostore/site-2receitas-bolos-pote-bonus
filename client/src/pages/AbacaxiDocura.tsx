import RecipePage, { RecipeData } from "@/components/RecipePage";
import { img_abacaxi_1, img_abacaxi_2, img_abacaxi_3 } from "@/lib/images";

const data: RecipeData = {
  title: "ABACAXI DOÇURA",
  color: "#944300", // Laranja Escuro (Títulos)
  images: [img_abacaxi_1, img_abacaxi_2, img_abacaxi_3],
  sections: [
    {
      title: "INFORMAÇÕES",
      type: "text",
      content: [
        "Rendimento: 8 potes de 200 ml",
        "Grau de dificuldade: Fácil",
        "Custo: Médio",
        "Tempo de preparo: 1 hora e 20 minutos (inclui resfriamento)"
      ]
    },
    {
      title: "LISTA DE INGREDIENTES",
      type: "list",
      content: [
        "Para a Massa Branca Fofa:",
        "• 4 ovos",
        "• 2 xícaras de açúcar",
        "• 2 e 1/2 xícaras de farinha de trigo",
        "• 1 colher (sopa) de manteiga sem sal",
        "• 1 xícara de leite quente",
        "• 1 pitada de sal",
        "• 1 colher (sopa) de fermento em pó",
        "",
        "Para o Creme Doce de Abacaxi:",
        "• 2 latas de leite condensado (395g cada)",
        "• 1 caixa de creme de leite (200g)",
        "• 2 colheres (sopa) de amido de milho",
        "• 2 xícaras de leite integral",
        "• 1 colher (chá) de essência de baunilha",
        "",
        "Para o Abacaxi Cozido:",
        "• 2 xícaras de abacaxi picado",
        "• 3 colheres (sopa) de açúcar",
        "• 1 colher (sopa) de água",
        "",
        "Para a Calda Leve:",
        "• 1/2 xícara de leite",
        "• 1 colher (sopa) de açúcar"
      ]
    },
    {
      title: "PREPARANDO OS INGREDIENTES",
      type: "text",
      content: [
        "• Pique o abacaxi em cubinhos pequenos.",
        "• O creme precisa estar totalmente frio antes de montar os potes.",
        "• Deixe a massa esfriar por completo para não perder a textura."
      ]
    },
    {
      title: "PASSO A PASSO",
      type: "steps",
      content: [
        "Massa:",
        "1- Aqueça o forno a 180ºC. Unte a forma com óleo e polvilhe farinha por cima.",
        "2- Bata os ovos e o açúcar até virar um creme claro.",
        "3- Misture o leite quente com a manteiga e coloque no creme.",
        "4- Acrescente a farinha, o sal e o fermento já peneirados.",
        "5- Misture com calma.",
        "6- Leve ao forno por cerca de 30 a 35 minutos. Deixe esfriar e esfarele.",
        "",
        "Creme Doce de Abacaxi:",
        "1- Misture o leite, o amido de milho (maisena) e o leite condensado.",
        "2- Cozinhe em fogo baixo, mexendo sem parar.",
        "3- Quando engrossar, desligue e misture o creme de leite e a baunilha (líquido com cheiro doce usado em doces).",
        "4- Deixe esfriar totalmente.",
        "",
        "Abacaxi Cozido:",
        "1- Coloque o abacaxi, o açúcar e a água em uma panela no fogo baixo.",
        "2- Cozinhe até formar uma calda leve, sem deixar o abacaxi desmanchar.",
        "3- Espere esfriar.",
        "",
        "Calda:",
        "1- Misture o leite e o açúcar até o açúcar dissolver.",
        "",
        "Montagem:",
        "1- Coloque uma camada de bolo esfarelado no fundo do pote.",
        "2- Regue com a calda.",
        "3- Coloque o creme.",
        "4- Acrescente uma colher do abacaxi cozido.",
        "5- Repita as camadas até chegar no topo do pote.",
        "6- Leve para gelar por 2 horas."
      ]
    },
    {
      title: "DICAS DE CHEF",
      type: "text",
      content: [
        "• Abacaxi cru pode talhar o creme (fazer ele desandar). Sempre use cozido.",
        "• Creme quente derrete a massa. Use sempre frio.",
        "• Se quiser mais acidez (gosto azedinho), adicione algumas gotas de limão ao abacaxi."
      ]
    },
    {
      title: "LISTA DE UTENSÍLIOS",
      type: "list",
      content: [
        "• Tigela grande",
        "• Peneira",
        "• Panela média",
        "• Espátula de silicone",
        "• Forma média",
        "• Potes de 200 ml com tampa",
        "• Medidores de cozinha"
      ]
    },
    {
      title: "SUGESTÕES DE SUBSTITUIÇÕES",
      type: "text",
      content: [
        "• Abacaxi fresco: pode usar o de lata, mas escorra bem a água.",
        "• Baunilha: pode trocar por raspas de limão.",
        "• Leite integral: pode ser semidesnatado (com menos gordura)."
      ]
    },
    {
      title: "OCASIÕES IDEAIS PARA SERVIR OU VENDER",
      type: "text",
      content: "Ótimo para dias quentes, vendas em feiras, entrega em casa e sobremesas individuais. O sabor tropical agrada muito."
    },
    {
      title: "SUGESTÃO DE HARMONIZAÇÃO (BEBIDAS)",
      type: "text",
      content: "Combina com suco natural, água de coco ou chá gelado."
    },
    {
      title: "SUGESTÕES DE EMBALAGENS",
      type: "text",
      content: [
        "Opção Econômica:",
        "Potes plásticos simples de 200 ml.",
        "",
        "Opção Gourmet:",
        "Potes de vidro com tampa de metal e rótulo tropical (com desenhos de praia, folhas)."
      ]
    },
    {
      title: "IDEIAS PARA REDES SOCIAIS",
      type: "text",
      content: [
        "1) O sabor tropical que refresca e conquista.",
        "2) Abacaxi cremoso como você nunca provou.",
        "3) Cada colherada é um mergulho no verão.",
        "4) Leve, doce e impossível de resistir.",
        "5) O pote mais refrescante da sua vitrine."
      ]
    },
    {
      title: "DICAS QUE FAZEM A DIFERENÇA",
      type: "text",
      content: [
        "• Sempre use o abacaxi cozido para evitar acidez excessiva (muito azedo).",
        "• Respeite os tempos de resfriamento para garantir camadas perfeitas.",
        "• Este pote tem alta aceitação por ser leve, cremoso e equilibrado."
      ]
    }
  ]
};

export default function AbacaxiDocura() {
  return <RecipePage data={data} />;
}
