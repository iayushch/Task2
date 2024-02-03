const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const value = document.querySelector('.value')

const pincodeInput = document.getElementById('cod-check');
const addToCart = document.getElementById('add-to-cart');

const totalReviews = document.getElementById('total-reviews');  
const totalRatings = document.getElementById('total-ratings');

const price = document.getElementById('price');




const inValidNumbers = ['560017', '560018', '560019', '560020'];
let verified = false;
const rating = 4.5;
const numberOfStars = 4;


totalReviews.innerHTML = 23;
price.innerHTML = '2,599';


 
if (totalRatings) {
    const fullStars = Math.floor(rating);
    const halfStars = Math.ceil(rating - fullStars);
    const emptyStars = 5 - fullStars - halfStars;

  for (let i = 0; i < fullStars; i++) {
    const starElement = document.createElement('i');
    starElement.classList.add('fa-sharp', 'fa-solid', 'fa-star');
    totalRatings.appendChild(starElement);
  }

    for (let i = 0; i < halfStars; i++) {
        const starElement = document.createElement('i');
        starElement.classList.add('fa-solid', 'fa-star-half-stroke');
        totalRatings.appendChild(starElement);
    }   

    for (let i = 0; i < emptyStars; i++) {
        const starElement = document.createElement('i');
        starElement.classList.add('fa-sharp', 'fa-regular', 'fa-star');
        totalRatings.appendChild(starElement);
    }
} 
else {
    console.error("Element with id 'total-ratings' not found");
}


plus.addEventListener('click', () => {
    value.textContent = parseInt(value.textContent) + 1
})

minus.addEventListener('click', () => {
    if(value.textContent <= 1) return
    value.textContent = parseInt(value.textContent) - 1
})

function limitInputLength(input) {
    if (input.value.length > input.maxLength) {
        input.value = input.value.slice(0, input.maxLength);
    }
}

pincodeInput.addEventListener('click', () => {
    console.log('Checking validity. Please wait...');
    const inputElement = document.getElementById('pincodeInput');
    const enteredNumber = inputElement.value.trim();

    if(enteredNumber.length !== 6) {
        alert('Please enter a valid 6-digit pincode!');
        verified = false;
        return;
    }

    if (inValidNumbers.includes(enteredNumber)) {
        alert('Invalid 6-digit number!'); 
    }
    else {
        console.log('Valid 6-digit number!');
        verified = true;
    }
});

addToCart.addEventListener('click', () => {
    
    if(verified) {
        alert('Added to cart!');
    }
    else {
        alert('Please enter a valid pincode!');
    }
});