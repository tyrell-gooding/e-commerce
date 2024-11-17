fetch("./product.json")
.then((response)  => {
   return response.json()
})
.then((products) => {
    const productList = document.getElementById('container');
    products.forEach((product) => {
        const productDiv = document.createElement('div');

        productDiv.classList.add('shirts');

        productDiv.innerHTML = `<div id="container">
        <div class="item">
         <img src="${product.photo}" alt="apple giftcard"></a>
         <p>${product.name}</p>
         <h3>${product.price}</h3>
         <h4>${product.desc}</h4>`;

         productList.appendChild(productDiv);
    });
   
});
// .catch(error => console.log(error));

// const productGrid = document.querySelector('#container')

// for(let i = 0; i < 12; i++) {
//     const allProducts = document.createElement('div')
//     productGrid.appendChild(allProducts);

//     allProducts[i].textContent = products.photo;
//     allProducts[i].textContent = products.name;
//     allProducts[i].textContent = products.price;
//     allProducts[i].textContent = products.desc;




