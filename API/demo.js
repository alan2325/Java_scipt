// fetch('https://dummyjson.com/products').then(response=>response.json()).then(data=>{
//     data.products.forEach(element => {
//         // console.log(element);
//         const row = document.querySelector(".row")
//         const col= document.createElement("div")
//         col.classList.add('col-lg-4')
//         col.innerHTML=
//         `<img src="${element.images}" width="100%">
//         <h3>${element.title}</h3>
//         <h6>${element.price}</h6>`

//         row.appendChild(col)
//     });
// })

fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(data => {
    data.products.forEach(element => {
      const row = document.querySelector(".row");
      const col = document.createElement("div");
      col.classList.add('col-lg-3');
      
      // Setting up inner HTML with image border and buttons
      col.innerHTML = `
      <div class="product-container">
          <img src="${element.thumbnail}" width="100%" alt="${element.title}">
          <h3>${element.title}</h3>
          <h5>$${element.price}</h5>
          <div class="btn-group">
              <button class="btn btn-primary">Buy Now</button>
              <button class="btn btn-secondary">Add to Cart</button>
          </div>
      </div>
  `;
      
      row.appendChild(col);
    });
  });
