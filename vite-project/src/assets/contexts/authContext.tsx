import { Dispatch, createContext } from "react";
import { User } from "../../services/useAuth";
import { AuthAction } from "../../reducers/authReducer";

interface AuthContextType {
  user: User;
  dispatch: Dispatch<AuthAction>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);
export default AuthContext;
