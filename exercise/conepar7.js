let products = [
  {
    name: "Iphone 15 pro max",
    price: 7200000,
    category: "Mobile phone",
    brand: "Apple",
    stock: 100,
  },
  {
    name: "Iron",
    price: 250000,
    category: "Electron product",
    brand: "Samsung",
    stock: 100,
  },
  {
    name: "Monitor 34'",
    price: 1200000,
    category: "Monitor",
    brand: "MI",
    stock: 100,
  },
  {
    name: "Round table",
    price: 1200000,
    category: "Furnitur",
    brand: "IKEA",
    stock: 100,
  },
  {
    name: "Iphone 14",
    price: 5200000,
    category: "Mobile phone",
    brand: "Apple",
    stock: 100,
  },
  {
    name: "Vacum cleaner",
    price: 1200000,
    category: "Electron product",
    brand: "Tornado",
    stock: 100,
  },
  {
    name: "Micro wave",
    price: 300000,
    category: "Mobile phone",
    brand: "Philips",
    stock: 100,
  },
  {
    name: "Water boiler",
    price: 200000,
    category: "Electron product",
    brand: "Samsung",
    stock: 100,
  },
  {
    name: "Ipad",
    price: 4200000,
    category: "Mobile phone",
    brand: "Apple",
    stock: 100,
  },
  {
    name: "Airpod",
    price: 1200000,
    category: "Other",
    brand: "Apple",
    stock: 100,
  },
];
function get() {
  for (let i = 0; i < products.length; i++) {
    if (products[i].category == "Electron product") {
      console.log(products[i].name, ":", products[i].category);
    }
  }
}
get();
