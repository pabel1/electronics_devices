import product1 from "../../assets/images/product1.webp";
import product2 from "../../assets/images/product2.webp";
import product3 from "../../assets/images/product3.webp";
import product4 from "../../assets/images/product4.webp";
import product5 from "../../assets/images/product5.webp";
import product6 from "../../assets/images/product6.webp";
import product7 from "../../assets/images/product7.webp";
import product8 from "../../assets/images/product8.webp";

// Dataset for product types
export const productTypes = [
  { id: 1, name: "Featured Products" },
  { id: 2, name: "Top Selling Products" },
  { id: 3, name: "On-sale Products" },
];

export const products = [
  {
    id: 1,
    typeId: 1,
    image: product1,
    name: "Tablet Thin EliteBook Revolve 810 G6",
    price: "1300.00",
    rating: 4.5,
    isLatest: true
  },
  {
    id: 2,
    typeId: 1,
    image: product2,
    name: "Notebook Widescreen Z51-70 40K6013UPB",
    price: "1100.00",
    rating: 4.5,
  },
  {
    id: 3,
    typeId: 1,
    image: product3,
    name: "Smartphone 6S 128GB LTE",
    price: "750.00",
    isLatest: true
  },
  {
    id: 4,
    typeId: 2,
    image: product4,
    name: "Game Console Controller + USB 3.0 Cable",
    price: "99.00",
  },
  {
    id: 5,
    typeId: 2,
    image: product5,
    name: "Wireless Audio System Multiroom 360",
    price: "2299.00",
    isRelated: true,
    category: "Accessories",
  },
  {
    id: 6,
    typeId: 2,
    image: product6,
    name: "Tablet Red EliteBook Revolve 810 G2",
    price: "2100.00",
    rating: 3.5,
    isLatest: true
  },
  {
    id: 7,
    typeId: 3,
    image: product7,
    name: "Notebook Black Spire V Nitro VN7-591G",
    price: "1999.00",
    rating: 5,
    isRelated: true,
    category: "Accessories",
  },
  {
    id: 8,
    typeId: 3,
    image: product6,
    name: "Tablet Red EliteBook Revolve 810 G2",
    price: "2100.00",
    rating: 3.5,
    isRelated: true,
    category: "Laptops",
  },
  {
    id: 9,
    typeId: 3,
    image: product8,
    name: "Ultrabook UX305CA-FC050T",
    price: "1200.00",
    rating: 5,
    isRelated: true,
    category: "Headphones",
  },
];
