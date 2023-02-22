const Candy = require("./candy");

class ShoppingBasket {
  constructor() {
    this.basket = [];
  }

  addItem = (item) => {
    this.basket.push(item)
  };

  getTotalPrice = () => {
    let total = 0;
    if (this.basket.length > 0) {
      this.basket.forEach(element =>{total += element.getPrice();
      });
      return total;
    } else {
      return total;
    }
  };
}

module.exports = ShoppingBasket;
