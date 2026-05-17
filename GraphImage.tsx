import { useState } from "react";

interface Props {
  exerciseId: number;
  className?: string;
}

export default function GraphImage({ exerciseId, className }: Props) {
  const [imgError, setImgError] = useState(false);
  const src = `/graphs/${exerciseId}.png`;

  return (
    <div className={`graph-zoom-wrap ${className ?? ""}`}>
      {imgError ? (
        <PlaceholderGraph id={exerciseId} />
      ) : (
        <img
          src={src}
          alt={`Grafico esercizio ${exerciseId}`}
          onError={() => setImgError(true)}
          className="w-full max-w-sm rounded-xl border border-blue-100 bg-white shadow-sm"
        />
      )}
    </div>
  );
}

function PlaceholderGraph({ id }: { id: number }) {
  return (
    <div className="w-72 h-52 rounded-xl border-2 border-dashed border-blue-200 bg-blue-50/60 flex flex-col items-center justify-center gap-2 text-blue-400 select-none">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="4" width="40" height="40" rx="6" fill="#dbeafe" />
        <line x1="8" y1="24" x2="40" y2="24" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="3 2"/>
        <line x1="24" y1="8" x2="24" y2="40" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="3 2"/>
        <path d="M10 38 Q17 12 24 24 Q31 36 40 10" stroke="#3b82f6" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </svg>
      <span className="text-sm font-medium">Grafico {id}</span>
      <span className="text-xs text-blue-300">(carica il file ZIP)</span>
    </div>
  );
}
