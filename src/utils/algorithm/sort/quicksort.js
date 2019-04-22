function quicksort(arr) {
  if (!arr.length) return [];
  const [pivot, ...rest] = arr;
  return [
    ...quicksort(rest.filter(x => x < pivot)),
    pivot,
    ...quicksort(rest.filter(x => x >= pivot)),
  ];
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
