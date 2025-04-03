
const apiUrl='https://fakestoreapi.com/products';
fetch(apiUrl).then((data)=>{
    return data.json();})
    .then((completed)=>{
    let data1 ="";
    completed.map((items)=>{
    
        data1 +=` <div class="card">
    <h1 class="title">${items.title}</h1>
    <img src=${items.image} alt="images"class="images" >
    <p>${items.description}</p>
    <p class="category">${items.category}</p>
    <p class="price">${items.price}</p>
    </div> `;
    });
    document.getElementById("cards").innerHTML=data1
    }).catch((error)=>{
    console.log("Error", error);
    })