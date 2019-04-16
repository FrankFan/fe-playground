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

/**
 * 快速排序
 * http://www.susamko.com/119.html
 * https://mp.weixin.qq.com/s/PQLC7qFjb74kt6PdExP8mw
 * @param {Array} arr
 */
export function quickSort(arr, startIndex, endIndex) {
  // 递归结束条件：startIndex >= endIndex
  if (startIndex >= endIndex) {
    return;
  }
  // 得到基准元素的位置
  const pivotIndex = partition(arr, startIndex, endIndex);
  console.log(`pivotIndex = ${pivotIndex}`);
  // 根据基准元素，分成两部分递归
  quickSort(arr, startIndex, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, endIndex);
  return arr;
}

function partition(arr, startIndex, endIndex) {
  // 取第一个位置的元素作为基准元素
  const pivot = arr[startIndex];
  let left = startIndex;
  let right = endIndex;
  while (left !== right) {
    // 控制right指针比较并左移
    while (left < right && arr[right] > pivot) {
      right--;
    }

    // 控制left指针比较并右移
    while (left < right && arr[left] <= pivot) {
      left++;
    }

    // 就地交换(in-place)left和right指向的元素
    if (left < right) {
      const tmp = arr[left];
      arr[left] = arr[right];
      arr[right] = tmp;
    }
  }

  // pivot和指针重合点,交换元素
  const p = arr[left];
  arr[left] = arr[startIndex];
  arr[startIndex] = p;

  return left;
}
