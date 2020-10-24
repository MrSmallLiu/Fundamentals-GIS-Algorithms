export function subtract (a: number[], b: number[]): number[] {
  return [a[0] - b[0], a[1] - b[1]]
}
export function sub (a: number[], b: number[]): number[] {
  return this.subtract(a, b)
}
// a*b >0, a在b顺时针
export function cross (a: number[], b: number[]): number {
  return a[0] * b[1] - b[0] * a[1]
}
