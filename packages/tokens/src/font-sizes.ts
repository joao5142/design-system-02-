export const fontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '2.75rem',
  '6xl': '3.25rem',
  '7xl': '3.75rem',
}

export type FontSizesTypes = keyof typeof fontSizes

export const FontSizeValues = Object.keys(fontSizes)
