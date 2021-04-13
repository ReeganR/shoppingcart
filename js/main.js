// addCart
const cartList =  [
      {
        "name": "item 1",
        "count": 1,
        "price": 339.99
      },
      {
        "name": "item 2",
        "count": 1,
        "price": 129.29
      },
      {
        "name": "item 3",
        "count": 1,
        "price": 669.99
      },
      {
        "name": "item 4",
        "count": 1,
        "price": 999.99
      }
    ]

// mappingJSON
    const cartData = cartList.map(({ name, count, price }) => {
    
        return `
                                <div class="single--item">
                                    <div class="item--name">
                                        <span>${name}</span>
                                    </div>
                                    <div class="item--quantity">
                                        <div class="quantity--items">
                                            <span class="quantity--minus">-</span>
                                            <span class="quantity--value">${count}</span>
                                            <span class="quantity--plus">+</span>
                                        </div>
                                    </div>
                                    <div class="item--price">
                                        <span class="price">$${price}</span>
                                    </div>
                                    <div class="delete--item">
                                        <span class="iconify delete--item" data-icon="feather-x" data-inline="false"></span>
                                    </div>
                                </div>

        `
    }).join("");

// insert into the html template
document.querySelector('.add--cart--items').innerHTML = cartData;
const text = document.querySelectorAll('.item--price .price');

const priceList = Array.from(text).forEach(price => price.textContent);
console.log(priceList);
// get sum of msgCount prop across all objects in array
// var msgTotal = priceList.reduce(function(prev, cur) {
//   return prev + cur.price;
// }, 0);

// console.log('Total Messages:', msgTotal); 


// navBar open / close
const navBar = document.querySelector('#nav--header');
const closeBtn = document.querySelector('.close--btn');

document.querySelector('.hamburger--menu').addEventListener("click", function() {
    navBar.style.display = "block";
  });

closeBtn.addEventListener("click", function() {
    navBar.style.display = "none";
  });


// showCart open / close
document.querySelector('.adding--cart').addEventListener("click", function() {
   document.querySelector('.addto--cart').classList.toggle("show--cart");
  });

// cartListRemove
  const removeButtons = document.querySelectorAll('.delete--item');

  Array.from(removeButtons).forEach((removeButton) => {
    removeButton.addEventListener('click', () => {
      removeButton.parentNode.remove();
    });
  });



