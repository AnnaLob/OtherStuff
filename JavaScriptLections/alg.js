function InsertionSort (arr) {
  for (i = 1; i < arr.length; i ++) {
    let current = arr[i];
    let j = i-1;
    while ((j >= 0) && (arr[j] > curr)) {
      arr[j + 1] = arr[j];
      j--;
    }
    current = arr [j+1];
  }
}