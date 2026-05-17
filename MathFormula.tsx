import { InlineMath, BlockMath } from "react-katex";

interface Props {
  math: string;
  block?: boolean;
  className?: string;
}

export default function MathFormula({ math, block = false, className }: Props) {
  if (block) {
    return (
      <div className={className}>
        <BlockMath math={math} />
      </div>
    );
  }
  return (
    <span className={className}>
      <InlineMath math={math} />
    </span>
  );
}
