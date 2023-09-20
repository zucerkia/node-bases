type ProductCategory = "Smartphone" | "Watch" | "Laptop";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: ProductCategory;
}

export type NewProduct = Omit<Product, "id">;
