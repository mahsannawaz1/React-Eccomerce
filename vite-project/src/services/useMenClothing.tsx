import axios from "axios";

import { Product } from "./usePopularProducts";
import { useQuery } from "@tanstack/react-query";

const useMenClothing = () => {
  return useQuery({
    queryKey: ["menClothing"],
    queryFn: () => {
      return axios
        .get<Product[]>(
          `https://fakestoreapi.com/products/category/men's%20clothing`
        )
        .then(({ data }) => data);
    },
  });
};

export default useMenClothing;
