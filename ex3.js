function showFirstAndLast(arr) {
    let newArr = [];
    
    let first = arr[0];
    let last = arr[arr.length - 1];

    if (typeof first === 'string') {
        newArr.push(first);
    }

    if (typeof last === 'string' && arr.length > 1) {
        newArr.push(last);
    }

    return newArr;
}

console.log(showFirstAndLast(['hello', 1, 2, 'world', 5])); 