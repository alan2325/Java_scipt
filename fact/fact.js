function fact(){
    a=parseInt(document.getElementById("fno").value)
    fat=1
    i=1
    do{
        fat=fat*i
        document.getElementById("h1").innerHTML=fat
        i++
    }
    while (i<=a)
}