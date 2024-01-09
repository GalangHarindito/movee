"use server";

export const fetchMovies = async () => {
  try {
    const fetchData = await fetch(`${process.env.API_LOCAL_API}/api/movies`, {
      method: "GET",
      cache: "no-cache",
    });

    const data = await fetchData.json();
    return data;
  } catch {
    throw new Error('It seems something happened on the server')
  }
};
