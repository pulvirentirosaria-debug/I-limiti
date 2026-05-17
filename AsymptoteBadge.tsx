import { InlineMath } from "react-katex";
import type { AsymptoteType } from "@/data/exercises";

const config: Record<AsymptoteType, { bg: string; border: string; text: string; label: string }> = {
  verticale:       { bg: "bg-rose-50",   border: "border-rose-200",   text: "text-rose-700",   label: "Verticale" },
  orizzontale:     { bg: "bg-sky-50",    border: "border-sky-200",    text: "text-sky-700",    label: "Orizzontale" },
  obliquo:         { bg: "bg-violet-50", border: "border-violet-200", text: "text-violet-700", label: "Obliquo" },
  discontinuita:   { bg: "bg-amber-50",  border: "border-amber-200",  text: "text-amber-700",  label: "Disc. Eliminabile" },
};

interface Props {
  type: AsymptoteType;
  equation: string;
}

export default function AsymptoteBadge({ type, equation }: Props) {
  const c = config[type];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${c.bg} ${c.border} ${c.text}`}
    >
      <span className="font-semibold">{c.label}:</span>
      <InlineMath math={equation} />
    </span>
  );
}
