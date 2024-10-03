// class car{
//     constructor(name,year){
//         this.name=name
//         this.year=year

//     }
//     display(){
//         console.log(this.name,this.year);
//     }
// }

// bmw=new car('bmw',2024)
// bmw.display()



d={
    f_nm:'al',
    l_nm:'al',
    age:55,
    full_nm:function(){
        return this.f_nm+this.l_nm
    }
}
console.log(d.full_nm());