'use strict';

// # We run a Candy shop where we sell candies and lollipops
// # One lollipop's price is 10$
// # And it made from 5gr of sugar
// # One candie's price is 20$
// # And it made from 10gr of sugar
// # we can raise their prices with a given percentage
// #
// # Create a CandyShop class
// # It can store sugar and money as income. The constructor should take the amount of sugar in gramms.
// # we can create lollipops and candies store them in the CandyShop's storage
// # If we create a candie or lollipop the CandyShop's sugar amount gets reduced by the amount needed to create the sweets
// # We can raise the prices of all candies and lollipops with a given percentage
// # We can sell candie or lollipop with a given number as amount
// # If we sell sweets the income will be increased by the price of the sweets and we delete it from the inventory
// # We can buy sugar with a given number as amount. The price of 1000gr sugar is 100$
// # If we buy sugar we can raise the CandyShop's amount of sugar and reduce the income by the price of it.
// # The CandyShop should be represented as string in this format:
// # "Inventory: 3 candies, 2 lollipops, Income: 100, Sugar: 400gr" 

class CandyShop {

  sugar: number;
  income: number;
  candies: Candy[];
  lollipops: Lollipop[];

  constructor(sugar: number, income?: any) {
    this.income = 0;
    this.sugar = sugar;
    this.candies = [];
    this.lollipops = [];
  }

createSweets(type: string) {
  if(type === 'candy') {
    this.candies.push(new Candy);
    this.sugar -= 10;
  } if (type === 'lollipop') {
    this.lollipops.push(new Lollipop);
    this.sugar -= 5;
  }
};

  raisePrices(percentage: number) {
    for (let i: number = 0; i < this.candies.length; i++) {
      this.candies[i].price *= (100 + percentage) / 100;
    }
    for (let i: number = 0; i < this.lollipops.length; i++) {
      this.lollipops[i].price *= (100 + percentage) / 100;
    }
  };

  sell(type: string, sellNum: number) {
    if (type === 'candy') {
      let actualPrice = this.candies[0].price;
      this.income += actualPrice * sellNum;
      this.candies.splice(0, sellNum);
    } if (type === 'lollipop') {
      let actualPrice = this.lollipops[0].price;
      this.income += actualPrice * sellNum;
      this.lollipops.splice(0, sellNum);
    }
  };

  buySugar(buyNum: number) {
    this.sugar += buyNum;
    this.income -= buyNum / 10;
  };

  status() {
    return `Inventory: ${this.candies.length} candies, ${this.lollipops.length} lollipop, Income: ${this.income}, Sugar: ${this.sugar} gr`;
  };
}

abstract class Sweets {

  price: number;
  sugarNeeded: number;

  constructor(price, sugarNeeded) {
    this.price = price;
    this.sugarNeeded = sugarNeeded;
  }

  //abstract sell();
}

class Candy extends Sweets {

  constructor(price = 20, sugarNeeded = 10) {
    super(price, sugarNeeded);
  }

}

class Lollipop extends Sweets {

  constructor(price = 10, sugarNeeded = 5) {
    super(price, sugarNeeded);
  }

}

let candyShop = new CandyShop(300);
console.log(candyShop.status());

candyShop.createSweets('lollipop');
candyShop.createSweets('lollipop');
candyShop.createSweets('candy');
candyShop.createSweets('candy');
console.log(candyShop.status());

candyShop.sell('lollipop', 1);
console.log(candyShop.status());

candyShop.raisePrices(20);
candyShop.sell('lollipop', 1);
console.log(candyShop.status());

candyShop.buySugar(50);
console.log(candyShop.status());



