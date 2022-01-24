class Product {
  constructor(name, desc, price, inStock){
    this.name = name
    this.description = desc
    this.price = price
    this.inStock = inStock
    this.productId = Math.random() * 1000000
  }

  priceIncVat() {
    return this.price * 1.25
  }
}


const p1 = new Product('Product1', 'This is product 1', 100, true)

console.log(p1.priceIncVat());
