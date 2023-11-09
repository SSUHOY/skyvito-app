import axios from "axios";

export async function fetchLogin({ email, password }) {
  const response = await fetch("http://localhost:8090/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "content-type": "application/json",
    },
  });
  if (!response.ok) {
    const errorData = await response.json();
    const errorMessages = Object.values(errorData).flat();
    throw new Error(errorMessages[0]);
  }
  const data = await response.json();
  return data;
}

export async function fetchUser({ tokenData }) {
  const token = tokenData.access_token;
  console.log(token)
  const response = await axios.get("http://localhost:8090/user", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  if (response.status !== 200) {
    throw new Error("Ошибка сервера");
  }
  return response.data;
}
