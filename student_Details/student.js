let s=[
    {id:1, name: 'anu', age: 20, email: 'anu@gmail.com', cource:'eng', date:'08/12/2016'},
    {id:2, name: 'sanu', age: 21, email: 'sanu@gmail.com', cource:'mal', date:'08/12/2016'},
]

function display()
{ 
    const t_var=document.querySelector('.tbl tbody')
    t_var.innerHTML=''
    s.forEach(element => {

        const t_row=document.createElement('tr')

        const t_id=document.createElement('td')
        t_id.textContent=element.id
        t_row.appendChild(t_id)

        const t_name=document.createElement('td')
        t_name.textContent=element.name
        t_row.appendChild(t_name)

        const t_age=document.createElement('td')
        t_age.textContent=element.age
        t_row.appendChild(t_age)

        const t_email=document.createElement('td')
        t_email.textContent=element.email
        t_row.appendChild(t_email)

        const t_cource=document.createElement('td')
        t_cource.textContent=element.cource
        t_row.appendChild(t_cource)

        const t_date=document.createElement('td')
        t_date.textContent=element.date
        t_row.appendChild(t_date)

        const edit_td=document.createElement("td")
        const edit_btn=document.createElement("button")
        edit_btn.textContent="Edit"
        edit_btn.onclick=function () {
            edit_form(element.id)
        }
        edit_td.appendChild(edit_btn)
        t_row.appendChild(edit_td)

        t_var.appendChild(t_row)



        // delete
        const del_td=document.createElement("td")
        const del_btn=document.createElement("button")
        del_btn.textContent="Delete"
        del_btn.onclick=function () {
            Delete_data(element.id)
        }
        del_td.appendChild(del_btn)
        t_row.appendChild(del_td)

        t_var.appendChild(t_row)

    });

}


    // Add

        document.getElementById('submit_form').addEventListener('submit',function(event){
            event.preventDefault()
            const id=parseInt(document.getElementById('id').value)
            const name=document.getElementById('name').value
            const age=parseInt(document.getElementById('age').value)
            const email=document.getElementById('email').value
            const cource=document.getElementById('cource').value
            const date=document.getElementById('date').value
            s.push({id:id,name:name,age:age,email:email,cource:cource,date:date})
            document.getElementById('id').value=''
            document.getElementById('name').value=''
            document.getElementById('age').value=''
            document.getElementById('email').value=''
            document.getElementById('cource').value=''
            document.getElementById('date').value=''

            display()
            // console.log('hello');
        })
            

     
    // Edit display
    
    let edit_id=""
    function edit_form(id) {
        console.log("helo");
        document.getElementById("edit_form").style.display="grid"
        document.getElementById("submit_form").style.display="none"
        const edit_details=s.find(user=>user.id==id)
        document.getElementById("e_id").value=edit_details.id
        document.getElementById("e_name").value=edit_details.name
        document.getElementById("e_age").value=edit_details.age
        document.getElementById("e_email").value=edit_details.email
        document.getElementById("e_cource").value=edit_details.cource
        document.getElementById("e_date").value=edit_details.date
        edit_id=id
    }
    
    // Edit
 
document.getElementById("edit_form").addEventListener("submit",function (event) {
    event.preventDefault()
    console.log('hello')
    const e_id=document.getElementById("e_id").value
    const e_name=document.getElementById("e_name").value
    const e_age=document.getElementById("e_age").value
    const e_email=document.getElementById("e_email").value
    const e_cource=document.getElementById("e_cource").value
    const e_date=document.getElementById("e_date").value
    
    s=s.map(user=>{
        if(user.id==edit_id){
            return {...user,id:e_id,name:e_name,age:e_age,email:e_email,cource:e_cource,date:e_date}
        }
        return user
    })

    document.getElementById("edit_form").style.display="none"
    document.getElementById("submit_form").style.display="grid"
    display()

})


// Delete

function Delete_data(id){
    s=s.filter(user=>{
        if(user.id!=id){
            return user
        }    
    })
    display()
}


display()