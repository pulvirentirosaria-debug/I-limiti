import { InlineMath } from "react-katex";

interface Props {
  text: string;
  className?: string;
}

export default function MixedText({ text, className }: Props) {
  const parts: Array<{ type: "text" | "math"; content: string }> = [];
  const regex = /\\\((.*?)\\\)/gs;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: "text", content: text.slice(lastIndex, match.index) });
    }
    parts.push({ type: "math", content: match[1] });
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push({ type: "text", content: text.slice(lastIndex) });
  }

  return (
    <span className={className}>
      {parts.map((p, i) =>
        p.type === "math" ? (
          <InlineMath key={i} math={p.content} />
        ) : (
          <span key={i}>{p.content}</span>
        )
      )}
    </span>
  );
}
