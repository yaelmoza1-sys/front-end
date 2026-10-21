function vowelCount(str) {
    let counts = {}; 
    let vowels = "aeiou"; 

    let lowerStr = str.toLowerCase();

    for (let i = 0; i < lowerStr.length; i++) {
        let char = lowerStr[i];

        if (vowels.includes(char)) {
            counts[char] = (counts[char] || 0) + 1;
        }
    }

    return counts; 
}

console.log(vowelCount('hello world')); 