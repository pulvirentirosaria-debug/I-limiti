import { Link, useLocation } from "wouter";
import { BookOpen, HelpCircle, Printer } from "lucide-react";

interface Props {
  textOnly?: boolean;
  onToggleText?: () => void;
}

export default function Header({ textOnly, onToggleText }: Props) {
  const [location] = useLocation();

  return (
    <header className="no-print sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-blue-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        {/* Title */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-blue-500 flex items-center justify-center shadow-sm group-hover:bg-blue-600 transition-colors">
            <span className="text-white text-lg font-bold">∞</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-xs text-blue-400 font-medium leading-none">Questione di Avvicinamento</p>
            <p className="text-sm font-semibold text-slate-700 leading-snug">L'arte di sfiorare una curva senza mai toccarla</p>
          </div>
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-2">
          <Link href="/">
            <button
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                location === "/" ? "bg-blue-100 text-blue-700" : "text-slate-600 hover:bg-blue-50"
              }`}
            >
              <BookOpen size={15} />
              Esercizi
            </button>
          </Link>
          <Link href="/quiz">
            <button
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                location === "/quiz" ? "bg-blue-100 text-blue-700" : "text-slate-600 hover:bg-blue-50"
              }`}
            >
              <HelpCircle size={15} />
              Quiz
            </button>
          </Link>
          {onToggleText && (
            <button
              onClick={onToggleText}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                textOnly
                  ? "bg-amber-100 text-amber-700 border-amber-200"
                  : "text-slate-600 hover:bg-blue-50 border-transparent"
              }`}
              title="Modalità solo testi"
            >
              <Printer size={15} />
              {textOnly ? "Mostra soluzioni" : "Solo testi"}
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
