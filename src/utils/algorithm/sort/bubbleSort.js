/**
 * 冒泡排序算法
 * 核心思想：比较数组中相邻的两个元素的大小，如果顺序错误就交换
 * n个数会比较n-1趟；
 * 每趟对比相邻的两个元素
 * @param {array} arr
 */
export function bubbleSort(arr) {
  const length = arr.length;
  for (let i = 0; i <= length - 1; i++) {
    for (let j = 0; j <= length - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}
