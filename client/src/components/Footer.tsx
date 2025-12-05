import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-[#333]">
      <div className="container flex flex-col items-center gap-8">
        
        <div className="flex gap-6 text-sm font-bold tracking-wider uppercase">
          <Link href="/politica-privacidade">
            <a className="text-white hover:text-[#ff7300] transition-colors">POLÍTICAS / PRIVACIDADE</a>
          </Link>
        </div>

        <div className="w-full h-px bg-[#333] max-w-xs" />

        <div className="text-center text-xs text-white/80 font-bold space-y-2">
          <p>© 2025 appRECEITA$ e foryoutoo.click</p>
          <p className="opacity-70 font-normal">
            • Todas as fotos são meramente ilustrativas, feitas por IA.
          </p>
        </div>
      </div>
    </footer>
  );
}
