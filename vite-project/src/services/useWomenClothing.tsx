import axios from "axios";

import { Product } from "./usePopularProducts";
import { useQuery } from "@tanstack/react-query";

const useWomenClothing = () => {
  return useQuery({
    queryKey: ["womenClothing"],
    queryFn: () => {
      return axios
        .get<Product[]>(
          `https://fakestoreapi.com/products/category/women's%20clothing`
        )
        .then(({ data }) => data);
    },
  });
};

export default useWomenClothing;
