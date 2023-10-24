import { createContext, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/actions/creators/ads";
import { fetchLogin } from "../../api";

export const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUserData = localStorage.getItem("userData");
  });
  const [error, setError] = useState(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUser(JSON.parse(storedUserData));
    } else {
      return null;
    }
  });

  const dispatch = useDispatch();

  const loginUserFn = async ({ email, password }) => {
    try {
      const userData = await fetchLogin({ email, password });
      localStorage.setItem("userData", JSON.stringify(userData));
      setUser(userData);
      setError(null);
    } catch (error) {
      setError(error.message);
      throw error;
    }
  };
  const logoutUserFn = () => {
    setUser(null);
    localStorage.removeItem("userData");
    logoutUser();
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, error, setError, loginUserFn, logoutUserFn }}>
      {children}
    </AuthContext.Provider>
  );
};
