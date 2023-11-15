import { createContext, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getUserData,
  logoutUser,
  uploadTokens,
} from "../../store/actions/creators/ads";
import {
  useGetCurrentUserMutation,
  useLoginUserMutation,
} from "../services/adsApi";

export const AuthContext = createContext({});
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUserData = localStorage.getItem("user_data");
  });
  const [error, setError] = useState(() => {
    const storedUserData = localStorage.getItem("user_data");
    if (storedUserData) {
      setUser(JSON.parse(storedUserData));
    } else {
      return null;
    }
  });

  const dispatch = useDispatch();
  const [loginUser] = useLoginUserMutation();
  const [getCurrentUser] = useGetCurrentUserMutation();

  const loginUserFn = async ({ email, password }) => {
    try {
      localStorage.clear();
      const user_data = {
        email,
        password,
      };
      await loginUser(user_data);
      await getCurrentUser();
      const currentUserData = localStorage.getItem("user_data");
      const access_token = localStorage.getItem("access_token");
      const refresh_token = localStorage.getItem("refresh_token");

      dispatch(uploadTokens(access_token, refresh_token));
      dispatch(getUserData(JSON.parse(currentUserData)));
      setUser(JSON.parse(currentUserData));
      setError(null);
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };
  const logoutUserFn = () => {
    setUser(null);
    localStorage.clear();
    logoutUser();
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, error, setError, loginUserFn, logoutUserFn }}>
      {children}
    </AuthContext.Provider>
  );
};
