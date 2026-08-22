import { menuArray } from './data.js'

const foodsEl = document.getElementById("foods")
const orderEl = document.getElementById('order')
const modal = document.getElementById('modal')
const paymentForm = document.getElementById('payment')
let orders = []

// --- 事件监听 ---
document.addEventListener('click', function(e){
    if (e.target.dataset.food) {
        handleOrderFoods(e.target.dataset.food)
    } else if (e.target.dataset.order) {
        handleRemoveFoods(e.target.dataset.order)
    } else if (e.target.id === 'complete-order') {
        handleCompleteOrder()
    }
})
paymentForm.addEventListener('submit', function(e){
    e.preventDefault()
    handlePay()
})

/** 添加食物 */
function handleOrderFoods(foodId) {
    orders.push(Number(foodId))
    console.log(orders)
    renderOrder()
}

/** 移除食物 */
function handleRemoveFoods(foodId) {
    orders = orders.filter(function(id) {
        return id != Number(foodId)
    })
    console.log(orders)
    renderOrder()
}

/** 确认订单 */
function handleCompleteOrder() {
    modal.style.display = 'flex'
}

/** 确认支付 */
function handlePay() {
    const name = document.getElementById('modal-name').value
    modal.style.display = 'none'
    orders = []
    orderEl.innerHTML = `
        <div class="result">
            <p>Thanks, ${name}! Your order is on its way!</p>
        </div>
    `
}

/** 渲染订单信息 */
function renderOrder() {
    if (orders.length === 0) {
        orderEl.innerHTML = ''
        
    } else {
        let totalPrice = 0
        const orderList = menuArray.map(function(food){
            if (orders.includes(food.id)) {
                totalPrice += food.price
                return `
                    <div class='order-item'>
                        <h3>${food.name}</h3>
                        <p data-order='${food.id}'>remove</p>
                        <h4>$${food.price}</h4>
                    </div>
                `
            } else {
                return ''
            }
        }).join('')
        orderEl.innerHTML = `
            <h2>Your order</h2>
            <div class='order-item-list'>
                ${orderList}
            </div>
            <div class="order-total">
                <h3>Total price:</h2>
                <h4>$${totalPrice}</h4>
            </div>
            <button id="complete-order" class="green-btn">Complete order</button>
        `
    }
}


// --- 页面渲染 ---
function renderFoods(menuArr) {
    console.log(menuArr)
    foodsEl.innerHTML += menuArr.map(function(item) {
        return `
            <div class="food" id='${item.id}'>
                <div class="emoji">
                    <p>${item.emoji}</p>
                </div>
                <div class="info">
                    <h2>${item.name}</h2>
                    <p>${item.ingredients.join(",")}</p>
                    <h3>$ ${item.price}</h3>
                </div>
                <div>
                    <button class="order-btn" data-food="${item.id}">
                        +
                    </button>
                </div>
            </div>
        `
    }).join('')
}

renderFoods(menuArray)