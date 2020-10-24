// 两线段是否相交，方法二
export default function xdxj2 (xd1: number[][], xd2: number[][]): boolean {
  // 两条线段平行
  const denominator = (xd1[1][0] - xd1[0][0]) * (xd2[1][1] - xd2[0][1]) - (xd1[1][1] - xd1[0][1]) * (xd2[1][0] - xd2[0][0])
  if (denominator === 0) return false
  //   if()
  const r = ((xd1[0][1] - xd2[0][1]) * (xd2[1][0] - xd2[0][0]) - (xd1[0][0] - xd2[0][0]) * (xd2[1][1] - xd2[0][1])) / denominator
  const s = ((xd1[0][1] - xd2[0][1]) * (xd1[1][0] - xd1[0][0]) - (xd1[0][0] - xd2[0][0]) * (xd1[1][1] - xd1[0][1])) / denominator
  if (r >= 0 && r <= 1 && s >= 0 && s <= 1) return true
  return false
}
