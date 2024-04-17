// segregate positive and negative
// sample = [-2, 2, 5, -4, 1, 8, -1, 6]
function segregateNumbers(arr) {
  mergeSort(arr, 0, arr.length - 1);
}

function merge(arr, l, m, r) {
  let leftLength = m - l + 1;
  let rightLength = r - m;

  let L = [];
  let R = [];

  for (let i = 0; i < leftLength; i++) {
    L[i] = arr[i + l];
  }
  for (let j = 0; j < rightLength; j++) {
    R[j] = arr[m + j + 1];
  }

  let i = 0;
  let j = 0;
  let k = l;

  while (i < leftLength && j < rightLength && (L[i] < 0 || R[j] < 0)) {
    if (L[i] < 0) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  while (i < leftLength) {
    arr[k] = L[i];
    i++;
    k++;
  }
  while (j < rightLength) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

function mergeSort(arr, l, r) {
  if (r <= l) return;

  let m = parseInt((r + l) / 2);
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  merge(arr, l, m, r);
}
let sample = [-2, 2, 5, -4, 1, 0, 8, -1, 6, -5, 9, -3];
let sample2 = [2, 5, 3, 1, 8, 9, 10, 7, 6];
segregateNumbers(sample);
console.log(sample);
