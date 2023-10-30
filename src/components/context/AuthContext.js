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
      // const {access: access_token, refresh: refresh_token} = tokenData
      console.log(tokenData)
      // dispatch(uploadTokens(access_token, refresh_token))
      localStorage.setItem("tokenData", JSON.stringify(tokenData));
      localStorage.setItem("accessToken", JSON.stringify(tokenData.access_token));
      const userData = await fetchUser({tokenData})
      console.log(userData)
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
    localStorage.removeItem("tokenData");
    logoutUser();
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, error, setError, loginUserFn, logoutUserFn }}>
      {children}
    </AuthContext.Provider>
  );
};
