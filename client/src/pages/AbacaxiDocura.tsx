import RecipePage, { RecipeData } from "@/components/RecipePage";
import { img_abacaxi_1, img_abacaxi_2, img_abacaxi_3 } from "@/lib/images";

const data: RecipeData = {
  title: "Abacaxi Doçura",
  color: "#d97e17", // Amarelo título
  accentColor: "#ffaa00", // Dourado destaque
  stats: {
    yield: "12 potes de 250ml",
    time: "1h 45min",
    cost: "Médio",
    difficulty: "Médio"
  },
  images: [img_abacaxi_1, img_abacaxi_2, img_abacaxi_3],
  sections: [
    {
      title: "Lista de Ingredientes",
      type: "list",
      content: [
        "MASSA: 4 ovos",
        "MASSA: 1 e 1/2 xícara (chá) de açúcar",
        "MASSA: 2 xícaras (chá) de farinha de trigo",
        "MASSA: 1 xícara (chá) de leite quente",
        "MASSA: 1 colher (sopa) de fermento em pó",
        "DOCE DE ABACAXI: 1 abacaxi pérola médio picado",
        "DOCE DE ABACAXI: 1/2 xícara (chá) de açúcar",
        "CREME BELGA: 1 lata de leite condensado",
        "CREME BELGA: 500ml de leite",
        "CREME BELGA: 2 gemas peneiradas",
        "CREME BELGA: 2 colheres (sopa) de amido de milho",
        "CREME BELGA: 1 caixinha de creme de leite (para finalizar)"
      ]
    },
    {
      title: "Preparando os Ingredientes",
      type: "text",
      content: "Descasque e pique o abacaxi em cubos pequenos, descartando o miolo duro. Peneire as gemas para o creme não ficar com cheiro de ovo. Unte a forma."
    },
    {
      title: "Passo a Passo",
      type: "steps",
      content: [
        "1. DOCE DE ABACAXI: Leve o abacaxi e o açúcar ao fogo médio. Não precisa adicionar água. Deixe cozinhar até secar quase todo o líquido e o abacaxi ficar dourado. Reserve.",
        "2. MASSA: Bata as claras em neve. Adicione as gemas uma a uma, depois o açúcar. Bata bem.",
        "3. Diminua a velocidade e alterne o leite quente com a farinha. Por último, o fermento.",
        "4. Asse em forno 180°C por 35-40 min.",
        "5. CREME BELGA: Na panela, dissolva o amido em um pouco de leite. Junte o restante do leite, leite condensado e gemas.",
        "6. Leve ao fogo mexendo sempre até engrossar. Desligue e misture o creme de leite.",
        "7. MONTAGEM: Intercale camadas de bolo (regado com a caldinha que sobrar do doce de abacaxi ou guaraná), creme belga e o doce de abacaxi.",
        "8. Finalize com creme e um pedaço de abacaxi para decorar."
      ]
    },
    {
      title: "Dicas de Chef",
      type: "text",
      content: "O segredo do creme belga perfeito é cozinhar bem o amido para não ficar com gosto residual. Se quiser um creme mais leve, bata chantilly e misture ao creme belga já frio (vira um Creme Diplomata)."
    },
    {
      title: "Lista de Utensílios",
      type: "list",
      content: [
        "Batedeira",
        "Panela para o doce",
        "Panela para o creme",
        "Peneira (para as gemas)",
        "Forma retangular",
        "Potes de 250ml"
      ]
    },
    {
      title: "Sugestões de Substituições",
      type: "text",
      content: "Abacaxi em Calda: Pode usar se estiver com pressa, mas o sabor do abacaxi fresco é incomparável.\n\nCoco: Adicionar coco ralado ao creme belga transforma em um recheio 'Delícia de Abacaxi com Coco'."
    },
    {
      title: "Ocasiões Ideais",
      type: "text",
      content: "Sobremesas de verão, casamentos (versão pote de luxo) e vendas em dias quentes."
    },
    {
      title: "Harmonização",
      type: "text",
      content: "Vinho branco suave ou espumante moscatel. Sucos cítricos também vão bem."
    },
    {
      title: "Sugestões de Embalagens",
      type: "text",
      content: "Use potes com tampa amarela ou dourada. Etiquetas com desenhos tropicais chamam atenção."
    },
    {
      title: "Ideias para Redes Sociais",
      type: "text",
      content: "Fotos com luz natural, mostrando os pedaços de fruta. Use cores vibrantes no cenário."
    },
    {
      title: "Dicas que Fazem a Diferença",
      type: "text",
      content: "Cuidado com a acidez do abacaxi: cozinhe bem com o açúcar para neutralizar a enzima que pode amargar o creme se misturado quente."
    }
  ]
};

export default function AbacaxiDocura() {
  return <RecipePage data={data} />;
}
