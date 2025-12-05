import RecipePage, { RecipeData } from "@/components/RecipePage";
import { img_cremoso_1, img_cremoso_2, img_cremoso_3 } from "@/lib/images";

const data: RecipeData = {
  title: "Cremoso Formigueiro",
  color: "#d97e17", // Laranja título
  accentColor: "#ff7300", // Laranja destaque
  stats: {
    yield: "15 potes de 250ml",
    time: "1h 30min",
    cost: "Médio",
    difficulty: "Fácil"
  },
  images: [img_cremoso_1, img_cremoso_2, img_cremoso_3],
  sections: [
    {
      title: "Lista de Ingredientes",
      type: "list",
      content: [
        "MASSA: 3 ovos grandes",
        "MASSA: 1 xícara (chá) de açúcar",
        "MASSA: 1/2 xícara (chá) de óleo",
        "MASSA: 1 xícara (chá) de leite morno",
        "MASSA: 2 xícaras (chá) de farinha de trigo",
        "MASSA: 1 colher (sopa) de fermento em pó",
        "MASSA: 1/2 xícara (chá) de granulado de chocolate",
        "RECHEIO: 1 lata de leite condensado",
        "RECHEIO: 1 caixinha de creme de leite",
        "RECHEIO: 100g de coco ralado (seco ou fresco)",
        "RECHEIO: 1 colher (sopa) de manteiga",
        "CALDA: 1 xícara (chá) de leite",
        "CALDA: 2 colheres (sopa) de leite condensado"
      ]
    },
    {
      title: "Preparando os Ingredientes",
      type: "text",
      content: "Antes de começar, separe todos os ingredientes. Peneire a farinha de trigo e o açúcar para garantir uma massa mais leve. Aqueça o leite da massa até ficar morno (não fervendo). Unte uma forma retangular média (aprox. 20x30cm) com manteiga e farinha."
    },
    {
      title: "Passo a Passo",
      type: "steps",
      content: [
        "1. MASSA: No liquidificador ou batedeira, bata os ovos, o açúcar e o óleo por 3 minutos até ficar um creme claro.",
        "2. Adicione o leite morno e bata rapidamente só para misturar.",
        "3. Transfira para uma tigela e adicione a farinha aos poucos, misturando com um fouet (batedor de arame).",
        "4. Por último, adicione o fermento e misture delicadamente. Acrescente o granulado e envolva na massa sem bater muito.",
        "5. Despeje na forma untada e asse em forno pré-aquecido a 180°C por cerca de 35-40 minutos (faça o teste do palito).",
        "6. RECHEIO: Em uma panela, misture o leite condensado, creme de leite, coco e manteiga.",
        "7. Leve ao fogo médio, mexendo sempre, até engrossar levemente (ponto de brigadeiro mole, não de enrolar). Deixe esfriar.",
        "8. MONTAGEM: Esfarele o bolo frio ou corte em discos do tamanho do pote.",
        "9. No pote, faça camadas: Bolo umedecido com a calda -> Recheio -> Bolo -> Recheio.",
        "10. Finalize com coco ralado ou granulado por cima."
      ]
    },
    {
      title: "Dicas de Chef",
      type: "text",
      content: "Para um bolo ainda mais fofinho, use ovos em temperatura ambiente. Se quiser um recheio mais gourmet, troque o coco seco por coco em flocos úmido e adoçado. A calda é essencial para o bolo não ressecar na geladeira."
    },
    {
      title: "Lista de Utensílios",
      type: "list",
      content: [
        "Liquidificador ou Batedeira",
        "Tigela grande (Bowl)",
        "Fouet (Batedor de arame)",
        "Forma retangular (20x30cm)",
        "Panela média de fundo grosso",
        "Espátula de silicone",
        "Potes de 250ml com tampa"
      ]
    },
    {
      title: "Sugestões de Substituições",
      type: "text",
      content: "Sem Lactose: Use leite de coco na massa e na calda, e leite condensado/creme de leite sem lactose ou de soja no recheio.\n\nMais Chocolate: Adicione 2 colheres de cacau em pó na massa para fazer um 'Formigueiro Escuro'."
    },
    {
      title: "Ocasiões Ideais",
      type: "text",
      content: "Perfeito para vendas no dia a dia (escritórios, faculdades), festas infantis (pela nostalgia do formigueiro) e como sobremesa de domingo."
    },
    {
      title: "Harmonização",
      type: "text",
      content: "Combina muito bem com café preto fresco ou um chá de capim-santo gelado."
    },
    {
      title: "Sugestões de Embalagens",
      type: "text",
      content: "Potes transparentes de acrílico valorizam as camadas. Use uma fita de cetim marrom ou laranja para decorar. Coloque uma etiqueta com a data de validade (3 a 5 dias na geladeira)."
    },
    {
      title: "Ideias para Redes Sociais",
      type: "text",
      content: "Poste um vídeo em câmera lenta (slow motion) pegando uma colherada bem cremosa. Use legendas como: 'A nostalgia em forma de pote!', 'Quem resiste a um clássico?'."
    },
    {
      title: "Dicas que Fazem a Diferença",
      type: "text",
      content: "Não economize no recheio, ele é a alma do bolo de pote. A proporção ideal é 50% bolo e 50% recheio/cobertura. Sempre sirva gelado!"
    }
  ]
};

export default function CremosoFormigueiro() {
  return <RecipePage data={data} />;
}
