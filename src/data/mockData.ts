export type User = {
  id: number;
  name: string;
  email: string;
};

export type Product = {
  id: number;
  name: string;
  price: number;
};

export const users: User[] = [
  { id: 1, name: "Pranav", email: "pranav@yopmail.com" },
  { id: 2, name: "Kishan", email: "kishan@yopmail.com" },
  { id: 3, name: "Bapu", email: "bapu@yopmail.com" },
];

export const products: Product[] = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Headphones", price: 150 },
  { id: 3,  name: "Keyboard", price: 80 },
];
