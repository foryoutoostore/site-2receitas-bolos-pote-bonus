import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#2f1c0c] text-[#e3c093] py-12 border-t border-[#944300]">
      <div className="container flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <h3 className="text-2xl font-bold text-[#ff7300] uppercase">BOLOS DE POTE</h3>
          <p className="text-[#e3c093]/80 text-sm font-bold tracking-widest uppercase">
            SUA RENDA EXTRA COMEÇA NA COZINHA
          </p>
        </div>

        <div className="flex gap-6 text-sm font-bold tracking-wider uppercase">
          <Link href="/politica-privacidade">
            <a className="hover:text-[#ff7300] transition-colors">POLÍTICAS / PRIVACIDADE</a>
          </Link>
        </div>

        <div className="w-full h-px bg-[#944300] max-w-xs" />

        <div className="text-center text-xs text-[#e3c093]/60 font-bold space-y-2">
          <p>© 2025 appRECEITA$ e www.graciela-fercho.top</p>
          <p className="flex items-center justify-center gap-1">
            Feito com <span className="text-red-500">❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
