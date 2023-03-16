const isPalindrome = (element) => {
    let middle = Math.floor(element.length / 2);
    let lastElement = element.length -1;
    
    for (let i = 0; i <= middle; i++){

        console.log(i, element[i]);
        console.log(lastElement, element[lastElement]);

        if(element[i] =! element[lastElement]){
            return false
        } else if(i =! middle){
            lastElement -= 1
        }
    }

    return true
}

let result = isPalindrome([1, 2, 3, 1])
console.log(result)






// const palindrome = (item) => {
//     const newArr = []
    
//     item.map(x => newArr.unshift(x));
    
//     console.log(newArr);
//     console.log(item);

//     str1 = item.toString();
//     str2 = newArr.toString();

//     console.log(str1)
//     console.log(str2)


//     if (str1 == str2) {
//         return true
//     } else {
//         return false
//     }
// }

// let result = palindrome([1, 2, 2, 1])

// // result == 1 ? true : false;

// console.log(result)