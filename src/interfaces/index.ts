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
