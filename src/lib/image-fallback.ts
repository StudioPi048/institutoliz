/**
 * Image error fallback — quando uma imagem falha ao carregar,
 * substitui por um campo Ametista plano da identidade Liz.
 */
export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  const img = e.currentTarget;
  // Evita loop se o fallback também falhar
  if (img.dataset.fallback === "true") return;
  img.dataset.fallback = "true";
  img.removeAttribute("src");
  img.alt = img.alt || "Imagem indisponível";
  img.style.background = "hsl(270 44% 44%)";
  img.style.minHeight = img.style.minHeight || "240px";
};
