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
}

//complexity
  //the time complexity of this solution is quadratic this is due to calling the shift function inside the while loop.
  //shift is linear as every other element shifts down one place

  //space complexity is linear because the queue is a copy of the array but each element in the copy is only stored once

//recursive
  //split array in half
  //recusively sort both halves
  //merge the two sorted halves together