import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface User {
  email: string;
  password: string;
}

const useAuth = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () =>
      axios
        .get<User[]>("https://fakestoreapi.com/users")
        .then((res) => res.data),
  });
};

export default useAuth;
