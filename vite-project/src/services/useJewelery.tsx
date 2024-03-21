import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "./usePopularProducts";

const useJewelery = () => {
  return useQuery({
    queryKey: ["jewelery"],
    queryFn: () => {
      return axios
        .get<Product[]>(`https://fakestoreapi.com/products/category/jewelery`)
        .then(({ data }) => data);
    },
  });
};

export default useJewelery;
