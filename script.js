// a= "Hello"



// var a=10
// a=20

// let a=10

// const a=15


// datatypes
// 1.number
    // let a=10
    // let a=1.1


// 2.string
    // let a=23456787


// 3.boolean
    // let a=true
    // let a=false


// 4.undfined
    // let a


// 5.null
    // let a=null


// 6.object
    // array(list)
        // let a=[1,2,3]
    // object(dictionary)
        // let a={name:'abc'}

// 7.bigint

// alert(typeof a)

// function sam1(){
//     alert('welcome')
// }
// function sam2(){
//     alert('hello')
// }


// add two object
// function sample(){
//     a=parseInt(document.getElementById("fno").value)
//     b=parseInt(document.getElementById("sno").value)
//     console.log(a);
//     console.log(b);
//     alert(a+b)
// }



function add(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("sno").value)
    document.getElementById("h1").innerHTML=a+b
}
function sub(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("sno").value)
    document.getElementById("h1").innerHTML=a-b
}
function mul(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("sno").value)
    document.getElementById("h1").innerHTML=a*b
}
function div(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("sno").value)
    document.getElementById("h1").innerHTML=a/b
}
function mod(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("sno").value)
    document.getElementById("h1").innerHTML=a%b
}
