function mergeSort(array) {
	if (array.length === 1) {
		return array;
	}
	
  let middle = Math.floor(array.length / 2);
	let arr1 = mergeSort(array.slice(0, middle));
	let arr2 = mergeSort(array.slice(middle));
	let counter1 = 0;
	let counter2 = 0;
	let sortedArr = [];
	
	while (counter1 < arr1.length && counter2 < arr2.length) {
		if (arr2[counter2] > arr1[counter1]) {
			sortedArr.push(arr1[counter1]);
			counter1++;
		} else {
			sortedArr.push(arr2[counter2]);
			counter2++;
		}
	}
	if (counter1 < arr1.length) {
		sortedArr = sortedArr.concat(arr1.slice(counter1));
	} else {
		sortedArr = sortedArr.concat(arr2.slice(counter2));
	}
	return sortedArr;
}
