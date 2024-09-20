function odd(){
    a=parseInt(document.getElementById("fno").value)
    b=parseInt(document.getElementById("eno").value)
    for (i=a;i<=b;i++)
    {
        if(i%2==1)
        document.write(i)
    }
}