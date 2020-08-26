/** product: calculate the product of an array of numbers. */

function product(nums) {
  //Base Case
  if (nums.length == 0) return 1;
  // Normal Case
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longestSoFar = 0) {
  //Base Case
  if (idx == words.length) return longestSoFar;
  if (words[idx].length > longestSoFar) {
    longestSoFar = words[idx].length;
  }
  return longest(words, idx + 1, longestSoFar);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, everyOtherCharStr = "") {
  if (str.charAt(idx) == "") return everyOtherCharStr;
  everyOtherCharStr = everyOtherCharStr.concat(str.charAt(idx));
  return everyOther(str, idx + 2, everyOtherCharStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, forwardIdx = 0, backwardIdx = 0) {
  if (backwardIdx == 0) backwardIdx = str.length - 1 - backwardIdx;
  if (forwardIdx >= backwardIdx) return true;
  if (str.charAt(forwardIdx) == str.charAt(backwardIdx)) {
    return isPalindrome(str, forwardIdx + 1, backwardIdx - 1);
  } else {
    return false;
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (!arr[idx]) return -1;
  if (arr[idx] != val) {
    return findIndex(arr, val, idx + 1);
  } else {
    return idx;
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, reversedString = "", idx = 0) {
  if (idx > str.length - 1) return reversedString;
  reversedString = str.charAt(idx) + reversedString;
  return revString(str, reversedString, idx + 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object")
      stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  let middle = Math.floor((right + left) / 2);
  if (left <= right) {
    if (arr[middle] == val) {
      return middle;
    }
    if (arr[middle] < val) {
      left = middle + 1;
      return binarySearch(arr, val, left, right);
    } else {
      right = middle - 1;
      return binarySearch(arr, val, left, right);
    }
  } else {
    return -1;
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
