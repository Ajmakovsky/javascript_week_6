const ShoppingBasket = require("./shoppingbasket");

describe("Shopping basket", () => {

  let shoppingbasket; 

  beforeEach(() =>{
    shoppingbasket = new ShoppingBasket(); 
  })

  it("Returns 0 for an empty shopping basket", () => {
    expect(shoppingbasket.getTotalPrice()).toBe(0);
  });

  it('Adds an item to the basket', () => {
    const snickersdouble = { getName: () => 'Snickers', getPrice: () => 2.99}
    shoppingbasket.addItem(snickersdouble);
    expect(shoppingbasket.getTotalPrice()).toBe(2.99);
  })

  it('Adds multiple items to the basket', () => {
    const snickersdouble = { getName: () => 'Snickers', getPrice: () => 2.99}
    const sourpatchdouble = { getName: () => 'Sour Patch', getPrice: () => 5.99}
    const chompdouble = { getName: () => 'Chomp', getPrice: () => 7.99}


    shoppingbasket.addItem(snickersdouble);
    shoppingbasket.addItem(sourpatchdouble);
    shoppingbasket.addItem(chompdouble);

    expect(shoppingbasket.getTotalPrice()).toBe(16.97);
  })

});
