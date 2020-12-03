const chalk = require('chalk');
    let cart=[];

function shoppingcart(item, quantity, price) {
    let found=false;
    if(arguments.length == 0)
    return cart
    if(cart.length > 0){
    let objIndex = cart.findIndex((obj => obj.item === item));
    if(objIndex != -1){
        found=true;
    cart[objIndex].quantity += quantity
    }
    }
    if(cart.length ==0 || !found) {
        cart.push({
            item,
            quantity,
            price
        })
    }
    return cart
}

function calculatePrice(receivedcart, tax=0){
    let total = 0.00;
    console.log(chalk.green(`******************Products in cart are *****************`))
    for(let i in receivedcart){
        console.log(`Product: ${receivedcart[i].item}`)
        console.log(`Unit: ${receivedcart[i].quantity}`)
        console.log(`Price/unit: ${receivedcart[i].price}`)
    }
        

    for(let i=0; i<receivedcart.length ;i++){
        total += receivedcart[i].quantity * receivedcart[i].price
    }
    tax=Number((total*tax/100).toFixed(1))
    total=Number(total.toFixed(2))+tax
    cart=[]
    if(tax !== 0.00)
    console.log(chalk.blue(`Sales tax: ${tax}`))
    console.log(chalk.blue(`Total Price of Shopping Cart: ${total}`))

    return total
}

module.exports = {
    shoppingcart,
    calculatePrice
}