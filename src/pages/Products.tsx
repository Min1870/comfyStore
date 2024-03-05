import { LoaderFunction, LoaderFunctionArgs } from "react-router-dom";
import { Filter, PaginationContainer, ProductContainer } from "../components";
import { customFetch } from "../utils";

const url = "/products";

export const loader: LoaderFunction = async ({
  request,
}: LoaderFunctionArgs) => {
  const response = await customFetch(url);
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta };
};

const Products = () => {
  return (
    <>
      <Filter />
      <ProductContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
