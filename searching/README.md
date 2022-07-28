<h2 align="center"> --SEARCHING-- </h1>
<h2 align="center"> BINARY SEARCH  AND  LINEAR SEARCH  </h2>

**Linear Search Pseudocode**

<h3 align="left"> This function accepts an array and a value</h3>
<h3 align="left">Loop through the array and check if the current array element is equal to the value</h3>
<h3 align="left">If it is, return the index at which the element is found</h3>
<h3 align="left">If the value is never found, return -1</h3>

Linear Search
BIG O


Binary Search
**Binary search is a much faster form of search**

Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
Binary search only works on sorted arrays!

**Binary Search Pseudocode**
<p align="left">
This function accepts a sorted array and a value
Create a left pointer at the start of the array, and a right pointer at the end of the array
While the left pointer comes before the right pointer:
Create a pointer in the middle
If you find the value you want, return the index
If the value is too small, move the left pointer up
If the value is too large, move the right pointer down
If you never find the value, return -1
</p>

O(log n)
Worst and Average Case

O(1)
Best Case

Naive String Search
Suppose you want to count the number of times a smaller string appears in a longer string
A straightforward approach involves checking pairs of characters individually

<h1>Naive String Search</h1>
Long string:

Short string: 

wowomgzomg
omg
wowomgzomg
omg
<p align="left">
Pseudocode
Loop over the longer string
Loop over the shorter string
If the characters don't match, break out of the inner loop
If the characters do match, keep going
If you complete the inner loop and find a match, increment the count of matches
Return the count
</p>
<p align="left">
function matchTable(word) {
    let arr = Array.from({ length: word.length }).fill(0);
    let suffixEnd = 1;
    let prefixEnd = 0;
    while (suffixEnd < word.length) {
      if (word[suffixEnd] === word[prefixEnd]) {
        // we can build a longer prefix based on this suffix
        // store the length of this longest prefix
        // move prefixEnd and suffixEnd
        prefixEnd += 1;
        arr[suffixEnd] = prefixEnd;
        suffixEnd += 1;
      } else if (word[suffixEnd] !== word[prefixEnd] && prefixEnd !== 0) {
        // there's a mismatch, so we can't build a larger prefix
        // move the prefixEnd to the position of the next largest prefix
        prefixEnd = arr[prefixEnd - 1];
      } else {
        // we can't build a proper prefix with any of the proper suffixes
        // let's move on
        arr[suffixEnd] = 0;
        suffixEnd += 1;
      }
    }
    return arr;
  }



 **//KMP** 
  function kmpSearch(long, short) {
    let table = matchTable(short);
    let shortIdx = 0;
    let longIdx = 0;
    let count = 0;
    while (longIdx < long.length - short.length + shortIdx + 1) {
      if (short[shortIdx] !== long[longIdx]) {
        // we found a mismatch :(
        // if we just started searching the short, move the long pointer
        // otherwise, move the short pointer to the end of the next potential prefix
        // that will lead to a match
        if (shortIdx === 0) longIdx += 1;
        else shortIdx = table[shortIdx - 1];
      } else {
        // we found a match! shift both pointers
        shortIdx += 1;
        longIdx += 1;
        // then check to see if we've found the substring in the large string
        if (shortIdx === short.length) {
          // we found a substring! increment the count
          // then move the short pointer to the end of the next potential prefix
          count++;
          shortIdx = table[shortIdx - 1];
        }
      }
    }
    return count;
  }
</p>

<p align="left">
>Big O of Search Algorithms<
Linear Search - O(n)
Binary Search - O(log n)
Naive String Search - O(nm)
KMP - O(n + m) time, O(m) space
</p>

**"Recap"**
<p align="left">
Searching is a very common task that we often take for granted
When searching through an unsorted collection, linear search is the best we can do
When searching through a sorted collection, we can find things very quickly with binary search
KMP provides a linear time algorithm for searches in strings
</p>