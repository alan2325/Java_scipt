// spread
// l=[1,2,3,4]
// l1=[...l,5,6]
// console.log(l1);


// d={name:'abc',age:24}
// d1={...d,place:'ekm',name:'abcd',age:20}
// console.log(d1);

// structuring

// l=[1,2,3,4]
// const[a,...b]=l
// console.log(a);
// console.log('b=',b);

// d={name:'abc',age:24,place:'ekm'}

// const{name,...d1}=d
// console.log(name);
// console.log(d1);


// calback

// console.log('start');
// function display(callback){
//     console.log('welcome');
//     setTimeout(function(){
//         console.log('inside fun');
//         callback()

//     },3000)
// }

// function display1(){
//     console.log('dis');
// }

// console.log('before');
// display(display1)
// console.log('end');





// function display(){ 
//     let a='welcome'
//     console.log(a);
//     const main = document.querySelector('.main');
//     const div = document.createElement('div');
//     let count2=3// 3min
//     let count = 60
//     let c=setInterval(function(){ ;
//     div.innerHTML = `<h2 style="color:green">${count2}:${count}</h2>`;
//     count--
//     count2--
    
//     if(count==0){
//         clearInterval(c)
//         console.log('completed');
//         div.innerHTML = `<h2 style="color:green">completed</h2>`;

//     }
// },1000)
//     main.appendChild(div)
// }
// display()




// Count down
function display() { 
    console.log('welcome');
    const main = document.querySelector('.main');
    const div = document.createElement('div');
    
    let count2 = 3;
    let count = 60; 
    let c = setInterval(function() {
        const minutes = String(count2).padStart(2, '0');
        const seconds = String(count).padStart(2, '0');
        div.innerHTML = `<h2 style="color:green">${minutes}:${seconds}</h2>`;
        count--;
        if (count < 0) {
            count = 59; 
            count2--;   
        }
        if (count2 < 0) {
            clearInterval(c);
            div.innerHTML = `<h2 style="color:green">completed</h2>`;
            console.log('completed');
        }
    }, 1000);
    main.appendChild(div);
}
display();
