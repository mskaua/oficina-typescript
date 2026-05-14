import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full text-white bg-transparent">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-[rgba(15,23,42,0.9)] border-b border-purple-500/20 shadow-[0_10px_30px_rgba(56,189,248,0.08)]">
        <button
          onClick={onReset}
          className="text-cyan-200 text-sm px-3 py-1.5 rounded-full border border-cyan-400/20 hover:bg-white/5 transition"
        >
          ← Back
        </button>
        <h1 className="font-bold text-xl neon-text">Bingo Mixer</h1>
        <div className="w-16"></div>
      </header>

      {/* Instructions */}
      <p className="text-center text-cyan-200/80 text-sm py-3 px-4">
        Tap a square when you find someone who matches it.
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="bg-[#7c3aed]/15 text-[#f9a8d4] text-center py-2 font-semibold text-sm border border-[#8b5cf6]/30 mx-4 rounded-2xl shadow-[0_0_1rem_rgba(236,72,153,0.12)]">
          🎉 BINGO! You completed a neon line!
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
