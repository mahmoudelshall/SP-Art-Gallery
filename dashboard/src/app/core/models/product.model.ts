export interface Product {
  id: number;
  name: string;
  categoryId: number;
  price: string;
  stock: number;
  description?: string;
  status: boolean;
  image: string|File;
}


