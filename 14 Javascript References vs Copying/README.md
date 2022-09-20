# This project was done in the javascipt console

### Strings Numbers and Booleans Reference vs Copying
let age = 100;

let age2 = age;

age2 = 200;

if we console age and age2, age is still 100 whule age2 becomes 200

### Arrays reference and copy
if we assign an array the way we did the numbers it references the array anytime an item in the array is changed
to fix this, we can take a cop instead
e.g 
const ar1= [leila, samad, yelllow]


const ar2= [].concat(ar1)
const ar3= ar1.splice()

const ar4= Array.from(ar1)

const ar5 = [...ar1] //spread syntax

### Object referece vs copy
let obj1 = {name: leila, age: 20}

const obj2 =  Object.assign({}, obj1)

to add a new property

const obj3 = Object.assign({}, obj1, {tel: 234617})

**Note: This only works one level deep**
to completely clone an object we can:

const obj4 = JSON.parse(JSON.stringify(obj1))
