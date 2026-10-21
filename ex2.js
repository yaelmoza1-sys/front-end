function onlyEvenValues(arr) {
    let newArr = []; 
    
    arr.forEach(function(num) { 
      if (num % 2 === 0) {    
        newArr.push(num);    
      }
    });
  
    return newArr; 
  }
  
  console.log(onlyEvenValues([1, 2, 3, 4, 5, 6])); 