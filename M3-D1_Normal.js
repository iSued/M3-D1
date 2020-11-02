/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const somma = function (a, b) {
    let c = a + b;
    if (a === b) {
        return 3 * c;
    } else {
        return c;
    }
}
console.log(somma(1, 1))

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
const cinquanta = function (a, b) {
    if ((a > 50 || b > 50) || (a + b > 50)) {
        return true

    } else {
        return false
    }
}
console.log(cinquanta(49, 2))
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
const frase = function (str) {
    let ar = str.split("");
    let br = ar.splice(0, 4);
    return br.join('');
}
console.log(frase('sued'))

/*

4)
 Create a function to find the largest of three given integers.
*/
const grande = function (a, b, c) {
    return Math.max(a, b, c)
}
console.log(grande(1, 20, 3))
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.


*/
const range = function (a, b) {
    if ((a >= 40 && a <= 60) && (b >= 40 && b <= 60)) {
        console.log(true);
    } else if ((a >= 40 && a <= 60) && (b >= 70 && b <= 100)) {
        console.log(true);
    } else if ((a >= 70 && a <= 100) && (b >= 70 && b <= 100)) {
        console.log(true);
    } else if ((a >= 70 && a <= 100) && (b >= 40 && b <= 60)) {
        console.log(true);
    } else {
        console.log(false);
    }
}
range(69, 90)

/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/
const stringCopies = function (str, n) {
    if (n <= 0)
        return false;
    else
        return str.repeat(n);
}
console.log(stringCopies('sued', 10))
/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
const cityName = function (str) {
    if (str.length >= 3 && ((str.substring(0, 3) == 'Los') ||
            (str.substring(0, 3) == 'New')))

    {
        return str;
    }

    return '';
}

console.log(cityName("New York"));
console.log(cityName("Los Angeles"));
console.log(cityName("Rone"));
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
const sumOfThree = function (nums) {
    return nums[0] + nums[1] + nums[2];
}

console.log(sumOfThree([10, 11, 12]));
console.log(sumOfThree([1, 2, 3]));
console.log(sumOfThree([1, 2, -3]));
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
const contains = function (nums) {

    if (nums.indexOf(1) != -1 || nums.indexOf(3) != -1) {
        return true
    } else {
        return false
    }
}

console.log(contains([2, 100]));
console.log(contains([100, 3]));
console.log(contains([1000, 1]));
/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3*/

const notContains = function (nums) {

    if (nums.indexOf(1) == -1 && nums.indexOf(3) == -1) {
        return true
    } else {
        return false
    }
}

console.log(notContains([2, 100]));
console.log(notContains([100, 3]));
console.log(notContains([1000, 1]));


/*11)

Create a function to find the longest string from a given array of strings.*/
const longest = function (str) {
    let max = str.length;
    str.map(x => max = Math.max(max, x.length));
    result = str.filter(x => x.length == max);
    return result;
}

console.log(longest(['s', 'su', 'osadnosndfldmg',
    'supersued', 'sued',
]));

/*12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.*/

const angleType = function (angle) {
    if (angle < 90) {
        return "Acute angle.";
    }
    if (angle === 90) {
        return "Right angle.";
    }
    if (angle < 180) {
        return "Obtuse angle.";
    }
    return "Straight angle.";
}

console.log(angleType(47))
console.log(angleType(90))
console.log(angleType(145))
console.log(angleType(180))

/*13)

Create a function to find the index of the greatest element of a given array of integers*/
const getMaxOfArray = function (numArray) {
    return Math.max.apply(null, numArray);
}
console.log(getMaxOfArray([1, 2, 3, 4, 100000, 9827359, 9827359.2]))
/*14)

Create a function to get the largest even number from an array of integers.*/

const GetMaxEven = function (numArray) {




}
/*15)

Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.*/

/*16)

Create a function to check from two given integers, whether one is positive and another one is negative.*/

/*17)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case.*/

/*18)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.*/

/*19)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".*/

/*20)
Create a
function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC */