function Gayathri(arr) {
    function isPerfectSquare(num) {
        if (num < 0) return false;
        let n = 0;
        while (n * n <= num) { 
            if (n * n === num) { 
                return true; 
            }
            n++;
        }
        return false;
    }

    function perfectSquare(arr) { 
        for (let i = 0; i < arr.length; i++) {
            if (isPerfectSquare(arr[i])) { 
                return arr[i];
            }
        }
        return null; // Return null if no perfect square is found
    }

    return perfectSquare(arr);
}

let arr = [4, 36, 4, 5]; 
console.log("First perfect square:", Gayathri(arr));
