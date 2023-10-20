export async function fetchRegister({ email, password, userName, city, surname }) {
  const response = await fetch("http://localhost:8090/auth/register", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
      name: userName,
      city: city,
      surname: surname,
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
