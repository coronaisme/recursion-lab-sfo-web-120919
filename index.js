function maxOf(arr) {
  if (arr.length <= 1) {
    return arr[0];
  } else {
    arr[0] > arr[1] ? arr.splice(1, 1) : arr.splice(0, 1);
    return maxOf(arr);
  }
}

