function shuffleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let randomIndex = getRandomArbitrary(0, arr.length - 1);
    let temp = arr[randomIndex];
    arr[randomIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(shuffleSort(arr));
arr = [654, 567, 43, 5, 87, 0, 6, 3, 9, 4235, 8, 6, 3, 2, 5, 7, 43, 1];
console.log(shuffleSort(arr));
arr = [1];
console.log(shuffleSort(arr));