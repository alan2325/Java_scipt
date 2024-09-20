function sum(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("eno").value)
    sum=0
    for (i=a;i<=b;i++){
        sum+=i
    }
    document.getElementById("h1").innerHTML=sum
}