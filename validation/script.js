function valid(){
    document.getElementById("num_error").innerHTML=""
    document.getElementById("pin_error").innerHTML=""
    document.getElementById("email_error").innerHTML=""

    name=document.getElementById("name").value
    phno=document.getElementById("phno").value
    email=document.getElementById("email").value
    pin=document.getElementById("pin").value
    console.log(name,phno,email,pin);
    if(phno.length!=10){
        document.getElementById("num_error").innerHTML="invalid number"
    }
    else{
        if(! phno.match('[6-9].{9}')){
            document.getElementById("num_error").innerHTML="invalid number"
        }
    }
    if(pin.length!=6){
        document.getElementById("pin_error").innerHTML="invalid pin"
    }
    else{
        if(! pin.match('[6][7-9].{4}')){
            document.getElementById("pin_error").innerHTML="invalid pin"
        }
    }
    if(! email.match("@gmail.com$")){
        document.getElementById("email_error").innerHTML="invalid email"
    }

}