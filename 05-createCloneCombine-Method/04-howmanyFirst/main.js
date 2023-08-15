function first(arr, n) {
    return n == undefined || n == 1 ? arr[0] : arr.slice(0, n);
}
