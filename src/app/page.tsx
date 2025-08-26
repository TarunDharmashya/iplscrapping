import React, { Suspense, lazy } from "react";
import Loading from "@/components/Loading";
import ErrorBoundary from "@/components/ErrorBoundary";
const Home = lazy(() => import("@/components/Home"));

export default async function Page() {
  return (
    <main className="mx-auto max-w-5xl p-4 space-y-8">
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <Home />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}