export const preprocessLatex = (latex: string) => {
  return latex.replace(/\\\[|\\\]/g, '$$')
}