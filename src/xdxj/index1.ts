// 两线段是否相交，方法一
import * as util from '../util/index'
export default function xdxj1 (xd1: number[][], xd2: number[][]): boolean {
  let [leftRect, rightRect] = [xd1, xd2]
  if (Math.min(xd1[0][0], xd1[1][0]) > Math.min(xd2[0][0], xd2[1][0])) {
    [leftRect, rightRect] = [xd2, xd1]
  }
  if (
    (Math.max(leftRect[0][0], leftRect[1][0]) < Math.min(rightRect[0][0], rightRect[1][0])) ||
    (Math.min(leftRect[0][1], leftRect[1][1]) > Math.max(rightRect[0][1], rightRect[1][1]))
  ) {
    return false
  }

  if (
    (util.cross(util.sub(xd1[0], xd2[0]), util.sub(xd2[1], xd2[0])) * util.cross(util.sub(xd2[1], xd2[0]), util.sub(xd1[1], xd2[0]))) >= 0 &&
    (util.cross(util.sub(xd2[0], xd1[0]), util.sub(xd1[1], xd1[0])) * util.cross(util.sub(xd1[1], xd1[0]), util.sub(xd2[1], xd1[0]))) >= 0) {
    return true
  }
  return false
}
