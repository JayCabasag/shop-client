export interface Shop {
  id: number;
  name: string;
  slug: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  logo: string;
  website: string;
  active: boolean;
  owner: string;
  totalProducts: number;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: number;
  shop: number;
  name: string;
  image: string;
  description: string;
  brand: string;
  price: number;
}
