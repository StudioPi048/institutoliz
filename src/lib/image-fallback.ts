/**
 * Image error fallback — quando uma imagem falha ao carregar,
 * substitui por um gradiente Ametista da identidade Liz.
 */
export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  const img = e.currentTarget;
  // Evita loop se o fallback também falhar
  if (img.dataset.fallback === "true") return;
  img.dataset.fallback = "true";
  img.removeAttribute("src");
  img.alt = img.alt || "Imagem indisponível";
  img.style.background =
    "linear-gradient(135deg, hsl(264 62% 27%) 0%, hsl(270 44% 44%) 50%, hsl(273 41% 62%) 100%)";
  img.style.minHeight = img.style.minHeight || "240px";
};
