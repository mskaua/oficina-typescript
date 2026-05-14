interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 text-white">
      <div className="text-center max-w-sm">
        <h1 className="text-5xl font-black neon-text mb-3">Bingo Mixer</h1>
        <p className="text-lg text-cyan-200 mb-8">Find your crew in a neon city.</p>
        
        <div className="glass-panel rounded-3xl p-6 border border-purple-500/20 mb-8 shadow-[0_20px_80px_rgba(99,102,241,0.12)]">
          <h2 className="font-semibold text-white mb-3">How to play</h2>
          <ul className="text-left text-slate-300 text-sm space-y-2">
            <li>• Scan the room for people who fit the prompts</li>
            <li>• Tap a square when you find a match</li>
            <li>• Connect 5 in a row to call BINGO</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full glow-button text-white font-semibold py-4 px-8 rounded-3xl text-lg shadow-[0_0_1.5rem_rgba(236,72,153,0.18)] transition-all duration-200 active:scale-[0.98]"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
