let products = [
  {
    name: "Iphone 15 pro max",
    price: 7200000,
    category: "Mobile phone",
    brand: "Apple",
    stock: 110,
  },
  {
    name: "Iron",
    price: 250000,
    category: "Electron product",
    brand: "Samsung",
    stock: 120,
  },
  {
    name: "Monitor 34'",
    price: 1200000,
    category: "Monitor",
    brand: "MI",
    stock: 130,
  },
  {
    name: "Round table",
    price: 1200000,
    category: "Furnitur",
    brand: "IKEA",
    stock: 140,
  },
  {
    name: "Iphone 14",
    price: 5200000,
    category: "Mobile phone",
    brand: "Apple",
    stock: 150,
  },
  {
    name: "Vacum cleaner",
    price: 1200000,
    category: "Electron product",
    brand: "Tornado",
    stock: 160,
  },
  {
    name: "Micro wave",
    price: 300000,
    category: "Mobile phone",
    brand: "Philips",
    stock: 170,
  },
  {
    name: "Water boiler",
    price: 200000,
    category: "Electron product",
    brand: "Samsung",
    stock: 180,
  },
  {
    name: "Ipad",
    price: 4200000,
    category: "Mobile phone",
    brand: "Apple",
    stock: 190,
  },
  {
    name: "Airpod",
    price: 1200000,
    category: "Other",
    brand: "Apple",
    stock: 170,
  },
];
function findPrice() {
  let priceFlt = products.map((a) => {
    return a.price;
  });
  console.log(priceFlt);
}
findPrice();
