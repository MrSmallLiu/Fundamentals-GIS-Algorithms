import gx from './src/zxdgx/index'
import dzxds from './src/dzxds/index'
import xdxj1 from './src/xdxj/index1'
import xdxj2 from './src/xdxj/index2'
console.log('*********拐向**********************')
console.log('拐向左侧：', gx([[114, 41], [113.35, 39.2]], [[113.35, 39.2], [115, 42]])) // 左侧
console.log('拐向右侧：', gx([[114, 41], [113.35, 39.2]], [[113.35, 39.2], [110, 42]])) // 左侧
console.log('拐向共线：', gx([[114, 41], [113.35, 39.2]], [[113.35, 39.2], [114, 41]])) // 共线
console.log('*********拐向**********************')
console.log('*********点在线段上**********************')
console.log('点在线段上：', dzxds([114.5, 41.5], [[114, 41], [115, 42]]))
console.log('点在线段上：', dzxds([114, 42], [[114, 41], [115, 42]]))
console.log('*********点在线段上**********************')
console.log('************线段相交**********************')
console.log('线段是否相交-方法一：', xdxj1([[114, 42], [113, 37]], [[112, 41], [115, 42]]))
console.log('线段是否相交-方法二：', xdxj2([[114, 42], [113, 37]], [[112, 41], [115, 42]]))
console.log('************线段相交**********************')
