export const LizLogo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="relative w-11 h-11 rounded-full bg-gradient-amethyst flex items-center justify-center shadow-glow">
      <svg viewBox="0 0 32 32" className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M16 4v24" />
        <path d="M16 10c-4 0-7-2-7-5M16 10c4 0 7-2 7-5" />
        <path d="M16 16c-5 0-9-3-9-7M16 16c5 0 9-3 9-7" />
        <path d="M16 22c-6 0-11-4-11-9M16 22c6 0 11-4 11-9" />
      </svg>
    </div>
    <div className="leading-tight">
      <div className="font-display text-xl font-semibold text-deep">Instituto Liz</div>
      <div className="text-[11px] uppercase tracking-[0.22em] text-primary/80 font-medium">Psicogenealogia</div>
    </div>
  </div>
);
