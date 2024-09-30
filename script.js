function firstNonRepeatedChar(str) {
	const freq={};
	for(let char of str){
		if(freq[char]){
			freq[char]++;
		}
		else{
			freq[char]=1;
		}
	}
	for(let char of str){
		if(freq[char]==1){
			return char;
		}
	}
	return null;
}

 const input = prompt("Enter a string");
const result = firstNonRepeatedChar(input);