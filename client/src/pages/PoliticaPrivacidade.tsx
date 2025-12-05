import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Header />
      
      <main className="container py-24 max-w-4xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-12 text-primary">
          Política de Privacidade
        </h1>
        
        <div className="space-y-8 text-lg leading-relaxed text-white/80">
          <section>
            <h2 className="font-display text-2xl font-bold text-secondary mb-4">1. Introdução</h2>
            <p>
              A sua privacidade é importante para nós. É política do site <strong>Bolos de Pote</strong> respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <a href="#" className="text-primary hover:underline">Bolos de Pote</a>, e outros sites que possuímos e operamos.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-secondary mb-4">2. Coleta de Informações</h2>
            <p>
              Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-secondary mb-4">3. Retenção de Dados</h2>
            <p>
              Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-secondary mb-4">4. Compartilhamento de Dados</h2>
            <p>
              Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-secondary mb-4">5. Links Externos</h2>
            <p>
              O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-secondary mb-4">6. Consentimento</h2>
            <p>
              Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados. O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-secondary mb-4">7. Compromisso do Usuário</h2>
            <p>
              O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Bolos de Pote oferece no site e com caráter enunciativo, mas não limitativo:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li>
              <li>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, casas de apostas online, jogos de sorte e azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
              <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Bolos de Pote, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</li>
            </ul>
          </section>

          <section className="pt-8 border-t border-white/10">
            <p className="text-sm text-white/50">
              Esta política é efetiva a partir de <strong>Dezembro/2025</strong>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
