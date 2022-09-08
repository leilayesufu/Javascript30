**Today's project was done in the javascript console**
terms learnt
**Array.prototype.some()**
**Arry.prototype.every()**
**Array.prototype.find()**
**Arry.prototype.findIndex()**
**Array.prototype.slice()**
**Arry.prototype.splice()**

**Array.prototype.some()**
The some() method checks if at leasts one of the element in the array passes the test in the function.
Example: 
const isAdult = people.some(person => {
    const currentYear = new Date().getFullYear();
    return currentYear- person.Year >= 19})
    
**Arry.prototype.every()**
The every() method checks if every element of the array passes the test given in the function.
Example: 
const allAdult = people.every(person => {
    const currentYear = new Date().getFullYear();
    return currentYear- person.Year >= 19})
    
**Array.prototype.find()**
the find() method is similar to the filter method but it returns the value of the first item that matches the provided function
e.g
const comment = comments.find(comment => comment.id === 823423);

**Arry.prototype.findIndex()**
This returns the index of the first element that satisfies the criteria of the function given, if no element satisfies it -1 is returned.
e.g
const comment = comments.findIndex(comment => comment.id === 823423);

**Array.prototype.slice()**
slice() returns a copy of an array without changing the original array

**Arry.prototype.splice()**
changes the content of an array by removing or adding new elements




