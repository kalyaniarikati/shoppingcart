// import {shoppingcart} from  '../index';
let { shoppingcart, calculatePrice } = require('../index');

describe("ShoppingCart with same type of products functionality", () => {
    let cart=[];

    test("Shopping cart is a function.", () => {
        expect(typeof(shoppingcart)).toBe("function");
    });

    test("Add products to the shopping cart, Initially Empty cart", () => {
        expect(shoppingcart()).toEqual([]);
    });

    test("A product Shower Gel with a unit price of 49.99", () => {
        expect(() => {
        shoppingcart("Shower Gel", 1, 49.99);
        }).not.toThrow();
    });

    test("Added 5 Shower Gels each with a unit price of 49.99 ", () => {
        cart=shoppingcart("Shower Gel", 4, 49.99);
        expect(cart).toEqual([{ item: 'Shower Gel', quantity: 5, price: 49.99 }]);
    });

    test("Total price of 5 shower gel is calculated, which is 249.95.", () => {
        expect(calculatePrice(cart)).toEqual(249.95);
    });

    test("Added 5 Shower Gel and then 3 Shower Gel to Shopping Cart", () => {
        cart=shoppingcart("Shower Gel", 5, 49.99);
        cart=shoppingcart("Shower Gel", 3, 49.99);
        expect(cart).toEqual([{ item: 'Shower Gel', quantity: 8, price: 49.99 }]);
    });

    test("Total price of 8 shower gel is calculated and is equal to 399.92.", () => {
        expect(calculatePrice(cart)).toEqual(399.92);
    });
});

describe("ShoppingCart with multiple products functionality", () => {
    let cart=[];

    test("Added with 2 Shower Gel and 2 Deodorant to the Shopping cart", () => {
        cart=shoppingcart("Shower Gel", 2, 49.99);
        cart=shoppingcart("Deodorant", 2, 99.99);
        expect(cart.length).toEqual(2);
        expect(cart[0]).toEqual({ item: 'Shower Gel', quantity: 2, price: 49.99 });
        expect(cart[1]).toEqual({ item: 'Deodorant', quantity: 2, price: 99.99 });
    });

    test("Calculate price of 2 shower gels & 2 Deodorants with sales tax, which is equal to 337.46.", () => {
        expect(calculatePrice(cart, 12.5)).toEqual(337.46);
    });
});