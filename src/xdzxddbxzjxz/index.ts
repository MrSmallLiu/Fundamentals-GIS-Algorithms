// 线段、折线段、多边形在矩形中
export default function xdzxddbxzjxz (a: number[][], rect: number[][]): boolean {
  const rMinx = Math.min(rect[0][0], rect[1][0], rect[2][0], rect[0][0], rect[1][0], rect[2][0])
  const rMaxx = Math.max(rect[0][0], rect[1][0], rect[2][0], rect[0][0], rect[1][0], rect[2][0])
  const rMiny = Math.min(rect[0][1], rect[1][1], rect[2][1], rect[0][1], rect[1][1], rect[2][1])
  const rMaxy = Math.min(rect[0][1], rect[1][1], rect[2][1], rect[0][1], rect[1][1], rect[2][1])
  let minx = a[0][0]
  let maxx = a[0][0]
  let miny = a[0][1]
  let maxy = a[0][1]
  for (const p of a) {
    if (p[0] < minx) minx = p[0]
    if (p[0] > maxx) maxx = p[0]
    if (p[1] < miny) miny = p[1]
    if (p[1] > maxy) maxy = p[1]
  }
  if (rMinx <= minx && rMaxx >= maxx && rMiny <= miny && rMaxy >= maxy) {
    return true
  }
  return false
}
