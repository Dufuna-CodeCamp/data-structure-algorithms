//given a sorted array of distinct integers  and a target value, return the index if the target value is found. if not, return the index where it would be found if it were inserted in order


function indexValue(arr, targetValue) {

    // first, we check if the target value is present in the array
    if(arr.includes(targetValue)) {
        // if the target value is present
        return arr.indexOf(targetValue);
    }
    else { // if taget value is not present in array
        for ( el of arr) {
            if (targetValue < el) {
                // console.log(el)
                return arr.indexOf(el);
            };
        };
    };
};


const x = [1, 2, 3, 5, 6, 7, 9, 12, 16, 23];

console.log(indexValue(x, 4));