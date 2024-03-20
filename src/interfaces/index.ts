export interface ProductData {
  id: number;
  attributes: {
    image: string;
    title: string;
    price: number;
    description: string;
    colors: string[];
    company: string;
  };
}

interface Pagination {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
}

export interface MetaData {
  pagination: Pagination;
  categories: string[];
  companies: string[];
}

export interface LoaderData {
  meta: MetaData;
  params: {
    search: string;
    company: string;
    category: string;
    shipping: boolean;
    order: string;
    price: string;
  };
}

interface Order {
  id: string;
  attributes: {
    name: string;
    address: string;
    numItemsInCart: number;
    orderTotal: number;
    createdAt: string;
  };
}

export interface OrderLoaderData {
  orders: Order[];
  meta: MetaData;
  params: {
    search: string;
    company: string;
    category: string;
    shipping: boolean;
    order: string;
    price: string;
  };
}

export type SingleProductType = {
  cardId: string;
  productId: number;
  image: string;
  title: string;
  price: number;
  company: string;
  productColor: string;
  amount: number;
};

export interface CartState {
  cartItems: SingleProductType[]; // Specify the type of cartItems
  numItemsInCart: number;
  cartTotal: number;
  shipping: number;
  tax: number;
  orderTotal: number;
}
