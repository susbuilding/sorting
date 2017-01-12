
function bubbleSort(array) {
	var sorted = array.slice();

	for(var i = 0; i < sorted.length-1; i++){ // this outer loop is the number of times gone through
		for(var j = 0; j < sorted.length-1; j++){ // inner loop where j is compared to j + 1
			if(sorted[j] > sorted[j+1]){
				var holder = sorted[j];
				sorted[j] = sorted[j+1];
				sorted[j+1] = holder;
			}
		}
	}

	return sorted;
}
