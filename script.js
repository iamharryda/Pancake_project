const type = document.querySelector('#type');

//all the toppings and delivery options creating individually

const nuts = document.querySelector('#nuts')
const bananas = document.querySelector('#bananas')
const syrup = document.querySelector('#syrup')
const whippedCream = document.querySelector('#whippedCream')
const iceCream = document.querySelector('#iceCream')
const eat_in = document.querySelector('#eat_in')
const pick_up = document.querySelector('#pick_up')
const delivery = document.querySelector('#delivery')


// declaring both the prices

const bannerPrice = document.querySelector('.price-banner #totalPrice')
const displayPrice = document.querySelector('.price-display #totalPrice')
const displayPrice2 = document.querySelector('#totalPrice2')

function updatePrice() {
    const initPrice = +(type.value);
    let finPrice = initPrice;

    if (nuts.checked) {
        finPrice += +(nuts.value)
    }
    if (bananas.checked) {
        finPrice += +(bananas.value)
    }
    if (syrup.checked) {
        finPrice += +(syrup.value)
    }
    if (whippedCream.checked) {
        finPrice += +(whippedCream.value)
    }
    if (iceCream.checked) {
        finPrice += +(iceCream.value)
    }
    if (eat_in.checked) {
        finPrice += +(eat_in.value)
    }
    if (pick_up.checked) {
        finPrice += +(pick_up.value)
    }
    if (delivery.checked) {
        finPrice += +(delivery.value)
    }

    bannerPrice.textContent = `$${finPrice}`;
    displayPrice.textContent = `$${finPrice}`;
    displayPrice2.textContent = `$${finPrice}`;
}

type.addEventListener('change', updatePrice);
nuts.addEventListener('change', updatePrice);
bananas.addEventListener('change', updatePrice);
syrup.addEventListener('change', updatePrice);
whippedCream.addEventListener('change', updatePrice);
iceCream.addEventListener('change', updatePrice);
eat_in.addEventListener('change', updatePrice);
pick_up.addEventListener('change', updatePrice);
delivery.addEventListener('change', updatePrice);

//showing the order information

const showInfo = document.querySelector('.show-info');

const backBtn = document.querySelector('.show-info button');

const username = document.querySelector('#username')
const container = document.querySelector('.form-container')
const button = document.querySelector('.btn')
const dis_name = document.querySelector('#display-name')
const dis_cake = document.querySelector('#display-cake')
const topp = document.querySelector('#top')
const extraa = document.querySelector('#extraa')
const dis_del = document.querySelector('#deliverya')


function showinfo() {
    dis_name.textContent = username.value;

    username.value = '';
    dis_cake.textContent = type.options[type.selectedIndex].text;

    let topping = [];
    if (nuts.checked) {
        topping.push('Nuts')
    }
    if (bananas.checked) {
        topping.push('Bananas')
    }
    if (syrup.checked) {
        topping.push('Syrup')
    }

    topp.textContent = topping.join(', ');


    let extras = [];
    if (whippedCream.checked) {
        extras.push('Whipped Cream')
    }
    if (iceCream.checked) {
        extras.push('Ice Cream')
    }

    extraa.textContent = extras.join(', ');
    if (eat_in.checked) {
        dis_del.textContent = 'Eat In'
    }
    else if (pick_up.checked) {
        dis_del.textContent = 'Pick Up'
    }
    else if (delivery.checked) {
        dis_del.textContent = 'Home Delivery'
    }

    showInfo.style.display = 'block';
    container.style.display = 'none';
    username.style.display = 'none';

    let items = [
        dis_name.textContent,
        dis_cake.textContent,
        topp.textContent,
        extraa.textContent,
        dis_del.textContent
    ]

    console.log(items)



}

function backToOrder() {
    showInfo.style.display = 'none';
    container.style.display = 'block';
    username.style.display = 'block'
}



button.addEventListener('click', showinfo);
backBtn.addEventListener('click', backToOrder);