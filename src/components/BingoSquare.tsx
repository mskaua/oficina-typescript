import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-2 text-center border rounded-2xl transition-all duration-150 select-none min-h-[64px] text-[0.72rem] leading-tight';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-fuchsia-600/25 border-fuchsia-400 text-fuchsia-100 shadow-[0_0_1.2rem_rgba(236,72,153,0.2)]'
      : 'bg-cyan-900/80 border-cyan-500 text-cyan-100 shadow-[0_0_0.5rem_rgba(56,189,248,0.18)]'
    : 'bg-slate-950 border-slate-700 text-slate-200 hover:border-fuchsia-400/70 hover:bg-slate-900/90';

  const freeSpaceClasses = square.isFreeSpace
    ? 'font-semibold text-sm text-cyan-200 border-cyan-400/30 bg-cyan-950/50 shadow-[inset_0_0_0.5rem_rgba(56,189,248,0.1)]'
    : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-1 right-1 text-cyan-200 text-xs">✓</span>
      )}
    </button>
  );
}
