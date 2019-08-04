import { Product } from './definitions'

const products: Product[] = [
  {
    name: 'iPhone XR',
    category: 'smartphone',
    price: 899
  },
  {
    name: 'iPhone 8 Plus',
    category: 'smartphone',
    price: 699
  },
  {
    name: 'Logitech Wireless Charger',
    category: 'accessory',
    price: 69
  },
  {
    name: 'Apple Silicone Case',
    category: 'accessory',
    price: 39
  },
  {
    name: 'Samsung Galaxy S10 Plus',
    category: 'smartphone',
    price: 1000
  }
]
// const getProducts = (): Product[] => {
//   return products;
// }
const getProducts = function() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(products)
    }, 10)
  })
}

this.window.onload = function() {
  getProducts().then(function(data: Product[]) {
    var message = 'product failed to load'
    if (data) {
      data.forEach(function(item: Product) {
        console.log(item.name + '\t' + item.category + '\t' + item.price)
      })
    }
    this.window.alert(message)
  })
}
