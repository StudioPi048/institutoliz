import logoLiz from "@/assets/logo-liz.png";
import { handleImageError } from "@/lib/image-fallback";

export const LizLogo = ({ className = "", invert = false }: { className?: string; invert?: boolean }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <img
      src={logoLiz}
      alt="Logo Instituto Liz"
      width={44}
      height={44}
      onError={handleImageError}
      className="w-11 h-11 object-contain drop-shadow-[0_4px_12px_hsl(var(--primary)/0.35)]"
    />
    <div className="leading-tight">
      <div className={`font-display text-xl font-semibold ${invert ? "text-primary-foreground" : "text-deep"}`}>
        Instituto Liz
      </div>
      <div className={`text-[11px] uppercase tracking-[0.22em] font-medium ${invert ? "text-primary-foreground/80" : "text-primary/80"}`}>
        Psicogenealogia
      </div>
    </div>
  </div>
);
