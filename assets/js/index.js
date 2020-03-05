const btns = [{
    diametr: 0.8,
    price: 3.39,
    weight: 5
},
{
    diametr: 0.8,
    price: 3.03,
    weight: 15
},
{
    diametr: 1.0,
    price: 2.76,
    weight: 15
},
{
    diametr: 1.2,
    price: 3.03,
    weight: 5
},
{
    diametr: 1.2,
    price: 2.77,
    weight: 15
}]

let quantity = Number(document.querySelector('.product-calculator-quantity__input').value);
let resultCost = document.querySelector('.product-calculator-cost-result').innerHTML;
let btnIndex = document.querySelector('.pressed').name - 1;


document.querySelector('.product-calculator__quantity').addEventListener('mousedown', () => mousedownWeight(event));
document.querySelector('.product-types-buttons__div').addEventListener('mousedown', () => mousedownProductButtons(event));
document.querySelector(".add-to-order__btn").addEventListener('mousedown', () => mousedownAddToOrder());


function mousedownAddToOrder() {
    let txt = `${btns[btnIndex].diametr}mm, ${btns[btnIndex].price} руб./кг (${btns[btnIndex].weight}кг)`;
    document.querySelector('.my-textarea').value += ` \n${txt} -  ${quantity} кг. - ${resultCost}`  ;
}


function mousedownWeight(event) {
   if (event.target.className.includes('product-calculator-quantity-btn__decrement') && quantity != 0){
      quantity -= btns[btnIndex].weight;
   }
   if (event.target.className.includes('product-calculator-quantity-btn__increment')) {
        quantity += btns[btnIndex].weight;
   }
     document.querySelector('.product-calculator-quantity__input').value = quantity;
     calcResultCost(btns[btnIndex].price);
     
}
// недописанная ф-я ввода количества кг с клавиатуры
// не пересчитывет Итоговую сумму и разрешает ввод букв

// document.querySelector('.product-calculator-quantity__input').addEventListener('mousedown', () => manualInputWeight(event));
// function manualInputWeight(event) {

//     if ((event.keyCode < 48 || event.keyCode > 57) || (event.keyCode < 96 || event.keyCode > 105)) {
//         return false;
//     } else {
//         quantity = document.querySelector('.product-calculator-quantity__input').value;
//     }
//     calcResultCost(btns[btnIndex].price);
// }

function mousedownProductButtons(event) {
    btnIndex = getBtnIndex(event);
    document.querySelector('.product-calculator-quantity__input').value = btns[btnIndex].weight;
    calcResultCost(btns[btnIndex].price);
    quantity = Number(document.querySelector('.product-calculator-quantity__input').value);
    resultCost = document.querySelector('.product-calculator-cost-result').innerHTML;
}

function calcResultCost(price) {
   resultCost = (price * document.querySelector('.product-calculator-quantity__input').value).toFixed(2) + ' бел.руб.';
   document.querySelector('.product-calculator-cost-result').innerHTML = resultCost;
}

function getBtnIndex(event) {
    document.querySelector('.pressed').classList.remove('pressed');
    event.target.classList.add('pressed');
    return event.target.name - 1;
}
