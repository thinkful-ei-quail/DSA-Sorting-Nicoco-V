const bucket = [5, 3, 7, 9, 4, 2, 0, 7, 6, 8];

function bucketSort(arr, max, min) {
  const numOfBuckets = max - min + 1;
  let buckets = new Array(numOfBuckets);
  console.log(buckets);
  for (let i = 0; i < arr.length; i++) {
    buckets[arr[i]] = arr[i];
  }
  return buckets;
}

console.log(bucketSort(bucket, 9, 0)); // 0, 2, 3, 4, 5, 6, 7, 7, 8, 9
