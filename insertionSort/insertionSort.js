// Example usage:
// insertionSort([{value: 2}, {value: 1, order: 2}, {value: 1, order: 1} {value: 3}]);
// yields [{value: 1, order: 1}, {value: 1, order: 2}, {value: 2}, {value: 3}]

var insertionSort = function(unsorted, currentIndex, sorted, comparator) {
  //initialise values
  currentIndex = currentIndex || 0;
  sorted = sorted || [];
  comparator = comparator || 'value';
  //base case - if sorted.length equals array.length
  if(sorted.length === unsorted.length) {
    return sorted;
  }
  //recursive case - look up currentIndex and put into correct spot in sorted array
  sorted = insert(unsorted[currentIndex], sorted, comparator);
  //return recurse on next index
  return insertionSort(unsorted, currentIndex+1, sorted);
};

//insert value into array in correct place
var insert = function(element, array, comparator) {
  var result = [];
  var numOfEquals = 0;
  var equalIndex;

  //if it fits at the end or the array is empty
  if(array.length === 0 || array[array.length-1][comparator] < element[comparator]) {
    array.push(element);
    return array.slice();
  }

  //if it fits at the beginning
  if(array[0][comparator] > element[comparator]) {
    array.unshift(element);
    return array.slice();
  }  
  
  for(var i = 0; i < array.length; i++) {
    //if the value already exists
    if(array[i][comparator] === element[comparator]) {
      if(numOfEquals === 0) {
        equalIndex = i;
      } 
      numOfEquals++;
    }
    //if there is a clear gap
    if(array[i][comparator] < element[comparator] && array[i+1][comparator] > element[comparator]) {
      result = array.splice(i, 0, element);
      return result;
    }
  }
  //this iplementation does not handle multiple elements with the same value
  //that feature could be added by using an insertion sort on the subarray of equal values
  //and then putting the sub array back into place 
  // result = array.splice(equalIndex-1, numOfEquals, )
}