// 矩形1是否在矩形2中
export default function jxzjxz (rect1: number[], rect2: number[][]): boolean {
  const minx1 = Math.min(rect1[0][0], rect1[1][0], rect1[2][0], rect1[0][0], rect1[1][0], rect1[2][0])
  const maxx1 = Math.max(rect1[0][0], rect1[1][0], rect1[2][0], rect1[0][0], rect1[1][0], rect1[2][0])
  const miny1 = Math.min(rect1[0][1], rect1[1][1], rect1[2][1], rect1[0][1], rect1[1][1], rect1[2][1])
  const maxy1 = Math.min(rect1[0][1], rect1[1][1], rect1[2][1], rect1[0][1], rect1[1][1], rect1[2][1])
  const minx2 = Math.min(rect2[0][0], rect2[1][0], rect2[2][0], rect2[0][0], rect2[1][0], rect2[2][0])
  const maxx2 = Math.max(rect2[0][0], rect2[1][0], rect2[2][0], rect2[0][0], rect2[1][0], rect2[2][0])
  const miny2 = Math.min(rect2[0][1], rect2[1][1], rect2[2][1], rect2[0][1], rect2[1][1], rect2[2][1])
  const maxy2 = Math.min(rect2[0][1], rect2[1][1], rect2[2][1], rect2[0][1], rect2[1][1], rect2[2][1])
  if (minx1 >= minx2 && maxx1 <= maxx2 && miny1 >= miny2 && maxy1 <= maxy2) {
    return true
  }
  return false
}
