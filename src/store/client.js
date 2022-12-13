const token = import.meta.env.VITE_JWT_TOKEN;

// We can extend this function to handle other HTTP methods but now we don't need it
export default async (url) => {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  console.log(data);
  return data;
};