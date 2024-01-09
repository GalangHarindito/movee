import { MainLayout } from "@style/global/global";
import Movies from "fragment/movies/movies";
import { Suspense } from "react";
import Loading from "components/loading/loading";

export default function Home() {
  return (
    <MainLayout>
      <Suspense fallback={<Loading />}>
        <Movies />
      </Suspense>
    </MainLayout>
  );
}
