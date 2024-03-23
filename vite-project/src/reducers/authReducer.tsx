import { User } from "../services/useAuth";

export interface AuthAction {
  type: "GET";
  user: User;
}

const authReducer = (state: User, action: AuthAction): User => {
  if (action.type == "GET") return action.user;
  return state;
};

export default authReducer;
