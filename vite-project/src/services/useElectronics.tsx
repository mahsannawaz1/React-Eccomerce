import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "./usePopularProducts";

const useElectronics = () => {
  return useQuery({
    queryKey: ["electronics"],
    queryFn: () => {
      return axios
        .get<Product[]>(
          `https://fakestoreapi.com/products/category/electronics`
        )
        .then(({ data }) => data);
    },
  });
};

export default useElectronics;
