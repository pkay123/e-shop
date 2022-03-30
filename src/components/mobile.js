const size = {
  sm: "576px",
  md: "768px",
  mm: "768px",
  lg: "1024px",
  xl: "1440px",
};

export const mobile = {
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  mm: `(min-width: ${size.md})`,
  lg: `(max-width: ${size.lg})`,
  xl: `(max-width: ${size.xl})`,
};
