import { createContext, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { logoutUser, uploadTokens } from "../../store/actions/creators/ads";
import { fetchLogin, fetchUser } from "../../api";

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
      const tokenData = await fetchLogin({ email, password });
      localStorage.setItem("access_token", tokenData.access_token);
      localStorage.setItem("refresh_token", tokenData.refresh_token);
      dispatch(uploadTokens(tokenData.access_token, tokenData.refresh_token));
      const userData = await fetchUser({ tokenData });
      localStorage.setItem("userData", JSON.stringify(userData));
      localStorage.setItem("user_register_id", JSON.stringify(userData.id));
      localStorage.setItem(
        "user_register_email",
        JSON.stringify(userData.email)
      );
      localStorage.setItem("user_register_city", JSON.stringify(userData.city));
      localStorage.setItem("user_register_name", JSON.stringify(userData.name));
      localStorage.setItem("user_register_avatar", JSON.stringify(userData.avatar));
      localStorage.setItem(
        "user_register_surname",
        JSON.stringify(userData.surname)
      );
      localStorage.setItem(
        "user_register_phone",
        JSON.stringify(userData.phone)
      );

      localStorage.setItem(
        "user_register_phone",
        JSON.stringify(userData.phone)
      );
      setUser(userData);
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
