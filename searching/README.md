<h2 align="center"> --SEARCHING-- </h1>
<h2 align="center"> BINARY SEARCH  AND  LINEAR SEARCH  </h2>

<h1>**Linear Search Pseudocode**</h1>

<h4 align="left">*This function accepts an array and a value</h4>
<h4 align="left">*Loop through the array and check if the current array element is equal to the value</h4>
<h4 align="left">*If it is, return the index at which the element is found</h4>
<h4 align="left">*If the value is never found, return -1</h4>

<p>Linear Search</p>
<p>BIG O</p>


Binary Search
**Binary search is a much faster form of search**

Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
Binary search only works on sorted arrays!

<h1>**Binary Search Pseudocode**</h1>
<p align="left">
<h4 align="left">This function accepts a sorted array and a value</h4>
<h4 align="left">Create a left pointer at the start of the array, and a right pointer at the end of the array</h4>
<h4 align="left">While the left pointer comes before the right pointer:</h4>
<h4 align="left">Create a pointer in the middle</h4>
<h4 align="left">If you find the value you want, return the index</h4>
<h4 align="left">If the value is too small, move the left pointer up</h4>
<h4 align="left">If the value is too large, move the right pointer down</h4>
<h4 align="left">If you never find the value, return -1</h4>
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
<p>function matchTable(word) {</p>
  <p>  let arr = Array.from({ length: word.length }).fill(0);</p>
   <p> let suffixEnd = 1;</p>
   <p> let prefixEnd = 0;</p>
  <p>  while (suffixEnd < word.length) {</p>
   <p>   if (word[suffixEnd] === word[prefixEnd]) {</p>
     <p>   // we can build a longer prefix based on this suffix</p>
     <p>   // store the length of this longest prefix</p>
     <p>   // move prefixEnd and suffixEnd</p>
     <p>   prefixEnd += 1;</p>
     <p>   arr[suffixEnd] = prefixEnd;</p>
     <p>   suffixEnd += 1;</p>
     <p> } else if (word[suffixEnd] !== word[prefixEnd] && prefixEnd !== 0) {</p>
       <p> // there's a mismatch, so we can't build a larger prefix</p>
       <p> // move the prefixEnd to the position of the next largest prefix</p>
        <p>prefixEnd = arr[prefixEnd - 1];</p>
      <p>} else {</p>
        <p>// we can't build a proper prefix with any of the proper suffixes</p>
        <p>// let's move on</p>
        <p>arr[suffixEnd] = 0;</p>
        <p>suffixEnd += 1;</p>
      <p>}</p>
    <p>}</p>
   <p> return arr;</p>
  <p>}</p>



 **//KMP** 
  <p>function kmpSearch(long, short) {</p>
   <p> let table = matchTable(short);</p>
    <p>let shortIdx = 0;</p>
    <p>let longIdx = 0;</p>
    <p>let count = 0;</p>
    <p>while (longIdx < long.length - short.length + shortIdx + 1) {</p>
     <p> if (short[shortIdx] !== long[longIdx]) {</p>
      <p>  // we found a mismatch :(</p>
       <p> // if we just started searching the short, move the long pointer</p>
        <p>// otherwise, move the short pointer to the end of the next potential prefix </p>
        <p>// that will lead to a match </p>
        <p>if (shortIdx === 0) longIdx += 1; </p>
        <p>else shortIdx = table[shortIdx - 1]; </p>
      <p>} else { </p>
        <p>// we found a match! shift both pointers </p>
        <p>shortIdx += 1; </p>
        <p>longIdx += 1; </p>
        <p>// then check to see if we've found the substring in the large string </p>
        <p>if (shortIdx === short.length) { </p>
          <p>// we found a substring! increment the count </p>
          <p>// then move the short pointer to the end of the next potential prefix </p>
          <p>count++; </p>
          <p>shortIdx = table[shortIdx - 1]; </p>
       <p> } </p>
     <p> } </p>
    <p>} </p>
    <p>return count; </p>
  <p>} </p>
</p>

<p align="left">
 <p> >Big O of Search Algorithms< </p>
 <p> Linear Search - O(n) </p>
 <p> Binary Search - O(log n) </p>
 <p> Naive String Search - O(nm) </p>
<p> KMP - O(n + m) time, O(m) space </p>
</p>

**"Recap"**
<p align="left">
<p>Searching is a very common task that we often take for granted </p>
<p>When searching through an unsorted collection, linear search is the best we can do </p>
<p>When searching through a sorted collection, we can find things very quickly with binary search </p>
<p>KMP provides a linear time algorithm for searches in strings </p>
</p> 