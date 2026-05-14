interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <div className="glass-panel rounded-3xl p-6 max-w-xs w-full text-center shadow-[0_25px_80px_rgba(99,102,241,0.18)] animate-[bounce_0.5s_ease-out] border border-fuchsia-500/20">
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="text-3xl font-bold text-fuchsia-300 mb-2 neon-text">BINGO!</h2>
        <p className="text-cyan-100 mb-6">You completed a neon line in the city grid.</p>
        
        <button
          onClick={onDismiss}
          className="w-full glow-button text-white font-semibold py-3 px-6 rounded-3xl shadow-[0_0_1.5rem_rgba(236,72,153,0.18)] active:scale-[0.98] transition-transform"
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
