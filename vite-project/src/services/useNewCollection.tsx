import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "./usePopularProducts";

const useNewCollection = () => {
  return useQuery({
    queryKey: ["newCollection"],
    queryFn: () => {
      return axios
        .get<Product[]>(`https://fakestoreapi.com/products?sort=desc`)
        .then(({ data }) => data.slice(0, 8));
    },
  });
};

export default useNewCollection;
