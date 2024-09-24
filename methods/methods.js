l=[1,2,3,4,5,6]

//display list l in console
console.log(l);

// display datatype of l
console.log(typeof l);

// display element in 3rd position
console.log(l[3]);

// display length of l
console.log(l.length);

// convert list l to string a
a=l.toString()
console.log(typeof a);

// delete last element in l
l.pop()
console.log(l);

// add element to last position of list
l.push(10)
console.log(l)



//add element by position
l[10]=100
console.log(l);
console.log(l.length);

// remove first value of string
l.shift()
console.log(l);

// add element to first position
l.unshift(101)
console.log(l[0]);

// delete element by position
delete l[4]
console.log(l);

// find position of the element
for (let i in l){
    console.log(i);
}

// find element in string
for (let i of l){
    console.log(i);    
}


// break loop if the element is found 
for (let i of l){
    console.log(i);
    if (i==5) {
        break
    }
}