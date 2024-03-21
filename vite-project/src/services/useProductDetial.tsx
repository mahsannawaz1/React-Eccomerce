import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "./usePopularProducts";

const useProductDetial = (ID: number) => {
  return useQuery({
    queryKey: ["productDetail"],
    queryFn: () => {
      return axios
        .get<Product>(`https://fakestoreapi.com/products/${ID}`)
        .then(({ data }) => data);
    },
  });
};

export default useProductDetial;
