import { NextResponse } from "next/server";

export async function GET() {
  const headers = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3N2RkYmZhODRjNTFjOWZmMTVhNWE2M2YyYTY4MmEyOSIsInN1YiI6IjY1NzA2YzI4MzgzZGYyMDEyZDExZjdlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GVBH3fWFEF5aarov3P50kVYCgJEp40DJaM8NqZNt4Sg",
  };
  const res = await fetch(
    `${process.env.API_URL}/3/genre/movie/list?language=en`, {headers}
  );
  const data: object | any = await res.json();

  return NextResponse.json(data);
}