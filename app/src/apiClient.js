export const getDoulas = async () => {
  const response = await fetch("/api/doulas");
  console.log("this is the response", response);
  return response.json();
};

export const addTask = async (name) => {
  const response = await fetch("/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });
  return response.json();
};
