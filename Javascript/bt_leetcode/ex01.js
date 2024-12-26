// You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

// Return the score of s.

// Example 1:

// Input: s = "hello"

// Output: 13

// Explanation:

// The ASCII values of the characters in s are: 'h' = 104, 'e' = 101, 'l' = 108, 'o' = 111. So, the score of s would be |104 - 101| + |101 - 108| + |108 - 108| + |108 - 111| = 3 + 7 + 0 + 3 = 13.

var scoreOfString = function (s) {
    if (2 <= s.length && s.length <= 100) {
        let sum = 0;
        for (let i = 0; i < s.length - 1; i++) {
            sum += Math.abs(+s.charCodeAt(i) - +s.charCodeAt(i + 1));
        }
        return sum;
    }
    return false;
};
scoreOfString("hello");

// -------------------------------Ex02-------------------------
// There is a programming language with only four operations and one variable X:

// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.

// Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

// Example 1:

// Input: operations = ["--X","X++","X++"]
// Output: 1
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// --X: X is decremented by 1, X =  0 - 1 = -1.
// X++: X is incremented by 1, X = -1 + 1 =  0.
// X++: X is incremented by 1, X =  0 + 1 =  1.
var finalValueAfterOperations = function (operations) {
    let x = 0;
    const res = operations.map((value, index) => {
        switch (value) {
            case "X++":
            case "++X":
                x += 1;
                break;
            default:
                x -= 1;
        }
    });
    return x;
};

// -------------------------------Ex03-------------------------

// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"

var defangIPaddr = function (address) {
    address = address.split(".").join("[.]");
    return address;
};
defangIPaddr("1.1.1.1");
// -------------------------------Ex04-------------------------
// You are given two strings s and t such that every character occurs at most once in s and t is a permutation of s.

// The permutation difference between s and t is defined as the sum of the absolute difference between the index of the occurrence of each character in s and the index of the occurrence of the same character in t.

// Return the permutation difference between s and t.

// Example 1:

// Input: s = "abc", t = "bac"

// Output: 2

// Explanation:

// For s = "abc" and t = "bac", the permutation difference of s and t is equal to the sum of:

// The absolute difference between the index of the occurrence of "a" in s and the index of the occurrence of "a" in t.
// The absolute difference between the index of the occurrence of "b" in s and the index of the occurrence of "b" in t.
// The absolute difference between the index of the occurrence of "c" in s and the index of the occurrence of "c" in t.
// That is, the permutation difference between s and t is equal to |0 - 1| + |1 - 0| + |2 - 2| = 2.

var findPermutationDifference = function (s, t) {
    let res = 0;
    for (let index in s) {
        res += Math.abs(index - t.indexOf(s[index]));
    }
    return res;
};
// -------------------------------Ex05-------------------------
// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0

var numJewelsInStones = function (jewels, stones) {
    let count = 0;
    for (let vl of stones) {
        jewels.includes(vl) && ++count;
    }
    return count;
};
// -------------------------------Ex06-------------------------
// You are given a 0-indexed array of strings words and a character x.

// Return an array of indices representing the words that contain the character x.

// Note that the returned array may be in any order.

// Example 1:

// Input: words = ["leet","code"], x = "e"
// Output: [0,1]
// Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.

var findWordsContaining = function (words, x) {
    const newArr = [];
    for (var i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            newArr.push(i);
        }
    }
    return newArr;
};
