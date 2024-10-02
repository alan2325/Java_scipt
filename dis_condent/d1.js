function demo(){
    let a='welcome'
    console.log(a);
    const main=document.querySelector('.main')
    const div=document.createElement('div')
    div.innerHTML=`<h2 style="color:green">${a} to sunnefo</h2>`
    main.appendChild(div)
}
demo()