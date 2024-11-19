// Peak Element
const peakElement = (arr) => {
  let peakElement = null;
  for (let index = 0; index < arr.length; index++) {
    const value = arr[index];

    const firstElement = index === 0 ? -Infinity : arr[index - 1];
    const lastElement = index === arr.length - 1 ? -Infinity : arr[index + 1];

    if (firstElement < value && value > lastElement) {
      peakElement = index;
    }
  }

  return peakElement;
};
console.log("Index for Peak Element :", peakElement([2, 1]));

// sort colors
const sortColors = (arr) => {
  const sorted = structuredClone(arr);
  for (let row = 0; row < sorted.length; row++) {
    for (let col = 0; col < sorted.length; col++) {
      if (sorted[row] < sorted[col] && row !== col) {
        const temp = sorted[col];
        sorted[col] = sorted[row];
        sorted[row] = temp;
      }
    }
  }

  return sorted;
};
console.log("sorted colors : ", sortColors([1, 1, 0, 0, 2, 2]));

//find encrypted string
const encryptString = (str, key) => {
  if (key > str.length) return;
  let encrypted = [];

  for (let index = 0; index < str.length; index++) {
      let position = key + index;
      if (position >= str.length) {
          position %= str.length;
        }
        const value = str[position];
    encrypted[index] = value;
  }
  const encryptedString = encrypted.join('')
  return encryptedString;
};
console.log("encrypt string : ", encryptString("dart", 3));
