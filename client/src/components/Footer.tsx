import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="container flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <h3 className="font-display text-2xl font-bold text-primary">BOLOS DE POTE</h3>
          <p className="text-white/60 text-sm font-light tracking-widest">
            SUA RENDA EXTRA COMEÇA NA COZINHA
          </p>
        </div>

        <div className="flex gap-6 text-sm font-medium tracking-wider">
          <Link href="/politica-privacidade">
            <a className="hover:text-primary transition-colors">POLÍTICAS / PRIVACIDADE</a>
          </Link>
        </div>

        <div className="w-full h-px bg-white/10 max-w-xs" />

        <div className="text-center text-xs text-white/40 font-light space-y-2">
          <p>© 2025 appRECEITA$ e www.graciela-fercho.top</p>
          <p className="flex items-center justify-center gap-1">
            Feito com <span className="text-red-500">❤️</span> para empreendedores
          </p>
        </div>
      </div>
    </footer>
  );
}
