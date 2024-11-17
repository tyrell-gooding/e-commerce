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
         <img src="${product.photo}" alt="photo"></a>
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

function valForm() {
    // Get form elements
    const firstName = document.querySelectorAll('.input-box input')[0];
    const lastName = document.querySelectorAll('.input-box input')[1];
    const email = document.querySelectorAll('.input-box input')[2];
    const phoneNumber = document.querySelectorAll('.input-box input')[3];
  
    // Check if fields are empty
    if (!firstName.value || !lastName.value || !email.value || !phoneNumber.value) {
      alert('Please fill in all fields.');
      return false;
    }
  
    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email.value)) {
      alert('Invalid email address.');
      return false;
    }
  
    // Phone number validation
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    if (!phoneRegex.test(phoneNumber.value)) {
      alert('Invalid phone number. Use XXX-XXX-XXXX format.');
      return false;
    }
  
    // Submit form if valid
    return true;
  }


