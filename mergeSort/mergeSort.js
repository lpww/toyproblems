//merge sort iterative and recursive solutions
//it takes an array
//it outputs a sorted array

//iterative
var mergeSort = function(array) {
  //split array into single arrays or length one, this will be the queue
  var queue = array.map(function(element) {
   return [element];
  });
  var temp = [];
  //while queue.length > 1
  while(queue.length > 1) {
    //merge the first two (sorted) arrays together and sort
    //compare first elements from both arrays
    if(queue[0][0] >= queue[1][0] || queue[0].length === 0) {
      //push smaller one into some temporary array
      temp.push(queue[1].shift());
    } else if(queue[0][0] < queue[1][0] || queue[1].length === 0) {
      temp.push(queue[0].shift());
    }
    //if both arrays are empty
    if(queue[0].length === 0 && queue[1].length === 0) {
      //push temporary array onto end of queue
      queue.push(temp);
      //set temporary array equal to empty array
      temp = [];
      //remove first two element from queue
      queue.shift();
      queue.shift();
    }
  }
  //return queue[0]
  return queue[0];
};

//complexity
  //the time complexity of this solution is quadratic this is due to calling the shift function inside the while loop.
  //shift is linear as every other element shifts down one place

  //space complexity is linear because the queue is a copy of the array but each element in the copy is only stored once

//recursive
var mergeSort = function(array) {
  //base case: if array length is 2, return sorted array
  if(array.length === 2) {
    if(array[0] < array[1]) {
      return array;
    }
    if(array[1] < array[0]) {
      return swap(array, 0, 1);
    }
  }
  //base case: if array length is 1, return array
  if(array.length === 1) {
    return array;
  }

  //split array in half and sort both sides
  var mid = Math.floor( (array.length - 1) / 2 );
  var firstHalf = mergeSort( array.slice(0, mid) );
  var secondHalf = mergeSort( array.slice(mid) );

  var result = [];

  //merge the two sorted halves together
  while(firstHalf.length > 0 || secondHalf.length > 0) {
    if(firstHalf[0] > secondHalf[0] || firstHalf[0] === undefined) {
      result.push(secondHalf.shift());
    } else {
      result.push(firstHalf.shift());
    }
  }

  return result;
};

var swap = function(array, i, j) {
  var result = array.slice();
  var temp = result[i];
  result[i] = result[j];
  result[j] = temp;
  return result;
}