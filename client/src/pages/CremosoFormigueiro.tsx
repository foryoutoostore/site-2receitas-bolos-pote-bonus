import RecipePage, { RecipeData } from "@/components/RecipePage";
import { img_cremoso_1, img_cremoso_2, img_cremoso_3 } from "@/lib/images";

const data: RecipeData = {
  title: "CREMOSO FORMIGUEIRO",
  color: "#944300", // Laranja Escuro (Títulos)
  images: [img_cremoso_1, img_cremoso_2, img_cremoso_3],
  sections: [
    {
      title: "INFORMAÇÕES",
      type: "text",
      content: [
        "Rendimento: 8 potes de 200 ml",
        "Grau de dificuldade: Fácil",
        "Custo: Baixo",
        "Tempo de preparo: 1 hora e 10 minutos (inclui resfriamento)"
      ]
    },
    {
      title: "LISTA DE INGREDIENTES",
      type: "list",
      content: [
        "Para a Massa Formigueiro:",
        "• 4 ovos",
        "• 2 xícaras de açúcar",
        "• 2 e 1/2 xícaras de farinha de trigo",
        "• 1 colher (sopa) de manteiga sem sal",
        "• 1 xícara de leite quente",
        "• 1 pitada de sal",
        "• 1 colher (sopa) de fermento em pó",
        "• 1/2 xícara de chocolate granulado",
        "",
        "Para o Creme Branco Suave:",
        "• 1 lata de leite condensado (395g)",
        "• 1 caixa de creme de leite (200g)",
        "• 1 colher (sopa) de amido de milho",
        "• 1 xícara de leite",
        "• 1 colher (chá) de essência de baunilha",
        "",
        "Para a Calda Suave:",
        "• 1/2 xícara de leite",
        "• 1 colher (sopa) de açúcar",
        "",
        "Para a Finalização:",
        "• 2 colheres (sopa) de chocolate granulado"
      ]
    },
    {
      title: "PREPARANDO OS INGREDIENTES",
      type: "text",
      content: [
        "• Misture o granulado (bolinhas de chocolate) na massa apenas no final, para não derreter.",
        "• Deixe o creme e a massa completamente frios antes de montar os potes.",
        "• Peneire os ingredientes secos para obter uma massa mais leve e fofinha."
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
        "6- Coloque o chocolate granulado e misture rapidinho.",
        "7- Leve ao forno por cerca de 30 a 35 minutos. Deixe esfriar e esfarele.",
        "",
        "Creme Branco Suave:",
        "1- Misture o leite, o amido de milho (maisena) e o leite condensado.",
        "2- Cozinhe em fogo baixo até engrossar.",
        "3- Desligue e misture o creme de leite e a baunilha (líquido com cheiro doce usado em doces).",
        "4- Use frio.",
        "",
        "Calda:",
        "1- Misture o leite e o açúcar até o açúcar dissolver.",
        "",
        "Montagem:",
        "1- Coloque uma camada de bolo esfarelado no fundo do pote.",
        "2- Regue devagar com a calda.",
        "3- Coloque o creme branco.",
        "4- Repita as camadas até chegar no topo do pote.",
        "5- Finalize com creme e granulado por cima.",
        "6- Leve à geladeira por 2 horas."
      ]
    },
    {
      title: "DICAS DE CHEF",
      type: "text",
      content: [
        "• Use granulado de boa qualidade para não derreter na massa.",
        "• O contraste do creme branco com os pontinhos da massa cria apelo visual (fica bonito e chama atenção).",
        "• Creme frio é indispensável para não desmontar o pote."
      ]
    },
    {
      title: "LISTA DE UTENSÍLIOS",
      type: "list",
      content: [
        "• Tigela grande",
        "• Peneira",
        "• Panela grossa",
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
        "• Granulado: pode usar gotas pequenas de chocolate.",
        "• Baunilha: pode usar raspas de limão.",
        "• Leite integral: pode ser semidesnatado (com menos gordura)."
      ]
    },
    {
      title: "OCASIÕES IDEAIS PARA SERVIR OU VENDER",
      type: "text",
      content: "Ideal para vitrines infantis, eventos, festas, kits econômicos e vendas em grande volume. Sabor divertido e acessível, sempre com alta aceitação."
    },
    {
      title: "SUGESTÃO DE HARMONIZAÇÃO (BEBIDAS)",
      type: "text",
      content: "Combina com leite gelado, achocolatado ou café suave."
    },
    {
      title: "SUGESTÕES DE EMBALAGENS",
      type: "text",
      content: [
        "Opção Econômica:",
        "Potes plásticos de 200 ml.",
        "",
        "Opção Gourmet:",
        "Potes de vidro com tampa colorida e rótulo divertido."
      ]
    },
    {
      title: "IDEIAS PARA REDES SOCIAIS",
      type: "text",
      content: [
        "1) O clássico formigueiro em versão cremosa!",
        "2) Pontinhos de chocolate em cada camada.",
        "3) Doce, leve e super nostálgico.",
        "4) O pote mais divertido do cardápio.",
        "5) Cremoso, macio e impossível de resistir."
      ]
    },
    {
      title: "DICAS QUE FAZEM A DIFERENÇA",
      type: "text",
      content: [
        "• Adicione o granulado por último para evitar que derreta.",
        "• Creme e massa frios garantem camadas perfeitas.",
        "• Este pote vende muito por unir nostalgia (lembranças boas), simplicidade e sabor marcante."
      ]
    }
  ]
};

export default function CremosoFormigueiro() {
  return <RecipePage data={data} />;
}
