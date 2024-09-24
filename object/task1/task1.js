let d = [
    {name: 'anu', age: 20, place: 'ekm'},
    {name: 'sanu', age: 30, place: 'ekm'},
    {name: 'manu', age: 40, place: 'ekm'},
    {name: 'au', age: 50, place: 'okm'},
    {name: 'nu', age: 20, place: 'tkm'}
];

less=[]
grate=[]

for (let i of d) {
    if (i.age >= 30) {
        grate.push(i)
        
    }
    else{
        less.push(i)
    }
}

console.log(grate);
console.log(less);


