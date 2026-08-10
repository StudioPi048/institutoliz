import logoLiz from "@/assets/logo-liz.webp";
import { handleImageError } from "@/lib/image-fallback";

export const LizLogo = ({ className = "", invert = false }: { className?: string; invert?: boolean }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <img
      src={logoLiz}
      alt="Símbolo do Instituto Liz"
      width={44}
      height={44}
      onError={handleImageError}
      className="h-10 w-10 object-contain md:h-11 md:w-11"
    />
    <div className="leading-none">
      <div className={`font-display text-lg font-bold tracking-[-0.03em] md:text-xl ${invert ? "text-primary-foreground" : "text-deep"}`}>
        Instituto Liz
      </div>
      <div className={`mt-1.5 text-[9px] font-semibold uppercase tracking-[0.24em] ${invert ? "text-primary-foreground/68" : "text-primary/70"}`}>
        Psicogenealogia
      </div>
    </div>
  </div>
);
