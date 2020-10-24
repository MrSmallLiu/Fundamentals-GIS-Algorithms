// 折线段拐向
import * as util from '../util/index'
// 判断 p0p1, p1p2   (p2-p0)*(p1-p0) >0右侧，<0左侧，=0共线
export default function gx (p0p1: number[][], p1p2: number[][]): number {
  if (p0p1[1][0] !== p1p2[0][0] || p0p1[1][1] !== p1p2[0][1]) {
    throw new Error('线段没有连接点')
  }
  const p0 = p0p1[0]
  const p1 = p0p1[1]
  const p2 = p1p2[1]
  return util.cross(util.sub(p2, p0), util.sub(p1, p0))
}
