// 矩形包含点--点是否在矩形中
export default function jxbhd (point: number[], rect: number[][]): boolean {
  const minx = Math.min(rect[0][0], rect[1][0], rect[2][0], rect[0][0], rect[1][0], rect[2][0])
  const maxx = Math.max(rect[0][0], rect[1][0], rect[2][0], rect[0][0], rect[1][0], rect[2][0])
  const miny = Math.min(rect[0][1], rect[1][1], rect[2][1], rect[0][1], rect[1][1], rect[2][1])
  const maxy = Math.min(rect[0][1], rect[1][1], rect[2][1], rect[0][1], rect[1][1], rect[2][1])
  if (point[0] >= minx && point[0] <= maxx && point[1] >= miny && point[1] <= maxy) {
    return true
  }
  return false
}
