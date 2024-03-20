import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  category: "men's clothing" | "women's clothing" | "electronics" | "jewelery";
}

const usePopularProducts = () => {
  return useQuery({
    queryKey: ["popularClothing"],
    queryFn: () => {
      return axios
        .get<Product[]>(`https://fakestoreapi.com/products`)
        .then(({ data }) => {
          let new_data = data?.filter((product) =>
            product.category == "men's clothing" ||
            product.category == "women's clothing"
              ? product
              : null
          );

          new_data = new_data?.sort((a, b) => {
            if (a.rating.rate > b.rating.rate) return -1;
            else if (a.rating.rate < b.rating.rate) return 1;
            else return 0;
          });

          new_data = new_data?.slice(0, 4);
          return new_data;
        });
    },
  });
};

export default usePopularProducts;
