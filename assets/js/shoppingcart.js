
var emptyBag = document.querySelector('#empty-bag');

var products = {
    '01': {
        name: 'Linnen shirt',
        price: '25',
        quantity: '10',
        image: 'assets/img1.jpg'

    },
    '02': {
        name: 'Cloth shirt',
        price: '24.99',
        quantity: '5',
        image: 'assets/img2.jpg'
    }
};


var addToCartBtns;
window.addEventListener('load', function () {
    init();
}, false);


function init() {
    addToCartBtns = document.querySelectorAll('.add-to-cart');
    for (var i = 0; i < addToCartBtns.length; i++) {
        addToCartBtns[i].addEventListener('click', addToCart, false);
    }
}

function addToCart(event) {
    var button = event.target;
    var productId = button.getAttribute('data-product-id');
    populateItem(products[productId], productId);
}

function populateItem(object, productId) {
    var nameElement = document.createElement('p');
    var price = document.createElement('p');
    var quantity = document.createElement('p');
    var image = document.createElement('img');
    var container = document.createElement('div');
    var deleteBtn = document.createElement('button');
    emptyBag.classList.add('hidden');
    container.setAttribute('data-container-id', productId);
    container.classList.add('selected-item');
    nameElement.innerHTML = object.name;
    price.innerHTML = object.price;
    quantity.innerHTML = object.quantity;
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.setAttribute('data-delete-item-id', productId);
    deleteBtn.addEventListener('click', deleteItem);
    image.src = object.image;
    container.appendChild(image);
    container.appendChild(nameElement);
    container.appendChild(price);
    container.appendChild(quantity);
    container.appendChild(deleteBtn);
    document.getElementById('shoppingbag').appendChild(container);
}

function deleteItem(event) {
    var id = event.target.getAttribute('data-delete-item-id');
    var element = document.querySelector(`[data-container-id='${id}']`)
    var allElements = document.querySelectorAll('[data-container-id]');
    if (allElements.length === 1) {

        emptyBag.classList.remove('hidden');

    }
    console.log(allElements);
    element.parentNode.removeChild(element);

}

