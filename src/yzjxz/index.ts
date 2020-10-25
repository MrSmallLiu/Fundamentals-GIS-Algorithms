// 圆在矩形中
interface Circle {
  center: number[];
  r: number;
}
export default function yzjxz (c: Circle, rect: number[][]): boolean {
  const minx = Math.min(rect[0][0], rect[1][0], rect[2][0], rect[0][0], rect[1][0], rect[2][0])
  const maxx = Math.max(rect[0][0], rect[1][0], rect[2][0], rect[0][0], rect[1][0], rect[2][0])
  const miny = Math.min(rect[0][1], rect[1][1], rect[2][1], rect[0][1], rect[1][1], rect[2][1])
  const maxy = Math.min(rect[0][1], rect[1][1], rect[2][1], rect[0][1], rect[1][1], rect[2][1])
  const distance = Math.max(Math.abs(c.center[0] - minx), Math.abs(c.center[0] - maxx), Math.abs(c.center[1] - miny), Math.abs(c.center[1] - maxy))
  return distance >= c.r
}
