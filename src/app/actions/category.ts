export const fetchCategory = async () => {
  try {
    const fetchData = await fetch(`${process.env.API_LOCAL_API}/api/category`, {
      method: "GET"
    });

    const data = await fetchData.json();
    return data;
  } catch {
    throw new Error("It seems something happened on the server");
  }
};
