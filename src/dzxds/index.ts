// 点在线段上, 不能是延长线或者反向延长线
export default function dzxds (point: number[], xd: number[][]): boolean {
  const minx = Math.min(xd[0][0], xd[1][0])
  const miny = Math.min(xd[0][1], xd[1][1])
  const maxx = Math.max(xd[0][0], xd[1][0])
  const maxy = Math.max(xd[0][1], xd[1][1])
  // 不在矩形范围内
  if (point[0] < minx || point[0] > maxx || point[1] < miny || point[1] > maxy) {
    // throw new Error('点')
    return false
  }
  return ((point[0] - xd[0][0]) * (xd[1][1] - xd[0][1]) - (xd[1][0] - xd[0][0]) * (point[1] - xd[0][1])) === 0
}
