import type { LoaderFunction, LoaderFunctionArgs } from "react-router-dom";
import { Filter, PaginationContainer, ProductContainer } from "../components";
import { customFetch } from "../utils";

const url = "/products";

export const loader: LoaderFunction = async ({
  request,
}: LoaderFunctionArgs) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const response = await customFetch(url, {
    params,
  });
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta, params };
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
